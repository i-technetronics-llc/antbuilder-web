import React from 'react'
import { millik,openSans, mukta } from '@/app/font'
function StarTeam() {
  return (
    <div className=' bg-[#EDF4FF] w-[100%] py-[25px]  lg:px-[125px]'>
<div className='max-w-[1079px]   m-auto pt-[86px] pb-[70px]'>
<h1 className={`text-[#3B4350] text-[28px] ${mukta.className}  font-[700] text-center`}>YOUR ALL-STAR TEAM</h1>
<p className={`text-[#4E5765] mt-[24px]  ${openSans.className} text-center font-[400] text-[18px] md:text-[24px] `}>Our dedicated teams, consisting of specialists and experts, work collaboratively to provide constant feedback and support, making your app development journey a seamless and rewarding experience.</p>
</div>

    </div>
  )
}

// color: #4E5765;

// text-align: center;
// font-family: Open Sans;
// font-size: 24px;
// font-style: normal;
// font-weight: 400;
// line-height: normal;
export default StarTeam