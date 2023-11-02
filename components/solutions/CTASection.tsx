/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Container from '../common/Container'
import { millik, mukta } from '@/app/font'
import Button from '../common/Button'
import { BsChevronRight } from 'react-icons/bs'

const CTASection = () => {
    return (
        <Container className='mb-16 '>
            <section className='bg-trueGray-500 px-[10px] md:px-[62px] py-[56px] rounded-[20px] space-y-6 w-full max-w-[1152px] mx-auto mt-10 text-center shadow-[0px_0px_20px_0px_rgba(128,128,128,0.25)] text-white'>
                <div className='max-w-[1023px]'>
                <h2 className={`text-3xl lg:text-[40px]  ${millik.className} leading-snug`}>
                 {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's Collaborate
                </h2>
                <p className={`mt-[24px]  text-[22px] md:text-[28px] mx-auto lg:max-w-[1023px] ${mukta.className} `}>
                Together, we can unlock the full potential of your app and drive it to unprecedented success. Our passion for excellence and commitment to delivering exceptional results set us apart as your ideal partner for app development and promotion. Join us on this journey, and let's make your app a standout success story
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