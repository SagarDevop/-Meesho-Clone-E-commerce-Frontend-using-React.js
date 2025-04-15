import React from 'react'

function ProductCard({sortedProducts}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain"
            />
            <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
           <div className='flex justify-between'>
           <p className="text-green-600 font-bold">₹{product.price}</p>
           <p className="text-yellow-500">⭐ {product.rating.rate} / 5</p>
           </div>
          </div>
        ))}
      </div>
  )
}

export default ProductCard
