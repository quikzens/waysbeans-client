import React, { useEffect, useState } from 'react'
import './PopUp.css'

const PopUp = (props) => {
  // init props
  const { msg, invoke } = props

  // init state
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (invoke) {
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000)
    }
  }, [invoke])

  return <div className={`popup ${show ? 'show' : ''}`}>{msg}</div>
}

export default PopUp
