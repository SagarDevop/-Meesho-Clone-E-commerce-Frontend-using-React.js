import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Meesho-style filter data with more realistic options
  const filterData = [
    { 
      title: "Category", 
      content: [
        "Women Ethnic", "Men Ethnic", "Western Wear", "Kids", "Accessories", 
        "Beauty & Health", "Jewelry & Watches", "Footwear", "Bags & Luggage", 
        "Home & Kitchen", "Electronics", "Toys & Baby Products"
      ] 
    },
    { 
      title: "Gender", 
      content: ["Men", "Women", "Boys", "Girls", "Unisex"] 
    },
    { 
      title: "Price", 
      content: [
        "Below ₹99", "₹100 - ₹199", "₹200 - ₹299", "₹300 - ₹499", 
        "₹500 - ₹999", "₹1000 - ₹1999", "₹2000 & Above"
      ] 
    },
    { 
      title: "Color", 
      content: [
        "Black", "White", "Red", "Blue", "Green", "Pink", "Yellow", 
        "Purple", "Orange", "Brown", "Grey", "Beige", "Multicolor"
      ] 
    },
    { 
      title: "Size", 
      content: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "Free Size"] 
    },
    { 
      title: "Brand", 
      content: [
        "Raymond", "Nike", "Adidas", "Peter England", "Zara", "Levi's",
        "H&M", "Allen Solly", "Roadster", "UCB", "Puma", "Reebok"
      ] 
    },
    { 
      title: "Fabric", 
      content: [
        "Cotton", "Silk", "Georgette", "Rayon", "Denim", "Polyester",
        "Velvet", "Linen", "Chiffon", "Wool", "Lycra", "Nylon"
      ] 
    },
    { 
      title: "Pattern", 
      content: [
        "Solid", "Printed", "Striped", "Floral", "Embroidered",
        "Checked", "Polka Dots", "Abstract", "Graphic Print"
      ] 
    },
    { 
      title: "Occasion", 
      content: ["Casual", "Formal", "Wedding", "Party", "Ethnic", "Sports", "Nightwear"] 
    },
    { 
      title: "Fit", 
      content: ["Regular", "Slim", "Loose", "Relaxed", "Tailored"] 
    },
    { 
      title: "Sleeve", 
      content: ["Full Sleeve", "Half Sleeve", "Sleeveless", "Cap Sleeve", "3/4 Sleeve"] 
    },
    { 
      title: "Neck", 
      content: ["Round Neck", "V-Neck", "Collar Neck", "Hooded", "Boat Neck", "Off Shoulder"] 
    },
    { 
      title: "Combo", 
      content: ["Single", "Pack of 2", "Pack of 3", "Pack of 5", "Pack of 10"] 
    },
    { 
      title: "Wash Care", 
      content: ["Machine Wash", "Hand Wash Only", "Dry Clean Only"] 
    },
    { 
      title: "Seller", 
      content: [
        "Top Rated", "New Arrivals", "Discounted", "Verified Sellers",
        "Fast Shipping", "Made in India"
      ] 
    },
    { 
      title: "Rating", 
      content: [
        "5★ & Above", "4★ & Above", "3★ & Above", "2★ & Above", "1★ & Above"
      ] 
    },
    { 
      title: "Discount", 
      content: [
        "10% Off", "20% Off", "30% Off", "40% Off", "50% Off", "60% Off", 
        "70% Off", "80% Off", "90% Off & More"
      ] 
    },
    { 
      title: "Availability", 
      content: ["In Stock", "Pre-Order", "Limited Stock"] 
    },
    { 
      title: "Shipping", 
      content: ["Free Shipping", "Express Delivery", "Same Day Delivery"] 
    },
    { 
      title: "Material", 
      content: ["Metal", "Plastic", "Glass", "Wood", "Rubber", "Silicone"] 
    },
    { 
      title: "Warranty", 
      content: ["No Warranty", "6 Months", "1 Year", "2 Years & Above"] 
    }
  ];
  

  return (
    <div className="w-full mt-3 max-w-md mx-auto border rounded-md shadow-md bg-white">
      {/* Filters Heading */}
      <div className="p-3 bg-gray-300 font-semibold border-b">
        <h1 className="text-black font-semibold text-xl">Filters</h1>
        <h1 className="text-gray-500 font-semibold text-sm">1000+ Products</h1>
      </div>

      {/* Accordion Sections */}
      {filterData.map((filter, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full flex justify-between items-center text-left p-4 bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleSection(index)}
          >
            <span className="font-medium">{filter.title}</span>
            {openSection === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {openSection === index && (
            <div className="p-4 bg-white border-t">
              {filter.content.map((item, i) => (
                <label key={i} className="flex items-center space-x-2 text-gray-700 p-1">
                  <input type="checkbox" className="form-checkbox text-blue-500" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
