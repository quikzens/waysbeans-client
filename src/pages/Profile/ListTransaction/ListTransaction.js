import React from 'react'

import CartItem from '../../../components/CartItem/CartItem'

import { qrCode } from '../../../utils/images'
import './ListTransaction.css'

const ListTransaction = ({ transactions }) => {
  return (
    <div className='list-transaction'>
      <h2>My Transaction</h2>
      {transactions.map((transaction) => (
        <div key={transaction._id} className='flex flex-column gap-1 mb-1'>
          {transaction.products.map((product) => (
            <CartItem
              product={product.product}
              orderQuantity={product.orderQuantity}
              subtotal={product.product.price * product.orderQuantity}
              createdAt={product._createdAt}
              key={product._id}
            >
              <img src={qrCode} alt='' className='transaction-qrcode' />
              <div
                className={`transaction-status ${transaction.status
                  .replace(' ', '-')
                  .toLowerCase()}`}
              >
                <p>{transaction.status}</p>
              </div>
            </CartItem>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ListTransaction
