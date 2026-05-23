import React from 'react'
import pic from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div>
      <div className='md:flex justify-end items-center gap-40 max-w-7xl mx-auto px-4 md:px-12 mt-12'>
        <div>
          <h1 className='text-5xl md:text-8xl font-bold'>YOUR FEET </h1>
          <h1 className='text-5xl md:text-8xl font-bold'>DESERVE</h1>
          <h1 className='text-5xl md:text-8xl font-bold'>THE BEST</h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia totam dolorem ab ad fuga at nihil quibusdam incidunt a eos!</p>
        </div>
        <div>
          <img src={pic} alt="pic" />
        </div>
      </div>
    </div>
  )
}

export default Hero