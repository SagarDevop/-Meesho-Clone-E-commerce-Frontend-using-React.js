import React from "react";

function Downloader({ image, image1, image2 }) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-[90%] mx-auto mt-14 h-[85vh] bg-cover bg-center rounded-lg flex"
      >
        <div className="w-[70%] h-[70%]  mt-[8%] ml-[40%]  ">
          <h1 className="text-purple-900 ml-[15%] text-5xl font-bold ">
            Save more with Meesho!
            </h1>
            <h1 className="text-purple-800 ml-[24%] text-5xl font-bold">Best deals & amazing </h1>
             <h1 className="text-purple-900 ml-[11%] text-5xl font-bold">discounts, download now!</h1>
             <div className="flex ml-[39%] mt-[8%] gap-5">
                <button style={{backgroundImage: `url(${image1})`}} className=" bg-cover bg-center px-[20%] py-6 rounded-md"></button>
                <button style={{backgroundImage: `url(${image2})`}} className=" bg-cover bg-center px-[21%] py-5 rounded-md"></button>
             </div>
        </div>
      </div>
    </>
  );
}

export default Downloader;
