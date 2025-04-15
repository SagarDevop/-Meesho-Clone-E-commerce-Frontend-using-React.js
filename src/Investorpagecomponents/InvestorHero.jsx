import React from 'react'
import InvestorStats from './InvestorStats'

function InvestorHero( ) {

  
  
  return (
    <>
    <div className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-center" style={{ backgroundImage: "url(https://investor.meesho.com/investor-web/_next/images/home_header.png)" }}>
    <div className=" p-6 rounded-xl  w-[60vw]">
      <h1 className="text-4xl md:text-5xl font-bold">Meesho is democratising <br />
       internet commerce for everyone</h1>
      <p className="mt-14 text-lg">For nearly a decade, Meesho has built innovative technology to create an <br />
       accessible and affordable e-commerce ecosystem for a billion Indians</p>
    </div>
  </div>
  
    </>
  )
}

export default InvestorHero
