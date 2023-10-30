'use client'

import { millik, mukta } from '@/app/font'
import Image from 'next/image'
import React from 'react'
import Container from '../common/Container'

interface CountryTagProps {
  title: string
  className?: string
}

const AchievementSection = () => {
  return (
    <section className='mt-20 lg:mb-32 mb-20'>
      <h2 className={`text-4xl lg:text-[64px] text-trueGray-500 text-center mb-8 ${millik.className}`}>Our Achievement</h2>
      <Container className='relative w-full max-w-5xl mx-auto'>
        <div className='flex flex-col space-y-3'>
          <CountryTag title="3 North American Countries" className='top-[70px] -left-14' />
          <CountryTag title="5 European Countries" className='bottom-10 left-9 !mb-5 lg:!mb-0' />
        </div>

        {/* <figure className='border border-dashed border-[#0A2656] rounded-full w-fit mx-auto p-6 animate-spin-slow'> */}
        <figure className='border border-dashed border-[#0A2656] rounded-full w-fit mx-auto p-6 '>
          <Image src="/images/earth.png" alt="Earth View" width={456} height={350} />
        </figure>

        <CountryTag title="2 African Countries " className='top-1/2 lg:-transalate-y-1/2 right-0 mt-8 lg:mt-0' />

      </Container>
      <Container className='relative w-full max-w-5xl mx-auto'>
        <div className='flex flex-col space-y-3'>
          <CountryTag title="24/7 Customer Support" className='top-[200px] -left-16' />
        </div>

        <figure className='border items-center border-dashed h-[432px] border-[#0A2656] m-auto rounded-[40px]  max-w-[500px] mx-auto p-2 '>
          <div className='m-auto'>
          <Image src="/images/complete 1.svg" alt="Earth View" className='m-auto -mt-6' width={456} height={456} />
          </div>
        </figure>

        <div>
        <CountryTag title="10+ Projects Completed" className='top-6 -right-16 !mb-5 lg:!mb-0' />


        <CountryTag title="5+ Dedicated Team  members on each Project " className='bottom-10 w-[356px] lg:-transalate-y-1/2 -right-24 mt-8 lg:mt-0' />

        </div>

      </Container>
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