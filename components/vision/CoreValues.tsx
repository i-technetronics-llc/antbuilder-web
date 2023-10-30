/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import { millik,mukta, openSans } from "../../app/font";
 


function CoreValues() {
  return (
    <div className='max-w-[1152px] m-auto my-[64px]'>
        <div className={`max-w-[1152px]`}>
        <h1 className={`text-[64px] font-[400] ${millik.className} mb-[48px] text-[#080E1A] `}>
         Our Core Values
              </h1>
        </div>

<div className="grid grid-cols-2 gap-[64px]">
        <div className="max-w-sm mx-auto  rounded-xl  overflow-hidden md:max-w-[546px] bg-[#F8FAFF]">
  <div className="md:flex">
    
    <div className="p-4">
      <div className={`${mukta.className} text-[32px] font-[700]`}>Collaboration</div>
      <p className={`${openSans.className} text-[20px] font-[400]`}>Promoting teamwork, open communication, and collaboration among team members and stakeholders. This value supports the emphasis on collaborative software development and involving everyone needed to achieve results</p>
    </div>
  </div>
</div>
        <div className="max-w-sm mx-auto  rounded-xl  overflow-hidden md:max-w-[546px] bg-[#F8FAFF]">
  <div className="md:flex">
    
    <div className="p-4">
      <div className={`${mukta.className} text-[32px] font-[700]`}>Agility</div>
      <p className={`${openSans.className} text-[20px] font-[400]`}> Emphasizing agility and adaptability in responding to changes in the technology space. This value aligns with the iterative approach mentioned in the vision statement, allowing the organization to quickly adapt and deliver software efficiently.</p>
    </div>
  </div>
</div>
        <div className="max-w-sm mx-auto  rounded-xl  overflow-hidden md:max-w-[546px] bg-[#F8FAFF]">
  <div className="md:flex">
    
    <div className="p-4">
      <div className={`${mukta.className} text-[32px] font-[700]`}>Customer Focus</div>
      <p className={`${openSans.className} text-[20px] font-[400]`}>Prioritizing the needs and goals of customers, aiming to understand their requirements and provide software solutions that help their businesses scale fast. This value emphasizes the customer-centric approach mentioned in the vision statements</p>
    </div>
  </div>
</div>
        <div className="max-w-sm mx-auto  rounded-xl  overflow-hidden md:max-w-[546px] bg-[#F8FAFF]">
  <div className="md:flex">
    
    <div className="p-4">
      <div className={`${mukta.className} text-[32px] font-[700]`}>Excellence</div>
      <p className={`${openSans.className} text-[20px] font-[400]`}>Striving for excellence in all aspects of software development, maintaining high standards of quality, efficiency, and performance. This value reflects the organization's commitment to building software fast and efficiently</p>
    </div>
  </div>
</div>
        <div className="max-w-sm mx-auto  rounded-xl  overflow-hidden md:max-w-[546px] bg-[#F8FAFF]">
  <div className="md:flex">
    
    <div className="p-4">
      <div className={`${mukta.className} text-[32px] font-[700]`}>Integrity</div>
      <p className={`${openSans.className} text-[20px] font-[400]`}>Prioritizing the needs and goals of customers, aiming to understand their requirements and provide software solutions that help their businesses scale fast. This value emphasizes the customer-centric approach mentioned in the vision statement</p>
    </div>
  </div>
</div>
        <div className="max-w-sm mx-auto  rounded-xl  overflow-hidden md:max-w-[546px] bg-[#F8FAFF]">
  <div className="md:flex">
    
    <div className="p-4">
      <div className={`${mukta.className} text-[32px] font-[700]`}>Innovation</div>
      <p className={`${openSans.className} text-[20px] font-[400]`}>Striving for excellence in all aspects of software development, maintaining high standards of quality, efficiency, and performance. This value reflects the organizations commitment to building software fast and efficiently</p>
    </div>
  </div>
</div>

</div>
    </div>
  )
}






export default CoreValues