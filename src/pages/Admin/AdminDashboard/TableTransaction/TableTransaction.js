import React from 'react'
import formatPrice from '../../../../utils/formatPrice'

import ActionTransaction from '../ActionTransaction/ActionTransaction'

import { images } from '../../../../utils/icons'
import './TableTransaction.css'

const TableTransaction = ({ transactions, refetchTransactions }) => {
  return (
    <table className='admin-dashboard-table'>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Address</th>
          <th>Poss Code</th>
          <th>Products Order</th>
          <th>Payment Proof</th>
          <th>Status</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => {
          let statusColor
          switch (transaction.status) {
            case 'Waiting Approve':
              statusColor = 'clr-orange'
              break
            case 'On The Way':
              statusColor = 'clr-blue'
              break
            case 'Success':
              statusColor = 'clr-green'
              break
            case 'Canceled':
              statusColor = 'clr-red'
              break
            default:
              statusColor = ''
              break
          }

          return (
            <tr key={transaction._id}>
              <td>{index + 1}</td>
              <td>{transaction.name}</td>
              <td>{transaction.address}</td>
              <td>{transaction.possCode}</td>
              <td>
                {transaction.products.map((product) => (
                  <span key={product._id} className='d-block'>
                    {product.product.name} ({product.orderQuantity})
                  </span>
                ))}
              </td>
              <td>
                <a
                  href={transaction.attachment}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={images} alt='' className='payment-proof-icon' />
                </a>
              </td>
              <td className={statusColor}>{transaction.status}</td>
              <td>Rp. {transaction.total && formatPrice(transaction.total)}</td>
              <td>
                <ActionTransaction
                  id={transaction._id}
                  refetchTransactions={refetchTransactions}
                  status={transaction.status}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableTransaction
