'use client'

import { millik, mukta } from '@/app/font'
import Image from 'next/image'
import React from 'react'
import Container from '../common/Container'
import { useState, useEffect } from 'react';
interface CountryTagProps {
  title: string
  className?: string
}

const AchievementSection = () => {

  const [showContainer1, setShowContainer1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContainer1((prevValue) => !prevValue); // Toggle between Container 1 and Container 2
    }, 3000); // Change containers every 2 seconds (adjust the interval as needed)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <section className="mt-20 lg:mb-32 mb-20  bg-[url('/images/achievebg.png')]">
      <h2 className={`text-4xl lg:text-[64px] text-trueGray-500 text-center mb-[4rem] ${millik.className}`}>Our Achievement</h2>
      {showContainer1 &&
      <Container className={`relative w-full transition-opacity duration-500 ${showContainer1 ? 'animate-in  fade-in-0 duration-500' : 'animate-out fade-out-0 duration-500'} max-w-5xl mx-auto `}>
        <div className='flex flex-col space-y-3'>
          <CountryTag title="3 North American Countries" className='top-[70px] -left-14' />
          <CountryTag title="5 European Countries" className='bottom-10 left-9 !mb-5 lg:!mb-0' />
        </div>

        {/* <figure className='border border-dashed border-[#0A2656] rounded-full w-fit mx-auto p-6 animate-spin-slow'> */}
        <figure className='border border-dashed border-[#0A2656] rounded-full w-fit mx-auto p-6 '>
          <Image src="/images/earth.png" alt="Earth View" width={456} height={350} />
        </figure>

        <CountryTag title="2 African Countries " className='top-1/2 lg:-transalate-y-1/2 right-0 mt-8 lg:mt-0' />

      </Container>}
      {!showContainer1 && 
      <Container className={`relative w-full max-w-5xl mx-autotransition-opacity duration-500 ${showContainer1 ? 'animate-out fade-out-0 duration-500' : 'animate-in fade-in-0 duration-500'}`}>
        <div className='flex flex-col space-y-3'>
          <CountryTag title="24/7 Customer Support" className='top-[200px] -left-16' />
        </div>

        <figure className='border items-center border-dashed  border-[#0A2656] m-auto rounded-[40px] my-4 max-w-[500px] mx-auto md:p-1  p-2'>
          <div className='m-auto'>
          <Image src="/images/complete 1.svg" alt="Earth View" className='m-auto' width={456} height={100} />
          </div>
        </figure>

        <div>
        <CountryTag title="10+ Projects Completed" className='top-6 -right-16 !mb-5 lg:!mb-0' />


        <CountryTag title="5+ Dedicated Team  members on each Project " className='bottom-10 w-[356px] lg:-transalate-y-1/2 -right-24 mt-8 lg:mt-0' />

        </div>

      </Container>
      }
    </section>
  )
}

export default AchievementSection

const CountryTag = ({ title, className = "" }: CountryTagProps) => {
  return (
    <p className={`text-base lg:text-3xl text-center font-bold text-trueGray lg:absolute ${mukta.className} ${className}`}>
      {title}
    </p>
  )
}