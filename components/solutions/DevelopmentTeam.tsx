import React from 'react'
import { millik,mukta, openSans } from "../../app/font";
import DevelopmentCard from './DevelopmentCard';
function BusinessTeam() {
  return (
    <div className='m-auto'>
    <div className='max-w-[1014px] mb-[64px] mt-[16px] mx-auto'>
        <h1 className={`text-[ #11223F] mb-[55px]  text-center ${millik.className} text-[30px] md:text-[52px] font-[400]   `}>Development Team</h1>
    <div>
    <div className='flex space-between md:flex-row flex--col flex-wrap mx-auto max-w-[1280px]'>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Frontend Developers</button>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Backend Developers</button>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>DevOps (where applicable)</button>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Project Manager</button>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Solutions Architect</button>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Graphics Designer</button>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Customer Success Manager (CSM)</button>
    <button className={`bg-white text-[#055DAE]  mx-auto border-1 border font-[700]  text-20px md:text-[28px] border-[#055DAE] rounded-[20px] px-4 py-2.5 mb-[20px] ${mukta.className}`}>Quality Assurance Specialists</button>
</div>

   
    </div>
    </div>
     <DevelopmentCard/>
    </div>
 
  )
}
export default BusinessTeam 