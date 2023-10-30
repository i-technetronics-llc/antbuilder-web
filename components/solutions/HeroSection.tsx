/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import { millik,mukta, openSans } from "../../app/font";

function HeroSection() {
  return (
    <div className='bg-no-repeat mx-w-[1280px]  bg-right bg-auto bg-[url(/images/solutionsbg.svg)]'>
      <div className='max-w-[1017px] mb-[116px] mt-[79px] mx-auto '>
              <h1 className={`text-[64px] font-[400] ${millik.className} text-trueGray-500 mb-2.5 leading-[65px]`}>
              Unlock Your App's Full Potential with Our Comprehensive Solutions
              </h1>
              <p className={`text-[#3B4350] mt-[48px] max-w-[918px] text-[24px] font-[500] ${mukta.className}`}>At  <span className='text-[#3B82F6]'>Antbuilder</span>, we pride ourselves on delivering a total package that blends cutting-edge technology with strategic business insights, ensuring the success of your app from inception to deployment and beyond.</p>
    </div>
    </div>
  )
}


export default HeroSection