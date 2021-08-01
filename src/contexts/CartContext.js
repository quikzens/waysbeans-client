import { createContext, useState, useEffect } from 'react'
import { API, configJSON } from '../config/api'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  // init state
  const [carts, setCarts] = useState([])
  const [total, setTotal] = useState(0)
  const [totalQty, setTotalQty] = useState(0)

  useEffect(() => {
    // get carts data, total, and totalQuantity from localStorage
    const cartsData = localStorage.getItem('carts')
      ? JSON.parse(localStorage.getItem('carts'))
      : null
    if (cartsData) setCarts(cartsData)

    const totalData = localStorage.getItem('total')
      ? parseInt(localStorage.getItem('total'))
      : null
    if (totalData) setTotal(totalData)

    const totalQtyData = localStorage.getItem('totalQty')
      ? parseInt(localStorage.getItem('totalQty'))
      : null
    if (totalQtyData) setTotalQty(totalQtyData)
  }, [])

  const saveCarts = (newCarts) => {
    // save carts to state and localStorage
    setCarts(newCarts)
    localStorage.setItem('carts', JSON.stringify(newCarts))
  }

  const addTotal = (price) => {
    setTotal((prev) => {
      const newTotal = prev + price
      localStorage.setItem('total', newTotal)
      return newTotal
    })
  }

  const subtractTotal = (price) => {
    setTotal((prev) => {
      const newTotal = prev - price
      localStorage.setItem('total', newTotal)
      return newTotal
    })
  }

  const addTotalQty = (num = 1) => {
    setTotalQty((prev) => {
      const newTotalQty = prev + num
      localStorage.setItem('totalQty', newTotalQty)
      return newTotalQty
    })
  }

  const subtractTotalQty = (num = 1) => {
    setTotalQty((prev) => {
      const newTotalQty = prev - num
      localStorage.setItem('totalQty', newTotalQty)
      return newTotalQty
    })
  }

  const addCart = (productId, price, product) => {
    let newCarts = carts

    // first, check if it's the same product user added before
    const checkId = newCarts.filter((cart) => productId === cart.productId)
    if (checkId.length > 0) {
      // if true, just add orderQuantity and subtotal
      newCarts = newCarts.map((cart) => {
        if (productId === cart.productId) {
          return {
            ...cart,
            orderQuantity: cart.orderQuantity + 1,
            subtotal: cart.subtotal + price,
          }
        }

        return cart
      })
    } else {
      // if not, push new item to the carts
      const cart = {
        productId,
        price,
        product,
        orderQuantity: 1,
        subtotal: price,
      }
      newCarts.push(cart)
    }

    // save carts to localStorage, add total and totalQty
    saveCarts(newCarts)
    addTotal(price)
    addTotalQty()
  }

  const subtractCart = (productId, price) => {
    let newCarts = carts

    // subtract orderQuantity and subtotal
    newCarts = newCarts.map((cart) => {
      if (productId === cart.productId) {
        const newCart = {
          ...cart,
          orderQuantity: cart.orderQuantity - 1,
          subtotal: cart.subtotal - price,
        }

        return newCart
      }

      return cart
    })
    // if orderQuantity = 0, delete that cart
    newCarts = newCarts.filter((cart) => cart.orderQuantity > 0)

    // save cart to localStorage, subtract total and totalQty
    saveCarts(newCarts)
    subtractTotal(price)
    subtractTotalQty()
  }

  const deleteCart = (productId) => {
    let newCarts = carts

    // get deleted cart first, to get its subtotal and orderQuantity
    const deletedCart = newCarts.filter((cart) => cart.productId === productId)

    // filter carts, delete one based on productId
    newCarts = newCarts.filter((cart) => cart.productId !== productId)

    // save cart to localStorage, subtract total and totalQty
    // based on subtotal and orderQuantity from deleted product
    saveCarts(newCarts)
    subtractTotal(deletedCart[0].subtotal)
    subtractTotalQty(deletedCart[0].orderQuantity)
  }

  // store carts to DB
  const storeCarts = async (transactionId) => {
    carts.forEach(async (cart) => {
      const data = {
        productId: cart.productId,
        transactionId,
        orderQuantity: cart.orderQuantity,
      }

      const response = await API.post('/cart', data, configJSON)
      if (response.data.status === 'failed') {
        return {
          error: response.data.message,
        }
      }
    })

    // after carts stored to DB, clean up state and localStorage
    setCarts([])
    setTotal(0)
    setTotalQty(0)
    localStorage.removeItem('carts')
    localStorage.removeItem('total')
    localStorage.removeItem('totalQty')
  }

  return (
    <CartContext.Provider
      value={{
        carts,
        total,
        totalQty,
        addCart,
        subtractCart,
        deleteCart,
        storeCarts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
