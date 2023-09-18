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
          <CountryTag title="3 North American Countries" className='top-[70px] -left-8' />
          <CountryTag title="5 European Countries" className='bottom-10 left-9 !mb-5 lg:!mb-0' />
        </div>

        <figure className='border border-dashed border-[#0A2656] rounded-full w-fit mx-auto p-6 animate-spin-slow'>
          <Image src="/images/earth.png" alt="Earth View" width={350} height={350} />
        </figure>

        <CountryTag title="2 African Countries " className='top-1/2 lg:-transalate-y-1/2 right-0 mt-8 lg:mt-0' />

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