import React from "react";

const SellerNav = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md px-10 p-4 flex items-center justify-between ">
      {/* Left Section - Logo */}
      <div className="text-2xl font-bold text-pink-600">meesho</div>
      
      {/* Middle Section - Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <span className="cursor-pointer hover:text-pink-500">Sell Online</span>
        <span className="cursor-pointer hover:text-pink-500">How it works</span>
        <span className="cursor-pointer hover:text-pink-500">Pricing & Commission</span>
        <span className="cursor-pointer hover:text-pink-500">Shipping & Returns</span>
        <span className="cursor-pointer hover:text-pink-500">Grow Business</span>
        <span className="cursor-pointer hover:text-pink-500">Don't have GST?</span>
      </div>
      
      {/* Right Section - Buttons */}
      <div className="flex space-x-4">
        <button className="border border-purple-500 px-9 py-2 rounded-md text-purple-600 hover:bg-purple-600 hover:text-white">Login</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-100 hover:text-purple-500">Start Selling</button>
      </div>
    </nav>
  );
};

export default SellerNav;