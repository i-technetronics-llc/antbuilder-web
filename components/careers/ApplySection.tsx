/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { openSans,millik,mukta} from "@/app/font";
function ApplySection() {
  return (
    <div>
        <p className={`${mukta.className} text-[24px] mb-[15px] mt-[79px] text-center m-auto text-[#3B4350]  mt- font-[500] max-w-[705px]`}>Apply for the role you’re best suited for by sending your resume to</p>
        <button className={`m-auto flex items-center bg-[#1E3866] py-[8px] gap-[15.75px] px-[16px] rounded-[39px] `}>
             <Image src="/images/anticon.png" width={30} height={40} alt="icon" />
             <h1 className={`text-[#FFFFFF] text-[24px] font-[600]`}>@antbuilder.tech</h1>
             <div className='w-[16px] h-[16px] bg-[#3B82F6] rounded-full'></div>
        </button>
    </div>
  )
}

export default ApplySection