import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

function Suppliercontainer({image}) {
  return (
   <>
   <div 
    style={{backgroundImage: `url(${image})`}}
   className='w-[90%] mx-auto mt-14 h-[50vh] bg-cover bg-center rounded-lg flex' >
     <div className='w-[70%] h-[80%]  mt-[4%] ml-[3%] '>
    <h1 className='text-white text-[40px] font-semibold'>Register as a Meesho Supplier</h1>
    <h1 className='text-white text-[19px] '>Sell your products to crores of customers at 0% commission</h1>
    <div className='flex  mt-8 w-[100%] h-[21%] gap-5'>
     <div className=' h-[100%] w-[33%] flex items-center gap-2'>
     <FaCircleCheck className='text-green-800 text-[23px]' />
     <h1 className='text-white text-[20px] font-semibold text-center mb-1 pr-6 border-r-2 border-white'>Grow your business 10x</h1>
     </div>
     <div className=' h-[100%] w-[33%] flex items-center gap-2'>
     <FaCircleCheck className='text-green-800 text-[23px]' />
     <h1 className='text-white text-[20px] font-semibold text-center mb-1 pr-12 border-r-2 border-white'>Enjoy 100% Profit</h1>
     </div>
     <div className=' h-[100%] w-[33%] flex items-center gap-2'>
     <FaCircleCheck className='text-green-800 text-[23px]' />
     <h1 className='text-white text-[20px] font-semibold text-center mb-1 '>Sell all over India</h1>
     </div>
    </div>
    <button className='mt-4  bg-white text-black px-4 py-4 text-[20px] font-semibold cursor-pointer hover:bg-purple-700 hover:text-white rounded-lg'>Register now!</button>
     </div>
   </div>
   </>
  )
}

export default Suppliercontainer
