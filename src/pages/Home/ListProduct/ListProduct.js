import React, { useState, useEffect } from 'react'
import { useGet } from '../../../hooks/useGet'

import ProductItem from './ProductItem'
import Loading from '../../../components/Loading/Loading'

import './ListProduct.css'

const ListProduct = () => {
  // get products data
  const { data: dataProducts } = useGet('/products')

  // init state
  const [products, setProducts] = useState(null)
  const [isFilterActive, setFilterActive] = useState(false)

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
      <div className='home-filter-product container'>
        <h2>Filter product based on price</h2>
        <div className='flex gap-1'>
          <div className='form-item'>
            <input type='text' placeholder='max price' />
          </div>
          {isFilterActive ? (
            <button className='btn'>Clean Filter</button>
          ) : (
            <button className='btn'>Filter</button>
          )}
        </div>
      </div>
      <div className='home-list-product container'>
        {products.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </div>
    </>
  )
}

export default ListProduct
