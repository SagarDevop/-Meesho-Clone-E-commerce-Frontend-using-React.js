import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AnimatedDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Relevance"); // Default sorting option

  const sortingOptions = [
    "Relevance",
    "Price: Low to High",
    "Price: High to Low",
    "Customer Ratings",
    "Newest First",
  ];

  const handleSelect = (option) => {
    setSelectedOption(option); // Update selected option
    setIsOpen(false); // Close dropdown after selecting
  };

  return (
    <div className="w-full relative border border-gray-300 rounded-md pr-2">
      {/* Dropdown Button */}
      <button
        className="w-full flex justify-between items-center text-lg ml-2  text-gray-600 font-semibold p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sort By :
        <span className=" text-black font-semibold mr-9">{selectedOption}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        
      </button>

      {/* Dropdown Content */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden absolute w-full bg-white border rounded mt-1 shadow-lg z-10"
      >
        <ul className="text-gray-800">
          {sortingOptions.map((option, index) => (
            <li
              key={index}
              className={`p-2 hover:bg-gray-200 cursor-pointer ${
                selectedOption === option ? "bg-gray-300 font-bold" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default AnimatedDropdown;

