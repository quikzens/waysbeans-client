import React, { useState } from 'react'
import { BsX } from 'react-icons/bs'

const FilterProduct = ({ dataProducts, setProducts }) => {
  // init state
  const [maxPrice, setMaxPrice] = useState('')
  const [isFilterActive, setFilterActive] = useState(false)

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

  return (
    <div className='home-filter-product container'>
      <h2>Filter product based on price</h2>
      <div className='flex gap-1'>
        <div className='form-item'>
          <input
            type='number'
            placeholder='max price'
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <button className='btn' onClick={applyFilter}>
          Filter
        </button>
        {isFilterActive && (
          <button
            className='btn flex jc-center ai-center'
            onClick={cleanFilter}
            style={{ padding: '0.5rem 0.75rem' }}
          >
            <BsX style={{ fontSize: '1.5rem' }} />
          </button>
        )}
      </div>
    </div>
  )
}

export default FilterProduct
