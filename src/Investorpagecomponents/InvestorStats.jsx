import React from "react";


function InvestorStats() {
  return (
    <>
      <div className="w-[90vw] mx-auto  h-[100vh]  ">
        <div className="w-full h-[84vh] bg-[#f7f7f7] flex justify-between px-10 py-10 ">
          <div className="w-[48%] h-[60%] ">
            <h1 className="text-4xl font-bold text-[#333] ">
              India’s most downloaded <br />
              shopping application
            </h1>
            <p className="font-normal text-[14px] mt-14 text-[#333]">
              Meesho continues to be the most downloaded shopping app for the
              fourth consecutive <br /> year, driven by our focus on providing
              affordable, relatable products tailored to local <br /> markets.
              With 187 million Annual Transacting Users, Meesho has solidified
              its position as <br /> the e-commerce platform of choice for
              millions of customers across India. This reflects <br /> the
              growing trust and loyalty of our user base, while underscoring our
              ongoing <br />
              commitment to delivering exceptional value and a seamless shopping
              experience.
            </p>
            <div className="flex justify-between mt-10">
              <div className="w-[30%] h-[22vh] border-r border-gray-900">
                <h1 className="text-4xl font-bold text-[#7d005f] text-[#333]">
                  187 <br />
                  billion
                </h1>
                <p className=" mt-3 text-gray-900 font-s">orders</p>
              </div>
              <div className="w-[30%] h-[22vh] border-r border-gray-900">
                <h1 className="text-4xl font-bold text-[#7d005f] text-[#333]">
                  187 <br />
                  billion
                </h1>
                <p className=" mt-3 text-gray-900 font-s">orders</p>
              </div>
              <div className="w-[30%] h-[22vh] ">
                <h1 className="text-4xl font-bold text-[#7d005f] text-[#333]">
                  187 <br />
                  billion
                </h1>
                <p className=" mt-3 text-gray-900 font-s">orders</p>
              </div>
            </div>
          </div>
          <div className="w-[48%] h-[60%]">
            <img
              src="	https://investor.meesho.com/investor-web/_next/images/home_tile_1_main.png"
              alt=""
            />
          </div>
        </div>
        <div className="pl-10 w-full h-[20vh] bg-[#f7f7f7]">
        <p className=" tecxt-[#333] font-normal text-[14px] text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dolore
          dolor eaque perferendis, expedita architecto, magni culpa saepe
          sapiente ipsum, autem iste molestiae nam mollitia aperiam adipisci
          molestias odio reiciendis.
        </p>
        <div className="bg-[#f2e6d5] w-[56vw] h-[35vh] mx-auto mt-10 rounded-3xl flex items-center">
         <div className=" w-[55vw] h-[32vh] m-9 flex justify-between">
          <div className="w-[44%] h-full" >
            <h1 className="text-3xl font-semibold mt-5 ">Why Millions Choose <br />
             Us</h1>
             <img className="mt-8" src="	https://investor.meesho.com/investor-web/_next/static/media/right-arrow.18af962e.svg" alt="" />
          </div>
          <div className="w-[52%] h-full flex gap-7" >
          <img className="w-[12vw] h-[25vh] mt-5" src="https://investor.meesho.com/investor-web/_next/images/home_tile_1_thumbnail_1.png" alt="" />
          <img className="w-[12vw] h-[25vh] mt-5" src="https://investor.meesho.com/investor-web/_next/images/home_tile_1_thumbnail_2.png" alt="" />
          </div>
         </div>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default InvestorStats;
