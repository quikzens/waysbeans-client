import React, { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import AddToCartBtn from './AddToCartBtn'
import './Detail.css'

const Detail = (props) => {
  // init context
  const { user } = useContext(UserContext)

  // init props
  const { _id, name, stock, description, price } = props.product

  return (
    <div className='detail-product-detail'>
      <h1 className='detail-product-name'>{name}</h1>
      <p className='detail-product-stock'>Stock: {stock}</p>
      <p className='detail-product-description'>{description}</p>
      <p className='detail-product-price'>Rp. {price}</p>
      {user.token ? (
        <AddToCartBtn productId={_id} price={price} />
      ) : (
        <div className='detail-product-info'>
          Hei, kamu harus login dulu sebelum order!
        </div>
      )}
    </div>
  )
}

export default Detail
