import React from 'react'
import Container from '../common/Container'
import { millik, mukta } from '@/app/font'
import Button from '../common/Button'
import { BsChevronRight } from 'react-icons/bs'

const CTASection = () => {
    return (
        <Container className='mb-16'>
            <section className='bg-trueGray-500 px-6 py-10 rounded-[20px] space-y-6 w-full max-w-5xl mx-auto mt-10 text-center shadow-[0px_0px_20px_0px_rgba(128,128,128,0.25)] text-white'>
                <h2 className={`text-3xl lg:text-[40px] ${millik.className}`}>
                    Transform your vision into reality with Antbuilder
                </h2>
                <p className={`text-lg lg:text-xl mx-auto lg:w-[40ch] ${mukta.className} `}>
                    Turning ideas and specifications into powerful code. Click on the button to get started now
                </p>
                <Button Icon={<BsChevronRight />} iconDir='right' variant='inverse' rounded className='px-8'>
                    Get Started
                </Button>
            </section>
        </Container>
    )
}

export default CTASection