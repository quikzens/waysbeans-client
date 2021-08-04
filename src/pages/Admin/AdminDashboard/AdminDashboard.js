import React, { useEffect, useState } from 'react'
import { useGet } from '../../../hooks/useGet'

import Loading from '../../../components/Loading/Loading'
import TableTransaction from './TableTransaction/TableTransaction'

import './AdminDashboard.css'

const AdminDashboard = () => {
  // get all transactions data
  const { data: transactionsData, invoke: refetchTransactions } =
    useGet('/transactions')

  // init state
  const [transactions, setTransactions] = useState(null)

  // init lifecycle
  useEffect(() => {
    setTransactions(transactionsData)
    return () => {
      setTransactions(null)
    }
  }, [transactionsData])

  if (transactions) {
    return (
      <div className='admin-dashboard'>
        <h2>Income Transaction</h2>
        <TableTransaction
          transactions={transactions}
          refetchTransactions={refetchTransactions}
        />
      </div>
    )
  }

  return <Loading />
}

export default AdminDashboard
