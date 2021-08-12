import React, { useState, useEffect } from 'react'
import { useGet } from '../../../hooks/useGet'

import ProductItem from './ProductItem'
import FilterProduct from './FilterProduct'
import Loading from '../../../components/Loading/Loading'

import './ListProduct.css'

const ListProduct = () => {
  // get products data
  const { data: dataProducts } = useGet('/products')

  // init state
  const [products, setProducts] = useState(null)

  // init lifecycle
  useEffect(() => {
    setProducts(dataProducts)
    return () => {
      setProducts(null)
    }
  }, [dataProducts])

  if (!products) return <Loading />

  return (
    <>
      <FilterProduct setProducts={setProducts} dataProducts={dataProducts} />
      <div className='home-list-product container'>
        {products.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </div>
    </>
  )
}

export default ListProduct
