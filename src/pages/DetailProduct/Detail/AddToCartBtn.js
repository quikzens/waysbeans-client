import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

const AddToCartBtn = (props) => {
  // init context
  const { addCart } = useContext(CartContext)

  // init props
  const { productId, price } = props

  const handleClick = (productId, price) => {
    addCart(productId, price)
  }

  return (
    <button
      className='detail-product-cta'
      onClick={() => handleClick(productId, price)}
    >
      Add to Cart
    </button>
  )
}

export default AddToCartBtn
