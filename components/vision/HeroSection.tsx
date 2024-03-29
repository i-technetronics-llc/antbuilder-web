/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import { millik,mukta, openSans } from "../../app/font";

function HeroSection() {
  return (
    <div className='flex flex-col mb-[90px] md:mb-[116px] mx-4 mt-[70px] md:flex-row md:items-center max-w-[1150px] gap-5 md:gap-10 lg:mx-auto justify-around '>
      <div className='max-w-[811px] text-center md:text-start    bg-center bg-auto bg-[url(/images/visionbg.svg)] '>
              <h1 className={`text-[64px] font-[400] ${millik.className} text-[#11223F]  mb-2.5 leading-[61px]`}>
              Our Vision
              </h1>
              <p className={`text-[#3B4350] mt-[48px]  max-w-[800px] text-[24px] font-[500] ${mukta.className}`}>Our vision is to build softwares fast, efficiently, in an iterative and collaborative manner  with the help of  every body needed to achieve results as fast as possible and sticking with the change in the technology space.</p>
    </div>


    <div>
        <figure className='md:max-w-[280px] m-auto md:m-0'>
            <Image src='/images/visionimg.svg' width={280} className='m-auto md:m-0' height={100} alt='hh' />
        </figure>
    </div>
    </div>
  )
}


export default HeroSection