import React from 'react'

import './OnProcess.css'

const OnProcess = (props) => {
  // init props
  const { msg } = props

  return (
    <div className='process'>
      <div className='process-animation'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className='process-msg'>{msg}</p>
    </div>
  )
}

export default OnProcess
