import React from 'react'

import { profilePlaceholder } from '../../../utils/images'
import './Info.css'

const Info = (props) => {
  // init props
  const { profileImage, fullname, email } = props

  return (
    <div className='profile-info'>
      <h2>My Profile</h2>
      <div className='flex gap-2'>
        <img
          className='profile-info-img'
          src={profileImage || profilePlaceholder}
          alt=''
        />
        <div className='flex flex-column gap-2'>
          <div className='profile-info-fullname'>
            <h4>Fullname</h4>
            <p>{fullname}</p>
          </div>
          <div className='profile-info-email'>
            <h4>Email</h4>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
