import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footerbox() {
  return (
    <>
     <footer className="bg-gray-100 text-gray-700 p-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div>
          <h2 className="font-bold text-lg">Shop Non-Stop on Meesho</h2>
          <p className="mt-2">Trusted by more than 1 Crore Indians</p>
          <p>Cash on Delivery | Free Delivery</p>
          <div className="flex gap-3 mt-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-28" />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="font-bold text-lg">Quick Links</h2>
          <ul className="mt-2 space-y-1">
            <li>Careers</li>
            <li>Become a Supplier</li>
            <li>Hall of Fame</li>
            <li>Sitemap</li>
            <li>Legal and Policies</li>
            <li>Meesho Tech Blog</li>
            <li>Notices and Returns</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="font-bold text-lg">Reach out to us</h2>
          <div className="flex space-x-4 mt-2 text-xl">
            <FaFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>
          <h2 className="font-bold text-lg mt-4">Contact Us</h2>
          <p className="text-sm mt-2">
            Fashnear Technologies Private Limited, CIN: U74900KA2015PTC082263
          </p>
          <p className="text-sm">3rd Floor, Wing-E, Helios Business Park, Kadubeesanahalli Village, Varthur Hobli, Outer Ring Road, Bellandur, Bangalore, Bangalore South, Karnataka, India, 560103</p>
          <p className="text-sm mt-2">E-mail address: query@meesho.com</p>
        </div>
      </div>
      <div className="text-center text-sm mt-6 border-t pt-4">© 2015-2025 Meesho.com</div>
    </footer>
    </>
  )
}

export default Footerbox
