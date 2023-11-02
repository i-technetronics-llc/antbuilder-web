/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { millik,mukta, openSans } from "../../app/font";
function DevelopmentCard() {
  return (
    <div className='max-w-[1146px] m-auto mt-[47px]'>
        <div className='grid md:grid-cols-3 m-auto  gap-[28px]'>
        <div className='bg-[#0A2656]   m-auto  max-w-[354px] rounded-[15px] h-[400px] p-[24px]'>
            <h1 className={`text-[#FFF] font-[700] text-[28px] ${mukta.className}`}>App Development and Polishing</h1>
            <p className={`text-[#F5F5F5] text-[14px]  font-[400] mt-[10px]  ${openSans.className}`}>Our approach begins with crafting custom PRDs (Product Requirements Documents) that precisely outline your app's functionalities and goals. From app design development to clickable prototypes and MVPs (Minimum Viable Products), we ensure your vision takes shape with perfection.</p>
        </div>
        <div className='bg-[#EDF4FF]   m-auto  max-w-[354px] rounded-[15px] h-[400px] p-[24px]'>
            <h1 className={`text-[#11223F] font-[700] text-[28px] ${mukta.className}`}>App Deployment and Compliance</h1>
            <p className={`text-[#6C7480] text-[14px]  font-[400] mt-[10px]  ${openSans.className}`}>Rest easy knowing your app adheres to the highest industry standards. We handle all compliance requirements, including HIPAA and PCI, ensuring your app meets regulatory guidelines before going live on various app stores.</p>
        </div>
        <div className='bg-[#0A2656]   m-auto  max-w-[354px] rounded-[15px] h-[400px] p-[24px]'>
            <h1 className={`text-[#FFF] font-[700] text-[28px] ${mukta.className}`}>Go-to-Market Strategy and Product Roadmap</h1>
            <p className={`text-[#F5F5F5] text-[14px]  font-[400] mt-[10px]  ${openSans.className}`}>With our meticulous go-to-market strategy and well-planned product roadmap, we empower your app to make a mark in the market. By employing data-driven insights, user feedback research, and meticulous planning, we ensure your app's successful launch and growth.</p>
        </div>
        <div className='bg-[#EDF4FF]   m-auto  max-w-[354px] rounded-[15px] h-[400px] p-[24px]'>
            <h1 className={`text-[#11223F] font-[700] text-[28px] ${mukta.className}`}>System Architecural Design</h1>
            <p className={`text-[#6C7480] text-[14px]  font-[400] mt-[10px]  ${openSans.className}`}>we build a general arc design specifics and unique to your project so as to add development and fhelp you a non technical client understand how the app work.</p>
        </div>
        <div className='bg-[#0A2656]   m-auto  max-w-[354px] rounded-[15px] h-[400px] p-[24px]'>
            <h1 className={`text-[#FFF] font-[700] text-[28px] ${mukta.className}`}>App Success Delivery</h1>
            <p className={`text-[#F5F5F5] text-[14px]  font-[400] mt-[10px]  ${openSans.className}`}>Our team of specialist brand ambassadors, social media experts, and marketers collaborates with developers, product managers, and architects from the project's outset. This strategic alignment ensures a deep understanding of your app's goals and prepares us to implement a go-to-market strategy effectively. We provide promotional materials, marketing strategies, social media distribution calendars, captivating graphics, and engaging videos to put your app in front of its target audience</p>
        </div>
        </div>
    </div>
  )
}

export default DevelopmentCard