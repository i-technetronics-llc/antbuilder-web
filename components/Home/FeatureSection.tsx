import { millik } from '@/app/font'
import React from 'react'

import Container from '../common/Container'
import FeatureCard from './FeatureCard'


const FeatureSection = () => {
    return (
        <section className=''>
            <div className='bg-primary-200 pb-8 pt-16 text-center space-y-10 flex flex-col items-center mb-10'>
                <span className='text-[28px] font-bold'>
                    ANTBUILDER BENEFITS
                </span>
                <h2 className={`text-4xl lg:text-[52px] text-trueGray-300 lg:w-[29ch] leading-snug ${millik.className}`}>
                    Unleash the Power of Iterative App Development with Antbuilder
                </h2>
            </div>

            <Container className='grid grid-cols-1 lg:grid-cols-[repeat(3,352px)] grid-rows-2 gap-3 lg:gap-0 isolate mx-auto w-fit h-fit'>
                <FeatureCard
                    src='/images/feature-build.png'
                    title='Build'
                    description='Experience unmatched app development excellence with our iterative approach, delivering regular updates for iOS, android platforms, web apps and web services.'
                    className='shadow-[0px_0px_20px_0px_rgba(59,130,246,0.15)_inset] relative lg:z-0 lg:hover:z-20 lg:hover:translate-x-2 hover:-translate-y-5 lg:hover:-translate-y-0'
                    moreLink='#' />

                <FeatureCard
                    src='/images/feature-launch.png'
                    title='Launch'
                    description='Leverage our versatile building blocks, pre-configured builds, and robust testing pipelines to fulfill your customized needs.'
                    className='shadow-[0px_0px_20px_0px_rgba(128,128,128,0.15)] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:-translate-x-6 lg:translate-y-1/2 relative z-10 lg:hover:z-30 lg:hover:-translate-x-3 hover:-translate-y-5 lg:hover:translate-y-1/2'
                    moreLink='#' />

                <FeatureCard
                    src='/images/feature-succeed.png'
                    title='Succeed'
                    description='Develop your app with authentic code utilizing popular open-source frameworks, guided by expert recommendations for the Ideal framework fit. Access your source code anywhere, anytime for seamless collaboration.'
                    className='shadow-[0px_0px_20px_0px_rgba(59,130,246,0.15)] lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 lg:-translate-x-8 relative z-20 lg:hover:z-40 lg:hover:-translate-x-10 hover:-translate-y-5 lg:hover:translate-y-0'
                    moreLink='#' />
            </Container>
        </section>
    )
}

export default FeatureSection