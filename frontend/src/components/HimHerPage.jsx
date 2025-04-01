import React from 'react'
import MainImg from "../assets/HimHerPage.avif"

const HimHerPage = () => {
    return (
        <div className='my-10'>
            <div className='relative'>

                <img src={MainImg} />
                <h2 className='uppercase font-bold text-sm md:text-3xl absolute top-1/5 left-3/5 align-right'>Make Way For New Drip</h2>
                <h4 className='uppercase  text-xs md:text-2xl absolute top-1/5 left-3/5 mt-5 md:mt-12'>Exploring the new season's new styles</h4>
                <div className='flex gap-4 absolute top-1/5 left-3/5 mt-15 md:mt-25'>
                    <a className='border-2 border-black px-1 text-xs md:text-lg md:px-2 py-1 bg-black text-white md:font-semibold uppercase '>For Him</a>
                    <a className='border-2 border-black px-1 text-xs md:text-lg md:px-2 py-1 bg-black text-white md:font-semibold uppercase '>For Her</a>
                </div>
            </div>


        </div>
    )
}

export default HimHerPage