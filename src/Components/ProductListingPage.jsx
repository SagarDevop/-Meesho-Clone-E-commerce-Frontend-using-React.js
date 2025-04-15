import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("relevance");

  useEffect(() => {
    // Fetch product data (dummy API for now)
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Sorting Logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "price-low-to-high") return a.price - b.price;
    if (sortOption === "price-high-to-low") return b.price - a.price;
    if (sortOption === "rating") return b.rating.rate - a.rating.rate;
    return 0; // Default: relevance
  });

  return (
    <div className="w-[77%] p-4">
      {/* Sorting Dropdown */}
      <div className="flex justify-end mb-4">
        <select
          className="border p-2 rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
          <option value="rating">Best Rated</option>
        </select>
      </div>

      <ProductCard sortedProducts={sortedProducts} />
      
    </div>
  );
};

export default ProductListingPage;
