import { useState } from "react";
import { Search } from "lucide-react";
import { MdPhoneAndroid } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import Category from "./Category";
import { Link } from "react-router-dom";
import ProfileDropdown from "../Profile/ProfileDropdown";
import DownloadDrop from "./DownloadDrop";
import { div } from "framer-motion/m";
function Navbar() {
   const [isDownloadOpen, setIsDownloadOpen] = useState(false);
   const [isProfileOpen, setIsProfileOpen] = useState(false);

   


  return (
    <>
      <div className="bg-white sticky top-0 z-50 shadow-md border-y border-gray-300 p-4 gap-[4vw] w-full h-[12vh] text-black flex items-center cursor-pointer">
        <div id="left" className="flex items-center gap-8">
          <img
            className="w-[11vw] h-[12vh] "
            src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg "
            alt=""
          />
          <div className="relative w-[26vw]">
            <input
              type="text"
              className="border-2 border-gray-300 rounded-lg p-2 pl-10 w-full focus:outline-none focus:ring-0"
              placeholder="Try Saree, Kurti or Search by Product ID"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
        <div id="right" className="">
          <ul className="flex items-center gap-4">
            <li onMouseEnter={() =>{setIsDownloadOpen(true)}} 
                onMouseLeave={() => setIsDownloadOpen(false)}
              
            className="relative px-4 py-2 border-r border-gray-500 flex  items-center gap-3  font-medium text-gray-600 text-[17px]">
              <MdPhoneAndroid /> Download App

              {isDownloadOpen && <div className="absolute top-full right-[14vw]">
                <DownloadDrop />
                </div>}
            </li>

            
            <Link
              to="/become-supplier"
              className=" px-4 py-2 border-r border-gray-500 flex items-center gap-3 font-medium text-gray-600 text-[17px]"
            >
              Become a Supplier
            </Link>
            <Link
              to="investor-relation"
              className=" px-4 py-2   border-r border-gray-500 flex items-center gap-3 font-medium text-gray-600 text-[17px]"
            >
              Investor Relations
            </Link>
          </ul>
        </div>
        <div id="logo" className="flex items-center gap-10">
          <div 
          onMouseEnter={() =>{setIsProfileOpen(true)}} 
          onMouseLeave={() => setIsProfileOpen(false)}
          className="  relative">
            
              
              <div className="flex flex-col items-center gap-2">
              <RiGroupFill size={20} />
               <div>Profile</div>
              </div>

              {isProfileOpen &&
          <div className="absolute top-full right-[-6vw]">
          <ProfileDropdown />
          </div>}
          </div>
         
          <div className="">
            <BsCart3 size={20} />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <Category />
    </>
  );
}

export default Navbar;
