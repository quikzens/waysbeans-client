import React from 'react'
import './Image.css'

const Image = (props) => {
  // init props
  const { image, name } = props

  return <img className='detail-product-image' src={image} alt={name} />
}

export default Image
