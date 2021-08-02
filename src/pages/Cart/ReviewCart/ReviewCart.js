import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import formatPrice from '../../../utils/formatPrice'

import { trash, plus, minus } from '../../../utils/icons'
import './ReviewCart.css'

const ReviewCart = () => {
  // init context
  const { carts, addCart, subtractCart, deleteCart } = useContext(CartContext)

  return (
    <div className='review-cart'>
      {carts.map((cart, index) => (
        <div className='review-cart-item' key={index}>
          <div className='flex gap-1'>
            <img
              src={cart.product.photo}
              alt=''
              className='review-cart-image'
            />
            <div className='flex jc-between grow-1'>
              <div className='flex flex-column jc-center gap-05'>
                <h4>{cart.product.name}</h4>
                <div className='flex gap-05'>
                  <button
                    className='review-cart-subtract'
                    onClick={() => subtractCart(cart.productId, cart.price)}
                  >
                    <img src={minus} alt='' />
                  </button>
                  <div className='review-cart-qty'>{cart.orderQuantity}</div>
                  <button
                    className='review-cart-add'
                    onClick={() =>
                      addCart(cart.productId, cart.price, cart.product)
                    }
                  >
                    <img src={plus} alt='' />
                  </button>
                </div>
              </div>
              <div className='flex flex-column jc-center ai-end gap-05'>
                <p className='review-cart-price'>
                  Rp. {cart.product.price && formatPrice(cart.product.price)}
                </p>
                <button
                  className='review-cart-trash'
                  onClick={() => deleteCart(cart.productId)}
                >
                  <img src={trash} alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReviewCart
