import React from 'react'
import Slider from '../Sorting_Filtering/Slider'
import ProductListingPage from '../Components/ProductListingPage'
function ProductLandingPage() {
  return (
   <>
   <div className='w-[98%] mx-auto h-full flex gap-1'>
   <Slider />
   <ProductListingPage />

   </div>
   </>
  )
}

export default ProductLandingPage
