import React from 'react'

function InvesNavbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Left side: Logo + Title */}
      <div className="flex items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/Meesho_Logo_Full.png"
          alt="Meesho Logo"
          className="w-8 h-8 object-contain"
        />
        <span className="text-lg font-semibold text-gray-800">
          Investor Relations
        </span>
      </div>

      {/* Right side: Navigation Links */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <a href="#home" className="px-3 py-1 rounded-md hover:bg-orange-200 hover:text-orange-800 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#financials" className="px-3 py-1 rounded-md hover:bg-orange-200 hover:text-orange-800 transition">
            Financials
          </a>
        </li>
        <li>
          <a href="#announcements" className="px-3 py-1 rounded-md hover:bg-orange-200 hover:text-orange-800 transition">
            Announcements
          </a>
        </li>
        <li>
          <a href="#resources" className="px-3 py-1 rounded-md hover:bg-orange-200 hover:text-orange-800 transition">
            Resources
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default InvesNavbar
