import React from 'react'

import Hero from './Hero/Hero'
import ListProduct from './ListProduct/ListProduct'

import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <ListProduct />
    </div>
  )
}

export default Home
