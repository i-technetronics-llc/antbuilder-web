/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import { openSans } from '@/app/font'
function BusinessCard() {
  return (
    <div className={`max-w-[1280px] mt-[40px] flex flex-col gap-[100px]`}>
        <div className={`max-w-[1280px] `}>
            <div className={`max-w-[998px] bg-[#0A2656] rounded-[15px] p-[24px]  m-auto`}>
            <div className={` max-w-[950px] items-center flex flex-col gap-[24px] m-auto md:flex-row`}>
                <figure className='m-auto max-w-[352px]'>
                  <Image src='/images/b1.svg' alt="ugu" className='m-auto' width={752} height={478} />
                  </figure>

                  <div className={`max-w-[574px] m-auto`}>
                    <p className={`text-[24px] text-[#FFFFFF] m-auto font-[400] ${openSans.className} `}>Our devoted business team is dedicated to your project's success. Our design experts craft captivating visuals reflecting your app's essence, leaving an indelible mark on your audience. Emphasizing aesthetics, UX, and brand, we ensure your app shines amid competitors, driving user engagement and loyalty.</p>
                  </div>
            </div>
            </div>
        </div>
        <div className={`max-w-[1280px] `}>
            <div className={`max-w-[998px] bg-[#EDF4FF] rounded-[15px] p-[24px]  m-auto`}>
            <div className={` max-w-[950px] items-center flex flex-col gap-[24px] m-auto md:flex-row`}>
                <figure className='m-auto max-w-[352px] order-2'>
                  <Image src='/images/b2.svg' alt="ugu" className='m-auto' width={752} height={478} />
                  </figure>

                  <div className={`max-w-[574px] m-auto order-1`}>
                    <p className={`text-[24px] m-auto font-[400] ${openSans.className} `}>We continually refine your marketing strategy, adapting to trends proactively. Adaptable and up-to-date, we keep your app appealing to your target market.</p>
                  </div>
            </div>
            </div>
        </div>
        <div className={`max-w-[1280px] `}>
            <div className={`max-w-[998px] bg-[#0A2656] rounded-[15px] p-[24px]  m-auto`}>
            <div className={` max-w-[950px] items-center flex flex-col gap-[24px] m-auto md:flex-row`}>
                <figure className='m-auto max-w-[352px]'>
                  <Image src='/images/b3.svg' alt="ugu" className='m-auto' width={752} height={478} />
                  </figure>

                  <div className={`max-w-[574px] m-auto`}>
                    <p className={`text-[24px] text-[#FFFFFF] m-auto font-[400] ${openSans.className} `}>In the social sphere, our dedicated team arms you with potent scheduling tools for precise audience targeting. Excelling in social engagement, we optimize your reach. Plus, we provide crucial SEO tools to boost discoverability, making your app visible to potential users.</p>
                  </div>
            </div>
            </div>
        </div>
    </div>
  )
}


export default BusinessCard