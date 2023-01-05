import React from 'react'
import Footer from './Footer'
function Aiplayground() {
  return (
    <div className='bg-sky-900 mt-20'>
      <h1 className='text-center text-4xl text-gray-300  mt-96 lg:mt-6'> oda playground</h1>
      <h2 className='text-center text-3xl text-gray-300'>Try cutting-edge AI technology with Oda's interactive demos</h2>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
   
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://game.odastudio.ai/_next/image?url=https%3A%2F%2Fthisinteriordoesnotexist.s3.amazonaws.com%2Freal-or-ai%2F3acb1dbc%2F08c7d2e2%2F2.jpg&w=640&q=75"/>
        </div>
        <h2 class="text-2xl font-medium title-font text-gray-300 mt-5">moodboard</h2>
        <p class="text-base  text-xl leading-relaxed mt-2 text-gray-300">Pick a style and color scheme to generate multiple AI-staged interiors in seconds</p>
     
      </div>
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://game.odastudio.ai/_next/image?url=https%3A%2F%2Fthisinteriordoesnotexist.s3.amazonaws.com%2Freal-or-ai%2F287b6e28%2F351143d3%2F1.jpg&w=640&q=75"/>
        </div>
        <h2 class="text-xl text-2xl font-medium title-font text-gray-300 mt-5"> real or ai </h2>
        <p class="text-base  text-xl text-gray-200 leading-relaxed mt-2">Can you tell the difference between real photos and AI-generated images?</p>
      
      </div> 
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://thisinteriordoesnotexist.s3.amazonaws.com/59985d93d360/ca583d24c1b74919830b.png"/>
        </div>
        <h2 class="text-xl font-medium title-font text-2xl text-gray-300 mt-5">this interior does not exist</h2>
        <p class="text-base leading-relaxed mt-2 text-xl text-gray-300">Design fictional, AI-generated interiors with a single click</p>
       
      </div>
    </div>
  </div>
</section>
<Footer/>
    </div>
  )
}

export default Aiplayground