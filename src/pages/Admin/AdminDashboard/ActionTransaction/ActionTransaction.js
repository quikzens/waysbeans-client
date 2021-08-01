import React from 'react'
import { API, configJSON } from '../../../../config/api'
import { approve, cancel } from '../../../../utils/icons'
import './ActionTransaction.css'

const ActionTransaction = (props) => {
  // init props
  const { id, refetchTransactions, status } = props

  const cancelTransaction = async (transactionId) => {
    const id = {
      id: transactionId,
    }

    const response = await API.patch('/cancel-transaction', id, configJSON)
    if (response.data.status === 'failed') {
      console.log(`Error: ${response.data.message}`)
    }

    refetchTransactions()
  }

  const approveTransaction = async (transactionId) => {
    const id = {
      id: transactionId,
    }

    const response = await API.patch('/approve-transaction', id, configJSON)
    if (response.data.status === 'failed') {
      console.log(`Error: ${response.data.message}`)
    }

    refetchTransactions()
  }

  return (
    <span className='admin-dashboard-action'>
      {status === 'Waiting Approve' && (
        <>
          <button
            className='admin-dashboard-cancel d-block'
            onClick={() => cancelTransaction(id)}
          >
            Cancel
          </button>
          <button
            className='admin-dashboard-approve d-block'
            onClick={() => approveTransaction(id)}
          >
            Approve
          </button>
        </>
      )}
      {status === 'Approved' && <img src={approve} alt='' />}
      {status === 'Canceled' && <img src={cancel} alt='' />}
    </span>
  )
}

export default ActionTransaction
