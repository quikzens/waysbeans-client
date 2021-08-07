import React from 'react'
import { API, configJSON } from '../../../config/api'

const CompletedBtn = (props) => {
  // init props
  const { id, refetchTransactions } = props

  const completeTransaction = async (transactionId) => {
    const id = {
      id: transactionId,
    }

    const response = await API.patch('/success-transaction', id, configJSON)
    if (response.data.status === 'failed') {
      console.log(`Error: ${response.data.message}`)
    }

    refetchTransactions()
  }

  return (
    <button className='transaction-btn' onClick={() => completeTransaction(id)}>
      Completed
    </button>
  )
}

export default CompletedBtn
