"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'iconsax-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { millik,mukta, openSans } from "../../app/font";

const schema = Yup.object().shape({
  FirstName: Yup.string().required('First Name is required'),
  LastName: Yup.string().required('Last Name is required'),
  Email: Yup.string().email('Invalid Email').required('Email is required'),
});

function FormDetails() {
  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      Email: '',
    },
    validationSchema: schema,
    onSubmit: async (values) => {

      console.log(values);
      try {
        const response = await fetch('http://localhost:3001/api/v1/bookings/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
         
          console.log('success');
          formik.setValues({
            FirstName: '',
            LastName: '',
            Email: '',
          });
        } else {
          console.log('error');
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className={`max-w-[552px] shadow-md border-[1px] rounded-[20px] p-[20px] mt-[30px] m-auto`}>
      <div className={``}>
        <h1 className={`text-[#3B4350] text-[36px] ${mukta.className} font-[500]`}>Booking Information</h1>
        <p className={`text-[#3B4350] text-[14px] ${mukta.className} font-[500]`}>Get in touch with a skilled development expert today!</p>
      </div>

      <div className='max-w-[480px] m-auto mt-[24px]'>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[24px] '>
          <div className='flex flex-col'>
            <label htmlFor='FirstName' className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>First Name</label>
            <input
              type='text'
              placeholder='Type Here'
              name='FirstName'
              value={formik.values.FirstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${mukta.className} text-[14px] ${
                formik.errors.FirstName && formik.touched.FirstName && 'border-red-500'
              }`}
            />
            {formik.errors.FirstName && formik.touched.FirstName && (
              <span className='text-red-500'>{formik.errors.FirstName}</span>
            )}
          </div>

          <div className='flex flex-col'>
            <label htmlFor='LastName' className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Last Name</label>
            <input
              type='text'
              placeholder='Type Last Name Here'
              name='LastName'
              value={formik.values.LastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${mukta.className} text-[14px] ${
                formik.errors.LastName && formik.touched.LastName && 'border-red-500'
              }`}
            />
            {formik.errors.LastName && formik.touched.LastName && (
              <span className='text-red-500'>{formik.errors.LastName}</span>
            )}
          </div>

          <div className='flex flex-col'>
            <label htmlFor='Email' className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}>Email</label>
            <input
              type='text'
              placeholder='Type Email Here'
              name='Email'
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${mukta.className} text-[14px] ${
                formik.errors.Email && formik.touched.Email && 'border-red-500'
              }`}
            />
            {formik.errors.Email && formik.touched.Email && (
              <span className='text-red-500'>{formik.errors.Email}</span>
            )}
          </div>

          <div className='flex justify-end items-center gap-[16px]'>
            <button type='submit' className={`px-[20px] py-[16px] rounded-[40px] w-[114px] text-[#FFF] bg-[#D0E1FF] ${mukta.className} text-[16px] font-[700]`}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormDetails;
