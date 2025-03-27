import React from 'react'
import Logo from '../assets/logo.png'

const Suggestions = () => {

    const SuggestionImg = [

        {   
            id:1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8qlDHr_R1f6nflS0e6D-Kjqb-FB0pfhqCLK_c0B-o0hEeQjXrfaWdiAHK3hT8utp7sY&usqp=CAU",
            title: "Sneakers : Nike Air Jordan"
        },
        {
            id:2,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx6VMWlUyYBM0Nf4rw-nlWtoxpWJSWFV1gQ&s",
            title:"Best Casual shoes"
        }
        
        
    ]
    

    return (
        <div className='flex h-screen p-5 gap-5'>
            <div className='flex-1/3  p-3 border border-white shadow-2xl'>
                <div className='flex justify-between text-xl font-semibold p-2'>
                    <h2>Suggestions for you</h2>
                    <button>See all</button>
                </div>
                <div>
                    {
                        SuggestionImg.map((img) => (
                            <div key={img._id} className='flex gap-5'>
                                <div>
                                    <div>
                                        <img src={img.image} />
                                        <h2>{img.title}</h2>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={img.image} />
                                        <h2>{img.title}</h2>
                                    </div>
                                    <div>
                                        <img src={img.image} />
                                        <h2>{img.title}</h2>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
            <div className='flex-2/3 shadow-xl p-3 flex flex-col justify-center items-center'>
                <div className='flex-1/3 flex flex-col gap-5 justify-start items-left gap-5'>
                    <img src={Logo} className='w-28 h-15' />
                    <h1 className='font-semibold text-4xl'>Top Selling Shoes</h1>
                    <p className='text-gray-600'>Latest Technology, Best Brands</p>
                </div>
                <div className='flex-2/3'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8qlDHr_R1f6nflS0e6D-Kjqb-FB0pfhqCLK_c0B-o0hEeQjXrfaWdiAHK3hT8utp7sY&usqp=CAU' className='w-full h-full bg-cover bg' />
                </div>
            </div>
        </div>
    )
}

export default Suggestions