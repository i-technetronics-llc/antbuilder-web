import React from 'react'
import { millik, mukta } from '@/app/font'

function Section() {
  return (
    <div className={`max-w-[1152px] mt-[116px] m-auto bg-[#0A2656] rounded-[20px] `}>
        <div className={` font-[500]  max-w-[1104px] md:text-[24px] text-[18px] p-[24px]  text-[#FFFFFF] ${mukta.className} text-center `}>
        We do this because we want to help businesses scale fast, develop novelty solutions and solve unique business problem. If you can dream it, we can build it.
        </div>
    </div>
  )
}

export default Section