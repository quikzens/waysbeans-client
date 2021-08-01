import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { trash } from '../../../utils/icons'
import './ReviewCart.css'

const ReviewCart = () => {
  // init context
  const { carts, addCart, subtractCart, deleteCart } = useContext(CartContext)

  return (
    <div className='review-cart'>
      {carts.map((cart, index) => (
        <div className='review-cart-item' key={index}>
          <div className='flex'>
            <img src={cart.product.photo} alt='' />
            <div className='flex jc-between'>
              <div>
                <h4>{cart.product.name}</h4>
                <div className='flex'>
                  <button
                    className='review-cart-subtract'
                    onClick={() => subtractCart(cart.productId, cart.price)}
                  >
                    -
                  </button>
                  <div className='review-cart-qty'>{cart.orderQuantity}</div>
                  <button
                    className='review-cart-add'
                    onClick={() =>
                      addCart(cart.productId, cart.product, cart.price)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <p className='review-cart-price'>Rp. {cart.product.price}</p>
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
