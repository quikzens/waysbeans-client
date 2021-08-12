import React from 'react'
import { useUser } from '../../../contexts/UserContext'
import formatPrice from '../../../utils/formatPrice'

import AddToCartBtn from './AddToCartBtn'

import './Detail.css'

const Detail = (props) => {
  // init context
  const { user } = useUser()

  // init props
  const { _id, name, stock, description, price } = props.product

  return (
    <div className='detail-product-detail'>
      <h1 className='detail-product-name'>{name}</h1>
      <p className='detail-product-stock'>Stock: {stock}</p>
      <p className='detail-product-description'>{description}</p>
      <p className='detail-product-price'>Rp. {price && formatPrice(price)}</p>
      {user.role === 'user' ? (
        <AddToCartBtn productId={_id} price={price} product={props.product} />
      ) : (
        <>
          {user.role !== 'admin' && (
            <div className='alert alert-info'>
              Hei, kamu harus login dulu sebelum order!
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Detail
