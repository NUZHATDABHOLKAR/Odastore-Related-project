import React from 'react'
 import Card from './Card';
import Cardfs from './Cardfs';
import Cards from './Cards'
import Footer from './Footer';
import { BsBagDash ,BsFillCameraFill,BsKeyFill,BsBuilding} from "react-icons/bs";
// import SimpleImageSlider from "react-simple-image-slider";
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
function Home() {
  return (
    <div className='bg-sky-900 mt-16'>
      {/* hero section */}
    <div className='mt-96 lg:mt-12 bg-sky-900 flex flex-col lg:flex-row w-full p-12 '>
      <div className='flex flex-row w-full ml-0 lg:ml-12 lg:w-1/2 '>
      <div className='my-auto'>
      <h1 className='text-white text-xl lg:text-4xl font-bold'>We're always working<br/> on new things Oda Studio can do</h1>
      <h6 className='mt-2 text-white text-xs  lg:text-xl '>Sign up to receive product and feature updates</h6>
       <div className='flex flex-col lg:flex-row'>
       <input className="placeholder:italic placeholder:text-slate-400 block bg-white  my-4 w-60 h-10 justify-end border border-slate-300 rounded-md py-2 pl-5 pr-2 " placeholder="Email address...." type="text" name="search"/>
       <button className='ml-2 border-2 border-white rounded-md w-32 h-10 my-4 p-2 text-white hover:bg-sky-700'>Subscribe Now</button>
       </div>
       <h6 className='text-white text-sm'>By clicking "subscribe now" you accept Oda Studio terms of use and privacy agreements.</h6>
      </div> 
      </div>
      <div className='w-full mr-12  p-0  lg:w-1/2  p-12 '>
      <video  controls autoPlay loop style={{ width: '500px', height: '360px' }}>
        <source src="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/636e2815dab879dc9d6f2cdc_marketing%20launch%20webflow-transcode.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
    
    {/* Solution services */}
     <div className='flex flex-col lg:flex-row justify-around mr-12'>
     <Cards className="my-4" h1="Property-manager" icon={< BsBagDash size={50}/>} h4="Upgrade, organize, and maximize the conversion potential of your in-unit photos with a single customizable solution" h="LEARN HOW " link="https://studio.odaportal.com/property-manager" />
     <Cards className="my-4" h1="Photographers" icon={< BsFillCameraFill size={50}/>} h4="Focus on your art while we help you grow your business with scalable image enhancement and virtual staging" h="GET STARTED" link="https://studio.odaportal.com/photographers" />
     <Cards className="my-4" h1="HomeBuilders" icon={< BsKeyFill size={50}/>} h4="Customize the homebuying journey with high quality photos in different styles and finishes" h="GET STARTED " link="https://studio.odaportal.com/homebuilders" />
     <Cards className="my-4" h1="MarketPlaces" icon={< BsBuilding size={50}/>} h4="Easy integration, so your agents save time and money on their marketing efforts" h="GET STARTED " link="https://studio.odaportal.com/marketplaces" />
     </div>
     
     {/* proof portfolio */}
    <div className='mx-40 my-32 p-4  mx-auto  border-4 border-black rounded-md bg-white  text-sky-900 text-white  hidden md:block '>
       <h1 className='text-center text-5xl '>Oda Studio by the numbers</h1>
       
       <div className='flex flex-row justify-center'>
        <div className='flex flex-col mt-6  '><h1 className='ml-12 text-4xl'>40+</h1><h2 className='ml-6 text-xl'>Businesses</h2></div>
        <div className='flex flex-col ml-12 mt-6 '><h1 className='ml-12 text-4xl'>3</h1><h2 className='ml-2 text-xl'>Continents</h2></div>
        <div className='flex flex-col ml-12 mt-6 '><h1 className='ml-12 text-4xl'>1M+</h1><h2 className='ml-6 text-xl'>Photos Processed</h2></div>
        </div>
    </div>

     {/* services  */}
    <h1 className='text-white text-center text-4xl font-bold mt-20'>What our client are saying</h1>
    <div className='w-full flex flex-col lg:flex-row justify-center mx-auto lg:justify-around'>
      <Cardfs  IMG="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b715971e044b11d_Haley%20Residential.svg" p1="You guys are always speedy-fast and the photos look great!" name="Haley Residential"/>
      <Cardfs  IMG="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b7159b1d744b11f_Knock%20Residential.svg" p1="Super fast turn-around with reliably high-quality photos, we love working with them!" name="Erez Cohen, CEO of Knock"/>
      <Cardfs  IMG="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b7159e9bd44b11c_Highmark.svg" p1="Oda took our property photos to the next level and their seamless integration to our digital asset manager is a huge time saver." name="Melanie Stiles, VP Marketing, Highmark Residential"/>
    </div> 
    
   {/* how actually product work */}
   <div>
    <h1 className='bg-sky-900  font-bold text-white text-5xl mt-12 text-center'>Product Example </h1>
   <div className="m-12  px-60 ">
      <Card   IMG="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/62fcd6a9102c5a5618939341_pexels-jean-van-der-meulen-3753436-p-800.jpg" IMG2="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/62fcd651207bf732c63a69e7_pexels-jean-van-der-meulen-3753436-Stage.jpg" />
    </div> 
    
   </div>

   {/* footer  */}
   <Footer/>
    </div>
  )
}

export default Home