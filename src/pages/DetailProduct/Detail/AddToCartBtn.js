import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

const AddToCartBtn = (props) => {
  // init context
  const { addCart } = useContext(CartContext)

  // init props
  const { productId, price, product } = props

  const handleClick = (productId, price, product) => {
    addCart(productId, price, product)
  }

  return (
    <button
      className='detail-product-cta'
      onClick={() => handleClick(productId, price, product)}
    >
      Add to Cart
    </button>
  )
}

export default AddToCartBtn
