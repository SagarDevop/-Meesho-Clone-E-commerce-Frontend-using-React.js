import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import SellerTestimonialCards from "./SellerTestimonialCards";
function UpperPoster() {
  const stats = [
    { number: "11 Lakh+", label: "Trust Meesho to sell online" },
    { number: "14 Crore+", label: "Customers buying across India" },
    { number: "19000+", label: "Pincode Supported for delivery" },
    { number: "700+", label: "Categories to sell online" },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://supplier.meesho.com/images/Desktop-Background-1.png)",
        }}
        className="w-full h-[500px]  flex bg-cover bg-center"
      >
        <div className="w-[60%] ">
          <div className="mt-[100px] ml-[170px]">
            <h1 className="text-black text-[40px] font-semibold">
              Sell online to 14 Cr+ customers at
            </h1>
            <h1 className="text-pink-600 text-[40px] font-semibold">
              0% Commission
            </h1>
            <h1 className="mt-5 text-[18px]">
              Become a Meesho seller and grow your business across India
            </h1>
            <div className="flex mt-5 gap-3">
              <h1>
                <img
                  src="https://supplier.meesho.com/images/new-tag.svg"
                  alt=""
                />{" "}
              </h1>
              <h1 className="text-[16px]">
                Don’t have a GSTIN? You can still sell on Meesho.{" "}
                <span className="text-blue-600">Know more</span>
              </h1>
            </div>
            <button className=" mt-10 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
              Start Selling
            </button>
          </div>
        </div>
        <div className="w-[30%] mt-8  ">
          <img
            className="drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-300 "
            src="https://supplier.meesho.com/images/Desktop-Pic-new.png"
            alt=""
          />
        </div>
      </div>

      {/* stats */}

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6  text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-[8vh] rounded-lg shadow drop-shadow-md"
          >
            <h2 className="text-2xl font-bold text-pink-600">{stat.number}</h2>
            <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* why meesho */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 md:p-[6vw] bg-white">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Why Suppliers Love Meesho
          </h2>
          <p className="text-gray-600 text-base">
            All the benefits that come with selling on Meesho are
            <br />
            designed to help you sell more, and make it easier to grow <br />
            your business.
          </p>
        </div>

        {/* Right Section */}
        <div className="border-2 border-[#e7eeff] rounded-lg p-6  shadow-m h-[95vh]">
          <div className="mb-6 px-5  border-b-2 border-[#e7eeff] pb-5">
            <div className="flex items-center gap-2">
              <img
                src="https://supplier.meesho.com/images/icon-10.svg"
                alt=""
              />
              <h1 className="text-xl font-bold text-gray-800">
                0% Commission Fee
              </h1>
            </div>
            <p className="text-gray-600 text-m mt-2 ml-10">
              Suppliers selling on Meesho keep 100% of their profit by not{" "}
              <br />
              paying any commission.
            </p>
          </div>
          <div className="mb-6 px-5  border-b-2 border-[#e7eeff] pb-5">
            <div className="flex items-center gap-2">
              <img
                src="https://supplier.meesho.com/images/icon-16.svg"
                alt=""
              />
              <h1 className="text-xl font-bold text-gray-800">
                0 Penalty Charges
              </h1>
            </div>
            <p className="text-gray-600 text-m mt-2 ml-10">
              Sell online without the fear of order cancellation charges with 0{" "}
              <br />
              Penalty for late dispatch or order cancellations.
            </p>
          </div>
          <div className="mb-6 px-5  border-b-2 border-[#e7eeff] pb-5">
            <div className="flex items-center gap-2">
              <img
                src="https://supplier.meesho.com/images/icon-11.svg"
                alt=""
              />
              <h1 className="text-xl font-bold text-gray-800">
                Growth for Every Supplier
              </h1>
            </div>
            <p className="text-gray-600 text-m mt-2 ml-10">
              From small to large and unbranded to branded, and now open <br />
              for Sellers who don't have a Regular GSTIN too, Meesho fuels{" "}
              <br />
              growth for all suppliers.
            </p>
          </div>

          <div className="mb-6 px-5   pb-5">
            <div className="flex items-center gap-2">
              <img
                src="https://supplier.meesho.com/images/icon-12.svg"
                alt=""
              />
              <h1 className="text-xl font-bold text-gray-800">
                Growth for Every Supplier
              </h1>
            </div>
            <p className="text-gray-600 text-m mt-2 ml-10">
              <div className="flex items-center gap-2">
                <img src="https://supplier.meesho.com/images/tick.svg" alt="" />
                <h1>Easy Product Listing</h1>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://supplier.meesho.com/images/tick.svg" alt="" />
                <h1>Lowest Cost Shipping</h1>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://supplier.meesho.com/images/tick.svg" alt="" />
                <h1>7-Day Payment Cycle</h1>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[55vh] flex relative">
        <div className="w-[23%] h-[55vh] bg-white absolute top-0 right-20 mr-[26vw] shadow-md rounded-xl border border-[#e7eeff]">
          <div className="mt-9 ml-8">
            <img src="https://supplier.meesho.com/images/icon-1.svg" alt="" />
            <h1 className="text-black text-[20px] font-bold leading-tight my-4">
              Free catalog visibility of <br />
              ₹600
            </h1>
            <p className="text-gray-600 text-m">
              Run advertisements for your <br />
              catalogs to increase the visibility <br />
              of your products and get more <br />
              orders. Currently, not available <br />
              for sellers who don't have <br />a Regular GSTIN.
            </p>
          </div>
        </div>
        <div className="w-full h-[49vh] bg-[#f5f8ff] mt-12 flex justify-between px-16">
          <h1 className="text-black text-[32px] font-semibold pt-6 pl-5 leading-tight ">
            Exclusive Supplier+ <br />
            Rewards for the first 30 <br />
            days
          </h1>
          <div className="w-[23%] h-[41vh] bg-white rounded-xl mt-4 mr-8 shadow-md border border-[#e7eeff]">
            <div className="mt-7 ml-8">
              <img src="https://supplier.meesho.com/images/icon-7.svg" alt="" />
              <h1 className="mt-4 text-black text-[20px] font-bold leading-tight">
                No Order Cancellation <br />
                Charges
              </h1>
              <p className=" mt-4 font=sm text-gray-600">
                Cancel orders that you can’t fulfil <br />
                for unforeseen reasons without <br />
                worrying about penalties
              </p>
            </div>
          </div>
        </div>
      </div>
      <SellerTestimonialCards />

      {/* footer */}

      <div className="w-full h-[63vh] ">
        <h1 className="text-black text-[32px] font-semibold text-center  ">
          How it works
        </h1>
        <div className="w-[90%] h-[47vh] bg-[#f6f7f9] mx-auto rounded-md shadow-xl mt-8 flex px-10">
          <div className="w-[20%] h-[40vh]  rounded-md  mt-10 ">
            <div className="flex">
            <div className="w-[3vw] h-[3vw] text-center pt-2 bg-pink-600 rounded-full">1</div>
            <div className="w-[12vw] h-px bg-pink-600 mt-5 ml-5 "></div>
            </div>
            <h2 className="text-black text-[20px] font-semibold mt-4">Create Account</h2>
            <p className="text-gray-600 text-m mt-3">All you need is :</p>
            <div className="flex gap-2 ml-2 mt-1">
              <img className="w-[1vw] h-[1vw] mt-1" src="https://supplier.meesho.com/images/tick.svg" alt="" />
              <p className="text-gray-600 text-m">GSTIN (for GST sellers) <br />
               or Enrolment ID / UIN <br />
                (for non-GST sellers)</p>
            </div>
            <div className="flex gap-2 ml-2 mt-1">
              <img className="w-[1vw] h-[1vw] mt-1" src="https://supplier.meesho.com/images/tick.svg" alt="" />
              <p className="text-gray-600 text-m">Bank Account</p>

            </div>
          </div>
          <div className="w-[20%] h-[40vh]  rounded-md  mt-10 ">
            <div className="flex">
            <div className="w-[3vw] h-[3vw] text-center pt-2 bg-pink-600 rounded-full">2</div>
            <div className="w-[12vw] h-px bg-pink-600 mt-5 ml-5 "></div>
            </div>
            <h2 className="text-black text-[20px] font-semibold mt-4">List Products</h2>
            
           
              
              <p className="text-gray-600 text-m mt-3">List the products you <br />
               want to sell in your <br />
                supplier panel</p>
            
            
          </div>
          <div className="w-[20%] h-[40vh] rounded-md mt-10 ">
            <div className="flex">
            <div className="w-[3vw] h-[3vw] text-center pt-2 bg-pink-600 rounded-full">3</div>
            <div className="w-[12vw] h-px bg-pink-600 mt-5 ml-5 "></div>
            </div>
            <h2 className="text-black text-[20px] font-semibold mt-4">Get Orders</h2>
              <p className="text-gray-600 text-m mt-3">Start getting orders from <br />
               crores of Indians actively <br />
                shopping on our <br />
                 platform.</p>  
          </div>
          <div className="w-[20%] h-[40vh]  rounded-md  mt-10 ">
            <div className="flex">
            <div className="w-[3vw] h-[3vw] text-center pt-2 bg-pink-600 rounded-full">4</div>
            <div className="w-[12vw] h-px bg-pink-600 mt-5 ml-5 "></div>
            </div>
            <h2 className="text-black text-[20px] font-semibold mt-4">Lowest Cost Shipping</h2>
            
            
              <p className="text-gray-600 text-m mt-3">Products are shipped to <br />
               customers at lowest <br />
                costs</p>
            </div>
            

          <div className="w-[20%] h-[40vh]  rounded-md  mt-10 ">
            <div className="flex">
            <div className="w-[3vw] h-[3vw] text-center pt-2 bg-pink-600 rounded-full">5</div>
            <div className="w-[12vw] h-px bg-pink-600 mt-5 ml-5 "></div>
            </div>
            <h2 className="text-black text-[20px] font-semibold mt-4">Receive Payments</h2>
              <p className="text-gray-600 text-m mt-3">Payments are deposited <br />
               directly to your bank <br />
                account following a 7-day <br />
                 payment cycle from <br />
                  order delivery.</p>
            
            
          </div>
          
        </div>
      </div>

      {/* new component */}
      <div className=" mt-14 w-full h-[40vh] bg-[#f6f7f9] px-[10vw] flex justify-between items-center ">
        <div className="w-[45%] h-[40vh]  p-14 "> 
        <img src="https://supplier.meesho.com/images/learn-hub.svg" alt="" />
        <h1 className="text-black text-[26px] font-bold mt-4">Learn how to sell and grow <br />
         your business on Meesho</h1>
                 </div>
        <button className=" h-[10vh] bg-white text-pink-600 border border-pink-600 px-5 py-2 rounded-md hover:bg-pink-700 hover:text-white gap-7 flex justify-center items-center">
          <img src="	https://supplier.meesho.com/images/play.svg" alt="" />
          <h1>Visit Learning Hub</h1>
        </button>
      </div>

      {/* new component */}

      <div className="w-full h-[100vh]  mt-[14vh] flex relative ">
      
      <div className="w-[25vw] h-full  ml-10 absolute top-0 left-12 mt-7 ">
        <h1 className="text-black text-[28px] font-bold mt-[12vh]">
        Grow Your Business With <br />
         Meesho
        </h1>
      </div>
      <div className="w-[24vw] h-full  ml-10 absolute ml-[39vw] flex flex-col gap-[6vh] ">
        <div className="w-full h-[42vh] bg-white rounded-2xl shadow-xl p-10">
       <img src="	https://supplier.meesho.com/images/icon-3.svg" alt="" />
       <h1 className="text-black text-[20px] font-bold mt-4">
       Lowest Shipping Costs
        </h1>
        <p className="text-gray-600 text-m mt-3">
        Sell your products across India to <br />
         over 28,000+ pincodes at lowest <br />
          delivery cost
        </p>

               </div>
               <div className="w-full h-[42vh] bg-white rounded-2xl shadow-xl p-10">
       <img src="	https://supplier.meesho.com/images/icon-3.svg" alt="" />
       <h1 className="text-black text-[20px] font-bold mt-4">
       Lowest Shipping Costs
        </h1>
        <p className="text-gray-600 text-m mt-3">
        Sell your products across India to <br />
         over 28,000+ pincodes at lowest <br />
          delivery cost
        </p>

               </div>
        </div>
        <div className="w-[24vw] h-full  ml-10 absolute ml-[66vw] flex flex-col gap-[6vh] ">
        <div className="w-full h-[42vh] bg-white rounded-2xl shadow-xl p-10 mt-16">
       <img src="	https://supplier.meesho.com/images/icon-3.svg" alt="" />
       <h1 className="text-black text-[20px] font-bold mt-4">
       Lowest Shipping Costs
        </h1>
        <p className="text-gray-600 text-m mt-3">
        Sell your products across India to <br />
         over 28,000+ pincodes at lowest <br />
          delivery cost
        </p>

               </div>
               <div className="w-full h-[42vh] bg-white rounded-2xl shadow-xl p-10">
       <img src="	https://supplier.meesho.com/images/icon-3.svg" alt="" />
       <h1 className="text-black text-[20px] font-bold mt-4">
       Lowest Shipping Costs
        </h1>
        <p className="text-gray-600 text-m mt-3">
        Sell your products across India to <br />
         over 28,000+ pincodes at lowest <br />
          delivery cost
        </p>

               </div>
        </div>

      
        <div className="bg-[#f6f7f9] w-full h-[80vh] my-auto " >

        </div>

        
        
        
        
      </div>
    </>
  );
}

export default UpperPoster;
