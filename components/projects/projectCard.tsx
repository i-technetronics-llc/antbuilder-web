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
    absoluteimg:"/images/edtech.svg",
    description:"EdCheck is a platform that allows students to get direct and personalized feedback on their course questions and homework attempts.",
  },
  {
    img:"/images/hobg.svg",
    title:"Hobbyist",
    link:"",

    description:"This app is intended for collectors who want to inventory and understand the value of their collection over time.",
  },
  {
    img:"/images/exg.svg",
    title:"EzyMedik",
    link:"",
    description:"The EzyMedik App provides bill payment via NHIS providers, ambulance requests, medication orders, appointment management, health information, secure health records, and hospital location services",
  },
  {
    img:"/images/exg.svg",
    title:"World Main Market",
    link:"",
    description:"World Main Market brings physical markets and stores around you to your phone. have a direct access with store owners without going to the market",
  }
]


function projectCard() {
 return(

    <div className=' m-auto mt-[56.28px]'>
      {projects.map((project)=>(
        <div className='flex flex-col max-w-[1280px] my-10  space-x-10 items-center  m-auto md:flex-row' key={project.title} >
     
           <figure className='max-w-[443px] max-h-[271px] m-auto'>
              <Image src={project.img} width={443} height={271} alt='hh' />
              {/* <div className='max-w-[150px] max-h-[150px]'>
              <Image src={project.absoluteimg} width={150} height={150} alt='hh' className='absolute top-1/2 bottom-10 left-[310px]' />
              </div> */}
          </figure> 
          

          <div className="max-w-[742px] m-auto ">
            <h1 className={`text-[#080E1A] ${mukta.className} text-[32px] font-[700]`}>{project.title}</h1>
            <p className={`text-[#3B4350] mt-[10px] max-w-[720px] ${openSans.className} text-[24px] font-[400]`}>{project.description}</p>
            <Link href={project.link}>
            <Button
              
              className="!text-2xl mt-[30px] font-light py-3 px-5"
              variant="outline"
              rounded>
              Go to project
            </Button>
            </Link>
          </div>
      </div>

      ))}
    </div>


  )
}


export default projectCard