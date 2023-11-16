/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { openSans,millik,mukta} from "@/app/font";
function ApplySection() {
  return (
    <div>
        <p className={`${mukta.className} text-[20px] mb-[15px] mt-[79px] text-center md:m-auto text-[#3B4350]  mx-2 font-[500] max-w-[900px]`}>AntBuilder is at the forefront of innovative software and app development, specializing in crafting cutting-edge solutions for businesses across diverse industries. With a commitment to excellence and a passion for leveraging technology to drive success, AntBuilder is a dynamic force in the digital landscape. Our team thrives on creativity, collaboration, and a relentless pursuit of delivering tailor-made solutions that exceed expectations. Join the AntBuilder team as we pave the way for the future of digital transformation.</p>
        <button className={`m-auto flex items-center bg-[#1E3866] py-[8px] gap-[15.75px] px-[16px] rounded-[39px] `}>
             <Image src="/images/anticon.png" width={30} height={40} alt="icon" />
             <h1 className={`text-[#FFFFFF] text-[24px] font-[600]`}>@antbuilder.tech</h1>
             <div className='w-[16px] h-[16px] bg-[#3B82F6] rounded-full'></div>
        </button>
    </div>
  )
}

export default ApplySection