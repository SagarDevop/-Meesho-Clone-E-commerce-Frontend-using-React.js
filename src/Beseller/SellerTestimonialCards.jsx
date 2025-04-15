import React from "react";
import { FaPlayCircle } from "react-icons/fa";
const testimonials = [
  {
    name: "Amit and Rajat Jain",
    brand: "Smartees, Tiruppur",
    message:
      "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Sneha Gupta",
    brand: "Sneha Fashion, Surat",
    message:
      "Selling on Meesho helped me expand my home-based business into a full-time store. The insights and tools they offer are amazing!",
    video: "https://www.youtube.com/embed/V-_O7nl0Ii0",
  },
  {
    name: "Mohd Irfan",
    brand: "FitWear, Delhi",
    message:
      "With zero commission and easy returns, I could offer better prices and grow fast. Meesho has truly transformed my business.",
    video: "https://www.youtube.com/embed/3GwjfUFyY6M",
  },
];

const SellerTestimonialCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 h-[90vh]">
      <h2 className="text-2xl font-bold mb-8 text-center">What Our Sellers Say</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* Video */}
            <div className="w-full h-56">
              <iframe
                className="w-full h-full"
                src={item.video}
                title={`Testimonial by ${item.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Text Content */}
            <div className="p-4 flex flex-col gap-1">
              <button className="text-blue-600 font-semibold text-sm"><FaPlayCircle /></button>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.brand}</p>
              <p className="text-gray-700 text-sm mt-2">{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerTestimonialCards;
