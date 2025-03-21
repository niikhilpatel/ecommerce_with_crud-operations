import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen'>
      <div className='flex'>
        <div className='flex-1 p-3'>
          <img src='https://nypost.com/wp-content/uploads/sites/2/2023/07/bestkidssneakers.jpg?resize=1536,1024&quality=75&strip=all'/>
        </div>
        <div className='flex-1 p-5'>
          <h2 className='text-3xl font-bold mb-5'>Welcome to The LaceUp Hub</h2>
          <p className='mb-5'>Find the best sneakers for you</p>
          <button className='bg-green-600 text-white p-2 rounded-lg'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero