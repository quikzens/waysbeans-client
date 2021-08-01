import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useGet } from '../../hooks/useGet'

import Image from './Image/Image'
import Detail from './Detail/Detail'
import Loading from '../../components/Loading/Loading'

import './DetailProduct.css'

const DetailProduct = () => {
  // get product data
  const { data: dataProduct } = useGet(`/product/${id}`)

  // init params
  const { id } = useParams()

  // init state
  const [product, setProduct] = useState(null)

  // init lifecycle
  useEffect(() => {
    setProduct(dataProduct)
    return () => {
      setProduct(null)
    }
  }, [dataProduct])

  if (!product) return <Loading />

  return (
    <div className='detail-product flex'>
      <Image image={product.photo} name={product.name} />
      <Detail product={product} />
    </div>
  )
}

export default DetailProduct
