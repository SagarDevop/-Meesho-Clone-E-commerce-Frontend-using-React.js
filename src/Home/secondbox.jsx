import React from "react";

function secondbox({image1,image2,image3,image4}) {
  return (
    <>
      <div
        style={{
          backgroundImage:
            `url(${image1})`,
        }}
        className="w-[90%] mx-auto mt-10 h-[85vh] bg-cover bg-center rounded-lg flex "
      >
    <div className="w-[38%] h-[100%] flex flex-col">
        <div className="w-[90%] h-[75%] bg-blue-500 mt-[23%] ml-[5%] ">
         <img className="w-[100%] h-[100%] object-cover object-center cursor-pointer " src={image2} alt="" />
        </div>
    </div>
    <div className="w-[52%] h-[50%] mt-[20%] flex  gap-3">
        <img className="w-[100%] h-[100%] object-cover object-center cursor-pointer " src={image3} alt="" />
        <img className="w-[100%] h-[100%] object-cover object-center cursor-pointer " src={image4} alt="" />
    </div>


      </div>
    </>
  );
}

export default secondbox;
