import React from "react";
import { useNavigate } from "react-router-dom";


const GearUp = [
    { id: 1, title: "Running", image: "https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_1000/cms/images/ef6cad095b51de91c7b6347098177c77204c3b70?_a=BAMCkGfi0" },
    { id: 2, title: "Training" , image: "https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_1280/cms/images/6ddf95ab7492ae66b6a59d370f7658e972658eb2?_a=BAMCkGfi0", link: "/gear2" },
    { id: 3, title: "Football" , image: "https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_1280/cms/images/0e53e90006d2b75d6c117acfca19341dd6799aa0?_a=BAMCkGfi0", link: "/gear3" },
    { id: 4, title: "Basketball" , image: "https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_1280/cms/images/fa093ec2d5d82a0a1fa8c9583e150dfcbc1a1c7e?_a=BAMCkGfi0", link: "/gear4" },
    { id: 5, title: "Studio" , image: "https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_1020/cms/images/581a31c557c9dd00c8510b0d978846930441d865?_a=BAMCkGfi0", link: "/gear5" }
];

const GearUpCards = () => {
    const navigate = useNavigate();

    return (
        <div className='p-2 md:p-10'>
            <h1 className='text-2xl font-bold mb-6'>GEAR UP FOR SPORTS</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                {GearUp.map((gear) => (
                    <div 
                        key={gear.id} 
                        className='relative w-full h-64 bg-cover bg-center rounded-lg shadow-lg' 
                        style={{ backgroundImage: `url(${gear.image})` }}
                    >
                        <button 
                            onClick={() => navigate(gear.link)} 
                            className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800'
                        >
                            {gear.title}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GearUpCards;