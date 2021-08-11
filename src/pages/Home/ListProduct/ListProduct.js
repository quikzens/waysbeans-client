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
  const [maxPrice, setMaxPrice] = useState('')
  const [isFilterActive, setFilterActive] = useState(false)

  // init lifecycle
  useEffect(() => {
    setProducts(dataProducts)
    return () => {
      setProducts(null)
    }
  }, [dataProducts])

  const applyFilter = () => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => {
        return product.price <= maxPrice
      })
    })
    setFilterActive(true)
  }

  const cleanFilter = () => {
    setProducts(dataProducts)
    setFilterActive(false)
    setMaxPrice('')
  }

  if (!products) return <Loading />

  return (
    <>
      <div className='home-filter-product container'>
        <h2>Filter product based on price</h2>
        <div className='flex gap-1'>
          <div className='form-item'>
            <input
              type='text'
              placeholder='max price'
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          {!isFilterActive ? (
            <button className='btn' onClick={applyFilter}>
              Filter
            </button>
          ) : (
            <button className='btn' onClick={cleanFilter}>
              Clean Filter
            </button>
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
