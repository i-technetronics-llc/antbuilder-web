import React from 'react'
import { openSans,millik,mukta } from '@/app/font'
import Image from 'next/image'
function HeroSection() {
  return (
    <div className='mb-[56px]'>
        <h1 className={`max-width-[560px] ${millik.className} mb-[48px] mt-[80.28px] text-[#11223F] font-[400] text-[64px] text-center`}>Join the ant team!</h1>
        <p className={`max-width-[560px] text-center ${mukta.className} font-[500] text-[24px]`}>We are hiring! Think you’re just who we’re looking for? <br /> Apply Now!!</p>
    </div>
  )
}

export default HeroSection