import React from 'react'

import CartItem from '../../../components/CartItem/CartItem'

import { qrCode } from '../../../utils/images'
import './ListTransaction.css'

const ListTransaction = ({ transactions }) => {
  return (
    <div className='list-transaction'>
      {transactions.map((transaction) => (
        <React.Fragment key={transaction._id}>
          {transaction.products.map((product) => (
            <CartItem
              product={product.product}
              orderQuantity={product.orderQuantity}
              subtotal={product.product.price * product.orderQuantity}
              key={product._id}
            >
              <img src={qrCode} alt='' className='transaction-qrcode' />
              <div className='transaction-status'>
                <p>{transaction.status}</p>
              </div>
            </CartItem>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ListTransaction
