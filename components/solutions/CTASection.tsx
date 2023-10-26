/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Container from '../common/Container'
import { millik, mukta } from '@/app/font'
import Button from '../common/Button'
import { BsChevronRight } from 'react-icons/bs'

const CTASection = () => {
    return (
        <Container className='mb-16'>
            <section className='bg-trueGray-500 px-[62px] py-[52px] rounded-[20px] space-y-6 w-full max-w-5xl mx-auto mt-10 text-center shadow-[0px_0px_20px_0px_rgba(128,128,128,0.25)] text-white'>
                <h2 className={`text-3xl lg:text-[40px] ${millik.className} leading-snug`}>
                 {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's Collaborate
                </h2>
                <p className={`text-lg lg:text-xl mx-auto lg:max-w-[1023px] ${mukta.className} `}>
                Together, we can unlock the full potential of your app and drive it to unprecedented success. Our passion for excellence and commitment to delivering exceptional results set us apart as your ideal partner for app development and promotion. Join us on this journey, and let's make your app a standout success story
                </p>
                <Button Icon={<BsChevronRight />} iconDir='right' variant='inverse' rounded className='px-8'>
                    Get Started
                </Button>
            </section>
        </Container>
    )
}

export default CTASection