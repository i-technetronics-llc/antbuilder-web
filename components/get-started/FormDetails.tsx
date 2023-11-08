"use client"
import React from 'react'
import { millik,mukta, openSans } from "../../app/font";
import Link from 'next/link'
import { ArrowLeft} from 'iconsax-react'
function FormDetails() {
  
  const [formData , setFormData] = React.useState({
   FirstName: '',	
    LastName: '',
    Email: '',
    Phone: '',
    CompanyName: '',
    WebsiteURL: '',
    Industry: '',
    CountryRegion: '',
    EmployeeCount: '',
    ProjectTitle: '',
    ProjectBudget: '',
    ProjectDescription: '',
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)	
    
    try{
      const response = await fetch('http://localhost:3001/api/v1/bookings/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      })
      if(response.ok){
        console.log('success')
      }
      else{
        console.log('error')
      }
    } catch (error) {
      console.log(error,'error')
    }
  }



  return (
    <div className={`max-w-[552px] shadow-md border-[1px] rounded-[20px] p-[20px] mt-[30px] m-auto`}>
<div className={``}>
  <h1 className={`text-[#3B4350] text-[36px] ${mukta.className} font-[500]`}>Booking Information</h1>
  <p className={`text-[#3B4350] text-[14px] ${mukta.className} font-[500]`}>Get in touch with a skilled development expert today!</p>
    </div>


<div className='max-w-[480px] m-auto mt-[24px]'>
<form onSubmit={handleFormSubmit}  className='flex flex-col gap-[24px] '>
  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}> Name</label>
    <input type="text" placeholder='Type Here' value={formData.CompanyName} name='CompanyName' onChange={handleChange} className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  
  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Website URL</label>
    <input type="text" placeholder='Type Domain Name Here'  value={formData.WebsiteURL} name='WebsiteURL' onChange={handleChange} className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Industry</label>
    <select name="" id="" className="{`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] pr- border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`}">
      <option value="">Select Industry type</option>
      <option value="">Industry1</option>
      <option value="">Industry2</option>
      <option value="">Industry3</option>
      <option value="">Industry4</option>
      <option value="">Industry5</option>
    </select>
    {/* <input type="text" placeholder='Type Here' className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} /> */}
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Country Region</label>
    <select name="" id="" className="{`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] pr- border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`}">
      <option value="">Select Country Region</option>
      <option value="">Country1</option>
      <option value="">Country2</option>
      <option value="">Country3</option>
      <option value="">Country4</option>
      <option value="">Country5</option>
    </select>
    {/* <input type="text" placeholder='Type Here' className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} /> */}
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Employee Count</label>
    <input type="number" placeholder='Type Here' value={formData.EmployeeCount} name='EmployeeCount' onChange={handleChange} className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Project Title</label>
    <input type="text" placeholder='Type Here' value={formData.ProjectTitle} name='ProjectTitle' onChange={handleChange} className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Project Budget</label>
    <input type="number" placeholder='Type Here' value={formData.ProjectBudget} name='ProjectBudget' onChange={handleChange} className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} />
  </div>

  <div className='flex flex-col'>
    <label htmlFor="name" className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Project Description</label>
    <textarea  placeholder='Tell us a bit about the app you are interested in building...' value={formData.ProjectDescription} name='ProjectDescription' onChange={handleChangeText} className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] resize-y px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`}></textarea>
    {/* <input type="text" placeholder='Tell us a bit about the app you are interested in building...' className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`} /> */}
  </div>

<div className='flex justify-end items-center gap-[16px]' >
<Link href='/' className='items-center gap-[1px] flex'><ArrowLeft size={16} />
  <h1 className={`text-[#3B4350] font-[700] text-[18px] inline ${mukta.className}`}>
     Back </h1>
</Link>
<button type="submit" className={`px-[20px] py-[16px] rounded-[40px] w-[114px] text-[#FFF] bg-[#D0E1FF] ${mukta.className} text-[16px] font-[700]`}>Next</button>
</div>
</form>
</div>

    </div>
  )
}



export default FormDetails
