/* eslint-disable react/no-unescaped-entities */
"use client"
import React from "react";
import Image from "next/image";
import { openSans,millik,mukta} from "@/app/font";
import Button from "@/components/common/Button";
import Link from "next/link";
import { useState } from "react";
function ApplySection() {
    const [buttonText, setButtonText] = useState("Share");

    const handleCopyToClipboard = () => {
        const URL = window.location.href;
        navigator.clipboard.writeText(URL)
        .then(() => {
            // alert('URL copied to clipboard!');
            setButtonText('Copied!');
            setTimeout(() =>{
                setButtonText('Share');
                
            },2000)
          })
          .catch((err) => {
            console.error('Unable to copy to clipboard', err);
          });
    }
  return (
    <div>
        <div className='m-auto flex  justify-center gap-[57px] mt-[84px]'>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeYgs45vC7J3NJSO8TK3qHJ3jiVmLnIKxWOARL0oDulQ9v19A/viewform?usp=sf_link ">
            <button className={`p-[20px] bg-[#3B82F6] hover:opacity-80 hover:scale-95 w-[154px] ${mukta.className}  font-[700] text-[16px] rounded-[40px] text-[#FFF]`} >Apply Now</button>
            </Link>
           
            <button className={`p-[20px] border border-[#3B82F6] hover:opacity-80 hover:scale-95 w-[154px] ${mukta.className}  font-[700] text-[16px] rounded-[40px] text-[#3B82F6]`} onClick={handleCopyToClipboard}>{buttonText}</button>
        </div>
        <p className={`${mukta.className} text-[24px] mb-[15px] mt-[79px] text-center m-auto text-[#3B4350]   font-[500] max-w-[1113px]`}>Subscribe to our newsletter to get updates about job openings</p>
        <button className={`m-auto flex items-center bg-[#1E3866] py-[8px] gap-[15.75px] px-[16px] rounded-[39px] `}>
             <Image src="/images/anticon.png" width={30} height={40} alt="icon" />
             <h1 className={`text-[#FFFFFF] text-[24px] font-[600]`}>careers@antbuilder.tech</h1>
             <div className='w-[16px] h-[16px] bg-[#3B82F6] rounded-full'></div>
        </button>
    </div>
  )
}

export default ApplySection