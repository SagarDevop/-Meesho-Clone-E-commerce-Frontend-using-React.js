import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBagCheck } from "react-icons/bs";

const ProfileDropdown = () => {
  const isLoggedIn = false;
  const userName = "Sagar Singh Rajawat";

  return (
    <div className="absolute top-full right-2 w-[16vw] h-[40vh] bg-white border rounded-xl shadow-lg z-50">
      {!isLoggedIn ? (
        <div className="mt-5 ml-4">
          <h1 className="text-black text-[20px] font-semibold">Hello User</h1>
          <p className="text-gray-600 text-[14px]">To access your Meesho account</p>

          <Link to="/signup">
            <button className="bg-pink-700 p-2 mt-5 px-14 text-center text-white font-semibold text-xl rounded-md hover:bg-pink-900 transition duration-200 ease-in-out">
              Sign Up
            </button>
          </Link>

          <div className="w-[13.6vw] h-px bg-gray-400 mt-4"></div>
          <div className="flex gap-4 items-center justify-center mt-2">
            <BsBagCheck />
            <h1 className="text-black text-[20px] font-semibold">My Orders</h1>
          </div>
          <div className="w-[13.6vw] h-px bg-gray-400 mt-2"></div>
          <h1 className="text-black text-[20px] font-semibold mt-2 text-center">Delete Account</h1>
        </div>
      ) : (
        <div className="p-4">
          <div className="text-gray-600 mb-2 font-semibold">Hello, {userName}</div>
          <Link to="/orders" className="block text-gray-700 hover:text-purple-600 py-1">
            My Orders
          </Link>
          <Link to="/profile" className="block text-gray-700 hover:text-purple-600 py-1">
            Account
          </Link>
          <button
            onClick={() => {
              // logout logic here
            }}
            className="text-red-500 hover:underline text-sm mt-2"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

