import React from "react";

function Contentcontainer({image1,image2,image3,image4 ,title1,title2,title3}) {
  return (
    <>
      <div
        style={{
          backgroundImage:
            `url(${image1})`,
        }}
        className="w-[90%] mx-auto mt-14 h-[85vh] bg-cover bg-center rounded-lg flex"
      >
        <div className="w-[70%] h-[70%] flex mt-[10%] ml-[36%]  gap-5 ">
            <div className="w-[30%] h-[100%] ">
                <img className="w-[100%] h-[85%] object-cover object-center cursor-pointer rounded-lg " src={image2} alt="" />
                <button className="text-center mx-4 mt-2 bg-white text-black px-10 py-2 rounded-md">{title1}</button>
            </div>
            <div className="w-[30%] h-[100%] ">
                <img className="w-[100%] h-[85%] object-cover object-center cursor-pointer rounded-lg " src={image3} alt="" />
                <button className="text-center mx-4 mt-2 bg-white text-black px-10 py-2 rounded-md">{title2}</button>
            </div>
            <div className="w-[30%] h-[100%] ">
                <img className="w-[100%] h-[85%] object-cover object-center cursor-pointer rounded-lg " src={image4} alt="" />
                <button className="text-center ml-7 mt-2 bg-white text-black px-10 py-2 rounded-md">{title3}</button>
            </div>

        </div>


      </div>
    </>
  );
}

export default Contentcontainer;
