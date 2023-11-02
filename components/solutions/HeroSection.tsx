/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import { millik,mukta, openSans } from "../../app/font";

function HeroSection() {
  return (
    <div className='bg-no-repeat mx-w-[1150px]   bg-right bg-auto bg-[url(/images/solutionsbg.svg)]'>
      <div className='md:max-w-[1150px] mb-[116px] m-auto mt-[79px] '>
      <div className='max-w-[1017px] mt-[79px] '>
              <h1 className={`text-[32px] mx-4 md:mx-2  lg:mx-0 md:text-[64px] font-[400] ${millik.className} text-trueGray-500 mb-2.5 leading:[55px] md:leading-[65px]`}>
              Unlock Your App's Full Potential with Our Comprehensive Solutions
              </h1>
              <p className={`text-[#3B4350] mt-[48px] mx-4 md:mx-2 lg:mx-0  max-w-[918px] text-[24px] font-[500] ${mukta.className}`}>At  <span className='text-[#3B82F6]'>Antbuilder</span>, we pride ourselves on delivering a total package that blends cutting-edge technology with strategic business insights, ensuring the success of your app from inception to deployment and beyond.</p>
    </div>
    </div>
    </div>
  )
}


export default HeroSection