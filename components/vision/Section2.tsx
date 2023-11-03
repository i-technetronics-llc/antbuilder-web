import React from 'react'
import { millik, mukta } from '@/app/font'

function Section() {
  return (
    <div className={`max-w-[1152px] min-h-[128px] bg-[#0A2656] m-auto rounded-[20px]`}>
        <div className={` font-[500] px-[10px] pt-[20px] md:pt-[44px] md:text-[24px] text-[18px]  max-w-[1104px]  text-[#FFFFFF] ${mukta.className} text-center `}>
        With our expertise, we transform your dreams into reality.        </div>
    </div>
  )
}

export default Section