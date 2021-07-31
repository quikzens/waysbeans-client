import { createContext, useState, useEffect } from 'react'
// import { API, configJSON, setAuthToken } from '../config/api'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  // init state
  const [carts, setCarts] = useState([])

  useEffect(() => {
    // get carts data from localStorage
    const cartsData = localStorage.getItem('carts')
      ? JSON.parse(localStorage.getItem('carts'))
      : null
    if (cartsData) setCarts(cartsData)
  }, [])

  const saveCarts = (newCarts) => {
    // save carts to state and localStorage
    setCarts(newCarts)
    localStorage.setItem('carts', JSON.stringify(newCarts))
  }

  const addCart = (productId, price) => {
    let newCarts = carts

    // first, check if it's the same product user added before
    const checkId = newCarts.filter((cart) => productId === cart.productId)
    if (checkId.length > 0) {
      // if true, just add orderQuantity and subtotal
      newCarts = newCarts.map((cart) => {
        if (productId === cart.productId) {
          console.log('dapat!')
          return {
            ...cart,
            orderQuantity: cart.orderQuantity + 1,
            subtotal: cart.subtotal + price,
          }
        }

        return cart
      })
      saveCarts(newCarts)
      return console.log('carts', carts)
    }

    // if not, push new item to the carts
    const cart = {
      productId,
      price,
      orderQuantity: 1,
      subtotal: price,
    }
    newCarts.push(cart)
    saveCarts(newCarts)
    console.log('carts', carts)
  }

  return (
    <CartContext.Provider
      value={{
        carts,
        addCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
