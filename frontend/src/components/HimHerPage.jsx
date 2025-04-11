import React from 'react'
import MainImg from "../assets/HimHerPage.avif"
import { useNavigate } from 'react-router-dom'
import MainImg1 from "../assets/Category/HimHerPage2cut.jpg"

const HimHerPage = () => {

    const navigate = useNavigate();

    return (
        <div className=' my-20'>
            <div className='relative flex flex-col'>
                <div>


                    <img src={MainImg} className='invisible md:visible w-full h-auto' />
                    <img src={MainImg1} className='visible md:hidden w-full h-auto' />
                </div>
                <div className='mx-5'>


                    <h2 className='uppercase font-bold text-3xl md:absolute top-30 left-3/5 align-right'>Make Way For New Drip</h2>
                    <h4 className='uppercase text-2xl md:absolute top-41  left-3/5'>Exploring the new season's new styles</h4>
                    <div className='flex gap-4 md:absolute top-55 left-3/5'>
                        <a onClick={() => navigate('/himpage')} className='cursor-pointer hover:bg-orange-500 hover:border-orange-500 border-2 border-black px-2 text-तु md:text-lg md:px-2 py-2 bg-black text-white md:font-semibold uppercase '>For Him</a>
                        <a onClick={() => navigate('/herpage')} className='cursor-pointer hover:bg-orange-500 hover:border-orange-500 border-2 border-black px-2 text-तु md:text-lg md:px-2 py-2 bg-black text-white md:font-semibold uppercase '>For Her</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HimHerPage