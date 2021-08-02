import React from 'react'

import { heroLogo, heroImage, waves } from '../../../utils/images'
import './Hero.css'

const Hero = () => {
  return (
    <div className='home-hero container'>
      <img className='home-hero-logo' src={heroLogo} alt='WaysBeans' />
      <h1 className='home-hero-heading'>best quality coffee beans</h1>
      <p className='home-hero-lead'>
        Quality freshly roasted coffee made just for you. Pour, brew and enjoy
      </p>
      <img src={heroImage} alt='' className='home-hero-image' />
      <img src={waves} alt='' className='home-hero-waves' />
    </div>
  )
}

export default Hero
