import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

function Firstbox() {
  return (
    <>
    <div className=' mt-12 bg-[#f8f8ff] w-[90%] h-[60vh] flex items-center justify-between mx-auto rounded-lg '>
        <div className='w-[47%] h-[100%] '>
           <div className='flex flex-col mt-[5%] ml-[10%]'>
           <h1 className=' text-[40px] font-bold text-gray-700' >Lowest Prices</h1>
           <h1 className=' text-[40px] font-bold text-gray-700' >Best Quality Shopping</h1>
           </div>
            <div className='flex mt-[8%] ml-[10%] mr-[5%]  h-[6vh] w-[90%]'>
                <div className='flex items-center w-[34%] h-[100%] border-r-2 border-gray-500 '>
                <FaShippingFast className='ml-1 border border-gray-700 rounded-full p-1  text-[32px] text-gray-700' />
                <h1 className='ml-3 text-[15px] font-bold text-gray-700'>Free <br /> Shipping</h1>
                </div>
                <div className='ml-[3%] flex items-center w-[34%] h-[100%]  border-r-2 border-gray-500 '>
                <FaShippingFast className='ml-1 border border-gray-700 rounded-full p-1  text-[32px] text-gray-700' />
                <h1 className='ml-3 text-[15px] font-bold text-gray-700'>Free <br /> Shipping</h1>
                </div>
                <div className='ml-[3%] flex items-center w-[34%] h-[100%]  '>
                <FaShippingFast className='ml-1 border border-gray-700 rounded-full p-1  text-[32px] text-gray-700' />
                <h1 className='ml-3 text-[15px] font-bold text-gray-700'>Free <br /> Shipping</h1>
                </div>
            </div>
            <div className='flex items-center mt-[9%] ml-[10%] w-[67%] h-[14%] bg-purple-800 rounded-lg' >
            <FaGooglePlay className='ml-5 text-[35px] text-white' />
            <h1 className='ml-3 text-[18px] font-bold text-white'>Download the Meesho App</h1>
            </div>
        </div>
        <div className='w-[49%] h-[100%] bg-blue-500 rounded-r-lg'>
            <img className='w-full h-full object-cover rounded-r-lg' src="https://images.meesho.com/images/marketing/1742877178023_512.webp" alt="" />
        </div>
    </div>
    </>
  )
}

export default Firstbox
