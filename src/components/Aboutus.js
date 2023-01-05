import React from 'react'
import ReactPlayer from 'react-player'
import Footer from './Footer';
import { BsFillArrowRightSquareFill,BsFillCaretDownFill} from "react-icons/bs";
function Aboutus() {
  return (
    <div className='bg-sky-900   mt-96 lg:mt-16 '>
      {/* start of about us */}
     <div>
    <div className='mt-20'>
    <h1 className='mt-20 mx-12 text-xl my-12 text-gray-300'><p className='mt-12  pt-6'>Oda Studio introduces an unprecedented level of photo enhancement, virtual staging, and digital asset management capabilities through a set of powerful, user-friendly, and globally accessible image enhancement and classification tools. Aspiring to unlock the creativity and expression of property owners and real estate businesses, the Oda team uses their exclusive artificial intelligence technology to support the underserved real estate industry with automated and innovative visual marketing solutions.
    Initially gaining popularity among vacation rental hosts and third-party services supporting the rental platform businesses, Oda now supports a variety of top property management companies and builders across the globe.</p></h1>
    </div>

    <div className='mx-40 my-12 p-4  mx-auto  border-4 border-black rounded-md bg-white  text-sky-900 text-white hidden md:block '>
       <h1 className='text-center text-5xl '>Oda Studio by the numbers</h1>
       
       <div className='flex flex-row justify-center'>
        <div className='flex flex-col mt-6  '><h1 className='ml-12 text-4xl'>40+</h1><h2 className='ml-6 text-xl'>Businesses</h2></div>
        <div className='flex flex-col ml-12 mt-6 '><h1 className='ml-12 text-4xl'>3</h1><h2 className='ml-2 text-xl'>Continents</h2></div>
        <div className='flex flex-col ml-12 mt-6 '><h1 className='ml-12 text-4xl'>1M+</h1><h2 className='ml-6 text-xl'>Photos Processed</h2></div>
        </div>
    </div>

    <div>
     <h1 className='mt-20 mx-12 text-xl my-12 text-gray-300'>
      <p>
      With a team of MIT graduates with an extensive background in A.I., Oda Studio has been creating solutions specifically targeting real estate since 2019. Realizing the wealth of untapped information data in property photos and the room for improvement in visual content, the team is working to empower the industry with the latest developments in artificial intelligence and computer vision.
Oda Studio’s image labeling, scoring, and enhancement services receive frequent updates and new features, to allow its users to scale their businesses and increase visibility across online marketing channels.
For any questions/suggestions send an email at <b>help@odaportal.com</b>
      </p>
     </h1>
     </div>
     </div>
     {/* step wise here we explain how company actually work */}
      <div className='hidden md:block '>
        <h1 className='text-center text-5xl text-white underline'>How Oda Works</h1>
        <div className='ml-12 flex flex-col lg:flex-row mt-12'>
          <div className='flex flex-col border-4 border-white p-2 w-60 h-60 '>
             <img  className='w-20 h-20 mx-auto' src="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b7159a67444b101_Step%20One%20Icon.svg" alt="" /> 
              <h1 className='text-gray-300 text-center mt-2'>Image Scoring</h1>
              <h6 className='text-gray-300 text-center mt-2'>We assess image for its technical and aesthetic qualities using ML models photos</h6>
          </div>
          <div className='text-white font-bold my-auto ml-2 '><BsFillArrowRightSquareFill size={48} /></div>
          <div className='flex flex-col border-4 border-white p-2 w-60 h-60 ml-4'>
             <img  className='w-20 h-20 mx-auto ' src="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b7159a1f444b105_Step%20Two%20Icon.svg" alt="" /> 
              <h1 className='text-gray-300 text-center mt-2'>Segmentation</h1>
              <h6 className='text-gray-300 text-center mt-2'>We identify different parts of the photo and objects in the room</h6>
          </div>
          <div className='text-white font-bold my-auto mx-2'><BsFillArrowRightSquareFill size={48} /></div>
          <div className='flex flex-col  border-4 border-white p-2 w-60 h-60  ml-4'>
             <img  className='w-20 h-20 mx-auto ' src="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b71593f7644b102_Step%20Three%20Icon.svg" alt="" /> 
              <h1 className='text-gray-300 text-center mt-2'>Super-resolution</h1>
              <h6 className='text-gray-300 text-center mt-2'>Image restoration using cutting edge GAN models</h6>
          </div>
          <div className='text-white font-bold my-auto mx-2'><BsFillArrowRightSquareFill size={48} /></div>
          <div className='flex flex-col border-4 border-white p-2 w-60 h-60 ml-4'>
             <img  className='w-20 h-20 mx-auto ' src="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b715967ab44b104_Step%204.svg" alt="" /> 
              <h1 className='text-gray-300 text-center mt-2'>Enhancement</h1>
              <h6 className='text-gray-300 text-center mt-2'>Various layers of custom enhancements depending on image content</h6>
          </div>
          </div>
      </div>
   
      <div className='block md:hidden'>
        <h1 className='text-center text-5xl text-white underline'>How Oda Works</h1>
        <div className='ml-12 flex flex-col lg:flex-row mt-12'>
          <div className='flex flex-col border-4 border-white p-2 w-60 h-60 my-2'>
             <img  className='w-20 h-20 mx-auto' src="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b7159a67444b101_Step%20One%20Icon.svg" alt="" /> 
              <h1 className='text-gray-300 text-center mt-2'>Image Scoring</h1>
              <h6 className='text-gray-300 text-center mt-2'>We assess image for its technical and aesthetic qualities using ML models photos</h6>
          </div>
          
          <div className='flex flex-col border-4 border-white p-2 w-60 h-60 my-2 '>
             <img  className='w-20 h-20 mx-auto ' src="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b7159a1f444b105_Step%20Two%20Icon.svg" alt="" /> 
              <h1 className='text-gray-300 text-center mt-2'>Segmentation</h1>
              <h6 className='text-gray-300 text-center mt-2'>We identify different parts of the photo and objects in the room</h6>
          </div>
          
          <div className='flex flex-col  border-4 border-white p-2 w-60 h-60 my-2 '>
             <img  className='w-20 h-20 mx-auto ' src="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b71593f7644b102_Step%20Three%20Icon.svg" alt="" /> 
              <h1 className='text-gray-300 text-center mt-2'>Super-resolution</h1>
              <h6 className='text-gray-300 text-center mt-2'>Image restoration using cutting edge GAN models</h6>
          </div>
          
          <div className='flex flex-col border-4 border-white p-2 w-60 h-60 my-2'>
             <img  className='w-20 h-20 mx-auto ' src="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b715967ab44b104_Step%204.svg" alt="" /> 
              <h1 className='text-gray-300 text-center mt-2'>Enhancement</h1>
              <h6 className='text-gray-300 text-center mt-2'>Various layers of custom enhancements depending on image content</h6>
          </div>
          </div>
      </div>
         

      <div >
      <ReactPlayer className='mx-auto my-12'
        url='https://www.youtube.com/watch?v=VkDDMq452lM&feature=emb_imp_woyt'
        width='640px'
        height='360px'
        controls={true}
      />
    </div>


   <Footer/>
    </div>
  )
}

export default Aboutus