import { millik } from '@/app/font'
import React from 'react'
import BenefitCard from './BenefitCard'
import Container from '../common/Container'


const BenefitSection = () => {
  return (
    <section className=''>
      <div className='bg-primary-200 pb-8 pt-16 text-center  space-y-10 flex flex-col items-center mb-8'>
        <span className='text-[28px] font-bold'>
          ANTBUILDER BENEFITS
        </span>
        <h2 className={`text-4xl lg:text-[52px] text-trueGray-300 lg:w-[29ch] leading-snug ${millik.className}`}>
          Unleash the Power of Iterative App Development with Antbuilder
        </h2>
      </div>

      <Container className='flex items-center gap-5'>
        <BenefitCard
          src='/images/feature-build.png'
          title='Build'
          description='Experience unmatched app development excellence with our iterative approach, delivering regular updates for iOS, android platforms, web apps and web services.'
          className='shadow-[0px_0px_20px_0px_rgba(59,130,246,0.15)_inset]'
          moreLink='#' />

        <BenefitCard
          src='/images/feature-launch.png'
          title='Launch'
          description='Leverage our versatile building blocks, pre-configured builds, and robust testing pipelines to fulfill your customized needs.'
          className='shadow-[0px_0px_20px_0px_rgba(128,128,128,0.15)]'
          moreLink='#' />

        <BenefitCard
          src='/images/feature-succeed.png'
          title='Succeed'
          description='Develop your app with authentic code utilizing popular open-source frameworks, guided by expert recommendations for the Ideal framework fit. Access your source code anywhere, anytime for seamless collaboration.'
          className='shadow-[0px_0px_20px_0px_rgba(59,130,246,0.15)]'
          moreLink='#' />
      </Container>
    </section>
  )
}

export default BenefitSection