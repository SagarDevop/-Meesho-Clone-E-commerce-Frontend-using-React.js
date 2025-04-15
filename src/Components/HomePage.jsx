import React from 'react'
import Navbar from "./Navbar";
import Firstbox from "../Home/Firstbox";
import Secondbox from "../Home/secondbox";
import Contentcontainer from "../Home/Contentcontainer";
import Downloader from "../Home/Downloader";
import Suppliercontainer from "../Home/Suppliercontainer";
import ProductLandingPage from "../Home/ProductLandingPage";
import Footer from "../Home/Footer";
import Becomesaler from "../Beseller/Becomesaler";
import InvestorHero from "../Investorpagecomponents/InvestorHero";
import InvestorStats from "../Investorpagecomponents/InvestorStats";
import InvesNavbar from "../Investorpagecomponents/InvesNavbar";

function HomePage() {
  return (
    <>
    <Navbar />

<Firstbox />
<div className="flex items-center w-[75%] mx-auto mt-7">
  <div className="flex-1 border-t border-purple-500"></div>
  <span className="px-9 text-gray-600 text-[40px] font-bold">
    Top Categories to choose from
  </span>
  <div className="flex-1 border-t border-purple-500"></div>
</div>
<Secondbox
  image1="https://images.meesho.com/images/marketing/1742877415620_1200.webp"
  image2="https://images.meesho.com/images/marketing/1701835320853_400.webp"
  image3="https://images.meesho.com/images/marketing/1692191045019_300.webp"
  image4="https://images.meesho.com/images/marketing/1692191045019_300.webp"
/>
<Contentcontainer 
image1="	https://images.meesho.com/images/marketing/1742877396336_1200.webp"
image2="https://images.meesho.com/images/marketing/1690978007288_200.webp"
image3="https://images.meesho.com/images/marketing/1690978024110_200.webp"
image4="https://images.meesho.com/images/marketing/1690977994925_200.webp"
title1="Home Decor"
title2="Kitchenware"
title3="Healthcare"
/>
<Contentcontainer 
image1="https://images.meesho.com/images/marketing/1742877367103_1200.webp"
image2="https://images.meesho.com/images/marketing/1690977773436_200.webp"
image3="https://images.meesho.com/images/marketing/1690977909442_200.webp"
image4="https://images.meesho.com/images/marketing/1690977645848_200.webp"
title1="Accessories"
title2="Footwear"
title3="Electronics"
/>
<Downloader image="https://images.meesho.com/images/pow/downloadBannerDesktop_1050.webp"
image1="https://images.meesho.com/images/pow/playstoreIcon_500.webp"
image2="https://images.meesho.com/images/pow/appstoreIcon_500.webp"
/>
<Suppliercontainer image="https://images.meesho.com/images/pow/supplyBannerDesktop_1106.webp"
/>

<div className="text-[35px] text-gray-600 font-semibold ml-5 mb-5  mt-9">
Products For You
</div>
<ProductLandingPage />
<Footer />
    
    </>
  )
}

export default HomePage
