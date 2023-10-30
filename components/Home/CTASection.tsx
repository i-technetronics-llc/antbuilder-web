import React from 'react'
import Container from '../common/Container'
import { millik, mukta } from '@/app/font'
import Button from '../common/Button'
import { BsChevronRight } from 'react-icons/bs'

const CTASection = () => {
    return (

<Container className='mb-16 '>
<section className='bg-trueGray-500 px-[62px] py-[56px] rounded-[20px] space-y-6 w-full max-w-[1152px] mx-auto mt-10 text-center shadow-[0px_0px_20px_0px_rgba(128,128,128,0.25)] text-white'>
    <div className='max-w-[1023px]'>
    <h2 className={`text-3xl lg:text-[40px]  ${millik.className} leading-snug`}>
     {/* eslint-disable-next-line react/no-unescaped-entities */}
     Transform your vision into reality with Antbuilder
    </h2>
    <p className={`mt-[24px] md:text-[28px] mx-auto lg:max-w-[1023px] ${mukta.className} `}>
    Turning ideas and specifications into powerful code. 
    </p>
    <p className={`mt-[24px] md:text-[28px] mx-auto lg:max-w-[1023px] ${mukta.className} `}>
    Click on the button to get started now
    </p>
    <Button Icon={<BsChevronRight />} iconDir='right' variant='inverse' rounded className='py-[16px] mt-[24px] text-[24px] px-[32px] h-[72px]'>
        Get Started
    </Button>
    </div>
</section>
</Container>
    )
}

export default CTASection