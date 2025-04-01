import React from 'react';
import img1 from '../assets/celebrity/img1.webp';
import img2 from '../assets/celebrity/img2.webp';
import img3 from '../assets/celebrity/img3.webp';
import img11 from '../assets/celebrity/img1.1.webp';
import img12 from '../assets/celebrity/img1.2.webp';
import img13 from '../assets/celebrity/img1.3.webp';
import img14 from '../assets/celebrity/img1.4.webp';


const Celebrity = () => {
    return (
        <div className='p-2 md:p-10'>
            <h2 className='text-2xl font-bold'>Celebrity Approved Shoes</h2>
            <div className='mt-5 md:mt-10 flex items-center gap-10'>
                {/* Left Side - Single Large Image */}
                <div className='w-1/2'>
                    <img src={img1} className='w-full h-auto rounded-lg shadow-lg' alt="Celebrity" />
                </div>
                <div className='w-1/2 grid grid-cols-2'>
                    <img src={img11} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 1" />
                    <img src={img12} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 2" />
                    <img src={img13} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 3" />
                    <img src={img14} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 4" />
                </div>
                <div className='w-1/2'>
                    <img src={img3} className='w-full h-auto rounded-lg shadow-lg' alt="Celebrity" />
                </div>
            </div>
            {/* <div className='mt-10 flex items-center gap-10'>
                <div className='w-1/2 grid grid-cols-2 gap-4'>
                    <img src={img11} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 1" />
                    <img src={img12} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 2" />
                    <img src={img13} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 3" />
                    <img src={img14} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 4" />
                </div>
            </div>
            <div className='mt-10 flex items-center gap-10'>
                <div className='w-1/2'>
                    <img src={img2} className='w-full h-auto rounded-lg shadow-lg' alt="Celebrity" />
                </div>
                <div className='w-1/2 grid grid-cols-2 gap-4'>
                    <img src={img11} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 1" />
                    <img src={img12} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 2" />
                    <img src={img13} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 3" />
                    <img src={img14} className='w-full h-auto rounded-lg shadow-md' alt="Shoe 4" />
                </div>
            </div> */}
        </div>
    );
};

export default Celebrity;
