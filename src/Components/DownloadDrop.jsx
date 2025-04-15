import React from 'react'
import { Link } from 'react-router-dom'
import { BsBagCheck } from 'react-icons/bs'
import { MdPhoneAndroid } from 'react-icons/md'

function DownloadDrop() {
  return (
    <>
    <div className=" absolute top-full top-10   w-[16vw] h-[33vh] bg-white border rounded-xl shadow-lg  z-50">
              <div className=" mt-5 ml-4">
                <h1 className="text-gray-700 text-[18px] font-semibold">
                  Download From
                </h1>
                
               
                <div className="flex items-center justify-center mt-4 mr-4">
                 <img
                   onClick={() =>
                    window.open("https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow", "_blank")
                  } 
                  src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="" />
                </div>
                <div className="flex items-center justify-center  mt-6 mr-4"></div>
                <img
                onClick={() =>
                  window.open("https://apps.apple.com/us/app/meesho-online-shopping/id1457958492", "_blank")
                }
                className='h-[7.3vh]' src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="" />
              </div>
            </div>
    </>
  )
}

export default DownloadDrop
