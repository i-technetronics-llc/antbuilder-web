import React from 'react'
import Image from 'next/image'
import { millik,mukta, openSans } from "../../app/font";
import Button from "@/components/common/Button";
import Link from 'next/link'

const  projects =[
  {
    img:"/images/edg.svg",
    title:"EdCheck",
    link:"",
    figclass:"max-w-[443px] max-h-[271px] m-auto",
    desclass:"max-w-[742px] m-auto bg-auto bg-cover bg-no-repeat bg-[url(/images/projectsbg.png)]",
    absoluteimg:"/images/edtech.svg",
    description:"EdCheck is a platform that allows students to get direct and personalized feedback on their course questions and homework attempts.",
    div:"h-[29px] my-[64px] bg-[#EDF4FF] w-[100%]"

  },
  {
    img:"/images/hobg.svg",
    title:"Hobbyist",
    link:"",
    figclass:"max-w-[443px] md:order-2 max-h-[271px] m-auto",
    desclass:"max-w-[742px] m-auto md:order-1 bg-auto bg-cover bg-no-repeat bg-[url(/images/projectsbg.png)]",
    description:"This app is intended for collectors who want to inventory and understand the value of their collection over time.",
    div:"h-[29px] my-[64px] bg-[#EDF4FF] w-[100%]"

  },
  {
    img:"/images/exg.svg",
    title:"EzyMedik",
    link:"",
    figclass:"max-w-[443px] max-h-[271px] m-auto",
    desclass:"max-w-[742px] m-auto bg-auto bg-cover bg-no-repeat bg-[url(/images/projectsbg.png)]",
    description:"The EzyMedik App provides bill payment via NHIS providers, ambulance requests, medication orders, appointment management, health information, secure health records, and hospital location services",
    div:"h-[29px] my-[64px] bg-[#EDF4FF] w-[100%]"

  },
  {
    img:"/images/worldbg.png",
    title:"World Main Market",
    link:"",
    figclass:"max-w-[443px] md:order-2 max-h-[271px] m-auto",
    desclass:"max-w-[742px] m-auto md:order-1 bg-auto bg-cover bg-no-repeat bg-[url(/images/projectsbg.png)]",
    description:"World Main Market brings physical markets and stores around you to your phone. have a direct access with store owners without going to the market",
    div:""
  }
]


function projectCard() {
 return(

    <div className=' m-auto mt-[56.28px]'>
      {projects.map((project)=>(
        <div  key={project.title}> 
        <div className='flex flex-col max-w-[1280px] my-[92px]  gap-[31px] items-center  m-auto md:flex-row' >
     
           <figure className={project.figclass}>
              <Image src={project.img} width={443} height={271} alt='hh' />
              {/* <div className='max-w-[150px] max-h-[150px]'>
              <Image src={project.absoluteimg} width={150} height={150} alt='hh' className='absolute top-1/2 bottom-10 left-[310px]' />
              </div> */}
          </figure> 
          

          <div className={project.desclass}>
            <h1 className={`text-[#080E1A] ${mukta.className} text-[32px] font-[700]`}>{project.title}</h1>
            <p className={`text-[#3B4350] mt-[10px] max-w-[720px] ${openSans.className} text-[24px] font-[400]`}>{project.description}</p>
            <Link href={project.link}>
            <button  className='inline-block text-[#3B82F6] px-[16px] py-[8px] mt-[30px] w-[120px] h-[43px] transition hover:opacity-80 hover:scale-95  border-[1px] border-[#3B82F6] text-[16px] rounded-[40px]'>
                    Get Started
                </button>
            </Link>
          </div>
   
      </div><div className={project.div}>
</div>
      </div>

      ))}       
    </div>


  )
}


export default projectCard