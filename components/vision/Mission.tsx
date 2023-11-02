/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import { millik,mukta, openSans } from "../../app/font";

function HeroSection() {
  return (
    <div className='flex flex-col md:flex-row mb-[107px] mx-4 items-center mt-[80px] max-w-[1150px] md:gap-10 lg:m-auto gap-5 justify-around '>
      <div className=' md:mb-[116px] mb-[40px] mt-[97px] max-w-[800px] text-center md:text-right order-2  bg-center bg-auto bg-[url(/images/visionbg.svg)] '>
              <h1 className={`text-[64px] font-[400] ${millik.className} text-[#11223F]  mb-2.5 leading-[61px]`}>
              Our Mission
              </h1>
              <p className={`text-[#3B4350] mt-[48px] max-w-[800px] text-[24px] font-[500] ${mukta.className}`}>Our mission is to rapidly deliver efficient software solutions through collaborative iteration, leveraging cutting-edge technology. We empower businesses to scale, innovate, and overcome unique challenges.</p>
    </div>


    <div>
        <figure className='order-1 max-w-[280px]'>
            <Image src='/images/missionimg.svg' width={280} height={200} alt='hh' />
        </figure>
    </div>
    </div>
  )
}


export default HeroSection