import React from 'react'
import { millik,mukta, openSans } from "../../app/font";
import BusinessCard from './BusinessCard';
function BusinessTeam() {
  return (
    <div>
    <div className='max-w-[1014px] mt-[16px] mx-auto'>
        <h1 className={`text-[ #11223F] mb-[55px]  text-center ${millik.className} text-[30px] md:text-[52px] font-[400]   `}>Business Team</h1>
    <div>
    <div className='flex space-between md:flex-row flex-col flex-wrap mx-auto max-w-[1280px]'>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Project Manager</button>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Brand Ambassador</button>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Social Media Specialist</button>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Graphics Designer/Animator</button>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Video Grapher (if applicable)</button>
</div>

    <BusinessCard/>
    </div>
    </div>
    </div>
 
  )
}




export default BusinessTeam