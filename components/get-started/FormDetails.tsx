import React from 'react'
import { millik,mukta, openSans } from "../../app/font";
import Link from 'next/link'
function FormDetails() {
  return (
    <div className={`max-w-[552px] shadow-md border-[1px] rounded-[20px] p-[20px] mt-[30px] m-auto`}>
<div className={``}>
  <h1 className={`text-[#3B4350] text-[36px] ${mukta.className} font-[500]`}>Booking Information</h1>
  <p className={`text-[#3B4350] text-[14px] ${mukta.className} font-[500]`}>Get in touch with a skilled development expert today!</p>
    </div>


<div className='max-w-[480px] mt-[24px]'>
<form action="" className='flex flex-col gap-[24px] '>
  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Company Name</label>
    <input type="text" placeholder='Type Here' className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  
  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Website URL</label>
    <input type="text" placeholder='Type Domain Name Here' className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Company Name</label>
    <input type="text" placeholder='Type Here' className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Company Name</label>
    <input type="text" placeholder='Type Here' className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Employee Count</label>
    <input type="text" placeholder='Type Here' className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Project Title</label>
    <input type="text" placeholder='Type Here' className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Project Budget</label>
    <input type="text" placeholder='Type Here' className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Project Description</label>
    <input type="text" placeholder='Tell us a bit about the app you are interested in building...' className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

<Link href='/'>
  <h1>Back</h1>
</Link>
<button type="submit">Next</button>

</form>
</div>

    </div>
  )
}


export default FormDetails
