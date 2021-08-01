import React, { useEffect, useState } from 'react'
import { useGet } from '../../hooks/useGet'
import Info from './Info/Info'
import ListTransaction from './ListTransaction/ListTransaction'
import Loading from '../../components/Loading/Loading'
import './Profile.css'

const Profile = () => {
  // get user profile and transaction data
  const { data: profileData } = useGet('/my-profile')
  const { data: transactionsData } = useGet('/my-transactions')

  // init state
  const [profile, setProfile] = useState(null)
  const [transactions, setTransactions] = useState(null)

  // init lifecycle
  useEffect(() => {
    setProfile(profileData)
    setTransactions(transactionsData)
    return () => {
      setProfile(null)
      setTransactions(null)
    }
  }, [profileData, transactionsData])

  if (profile && transactions) {
    return (
      <div className='profile'>
        <div className='flex'>
          <Info {...profile} />
          <ListTransaction transactions={transactions} />
        </div>
      </div>
    )
  }

  return <Loading />
}

export default Profile
