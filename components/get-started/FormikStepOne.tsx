// "use client";
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { millik, mukta, openSans } from '../../app/font';

// const schemaPersonalDetails = Yup.object().shape({
//   FirstName: Yup.string().required('First Name is required'),
//   LastName: Yup.string().required('Last Name is required'),
//   Email: Yup.string().email('Invalid Email').required('Email is required'),
// });

// const schemaBusinessDetails = Yup.object().shape({
//   Phone: Yup.string().required('Phone is required'),
//   CompanyName: Yup.string().required('Company Name is required'),
//   WebsiteURL: Yup.string().required('Website URL is required'),
//   Industry: Yup.string().required('Industry is required'),
//   CountryRegion: Yup.string().required('Country Region is required'),
//   EmployeeCount: Yup.number().integer('Employee Count must be an integer'),
//   ProjectTitle: Yup.string().required('Project Title is required'),
//   ProjectBudget: Yup.number().positive('Project Budget must be a positive number').required('Project Budget is required'),
//   ProjectDescription: Yup.string().required('Project Description is required')
// });

// function FormDetails() {
//   const [step, setStep] = React.useState(1);

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const isLastStep = step === 2;

//   const schema =
//     step === 1 ? schemaPersonalDetails : schemaBusinessDetails;


//   const formik = useFormik({
//     initialValues: {
//       FirstName: '',
//       LastName: '',
//       Email: '',
//       Phone: '',
//       CompanyName: '',
//       WebsiteURL: '',
//       Industry: '',
//       CountryRegion: '',
//       EmployeeCount: '',
//       ProjectTitle: '',
//       ProjectBudget: '',
//       ProjectDescription: ''
//     },
   
//     onSubmit: (values, { setSubmitting }) => {
//       // Handle form submission based on the step
//       if (isLastStep) {
//         console.log('All form data:', values);
//         setSubmitting(false); // Reset form submission state
//       } else {
//         nextStep();
//       }
//     },
//   });

//   return (
//     <div className={max-w-[552px] shadow-md border-[1px] rounded-[20px] p-[20px] mt-[30px] m-auto}>
//       <div className={``}>
//         <h1 className={text-[#3B4350] text-[36px] ${mukta.className} font-[500]}>
//           Booking Information
//         </h1>
//         <p className={text-[#3B4350] text-[14px] ${mukta.className} font-[500]}>
//           Get in touch with a skilled development expert today!
//         </p>
//       </div>

//       <div className='max-w-[480px] m-auto mt-[24px]'>
//         <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[24px] '>
//           {step === 1 && (
//             <div className='flex flex-col'>
//               <label htmlFor='FirstName' className={text-[#6C7480] text-[12px] ${openSans.className} font-[600]}>
//                 First Name
//               </label>
//               <input
//                 type='text'
//                 placeholder='Type Here'
//                 name='FirstName'
//                 value={formik.values.FirstName}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${mukta.className} text-[14px] ${
//                   formik.errors.FirstName && formik.touched.FirstName && 'border-red-500'
//                 }`}
//               />
//               {formik.errors.FirstName && formik.touched.FirstName && (
//                 <span className='text-red-500'>{formik.errors.FirstName}</span>
//               )}

//               <div className='flex flex-col'>
//                 <label htmlFor='LastName' className={text-[#6C7480] text-[12px] ${openSans.className} font-[600]}>
//                   Last Name
//                 </label>
//                 <input
//                   type='text'
//                   placeholder='Type Last Name Here'
//                   name='LastName'
//                   value={formik.values.LastName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${mukta.className} text-[14px] ${
//                     formik.errors.LastName && formik.touched.LastName && 'border-red-500'
//                   }`}
//                 />
//                 {formik.errors.LastName && formik.touched.LastName && (
//                   <span className='text-red-500'>{formik.errors.LastName}</span>
//                 )}

//                 <div className='flex flex-col'>
//                   <label htmlFor='Email' className={text-[#6C7480] text-[12px] ${openSans.className} font-[600]}>
//                     Email
//                   </label>
//                   <input
//                     type='text'
//                     placeholder='Type Email Here'
//                     name='Email'
//                     value={formik.values.Email}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${mukta.className} text-[14px] ${
//                       formik.errors.Email && formik.touched.Email && 'border-red-500'
//                     }`}
//                   />
//                   {formik.errors.Email && formik.touched.Email && (
//                     <span className='text-red-500'>{formik.errors.Email}</span>
//                   )}
//                 </div>
//                 <div className='flex flex-col'>
//                   <label htmlFor='Email' className={text-[#6C7480] text-[12px] ${openSans.className} font-[600]}>
//                     Phone Number
//                   </label>
//                   <input
//                     type='text'
//                     placeholder='Type z Here'
//                     name='Phone'
//                     value={formik.values.Phone}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${mukta.className} text-[14px] ${
//                       formik.errors.Email && formik.touched.Email && 'border-red-500'
//                     }`}
//                   />
//                   {formik.errors.Email && formik.touched.Email && (
//                     <span className='text-red-500'>{formik.errors.Email}</span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           {step === 2 && (
//               <div className='flex flex-col'>
//               <label htmlFor='FirstName' className={text-[#6C7480] text-[12px] ${openSans.className} font-[600]}>
//                 First Name
//               </label>
//               <input
//                 type='text'
//                 placeholder='Type Here'
//                 name='FirstName'
//                 value={formik.values.FirstName}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${mukta.className} text-[14px] ${
//                   formik.errors.FirstName && formik.touched.FirstName && 'border-red-500'
//                 }`}
//               />
//               {formik.errors.FirstName && formik.touched.FirstName && (
//                 <span className='text-red-500'>{formik.errors.FirstName}</span>
//               )}

//               <div className='flex flex-col'>
//                 <label htmlFor='LastName' className={text-[#6C7480] text-[12px] ${openSans.className} font-[600]}>
//                   Last Name
//                 </label>
//                 <input
//                   type='text'
//                   placeholder='Type Last Name Here'
//                   name='LastName'
//                   value={formik.values.LastName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${mukta.className} text-[14px] ${
//                     formik.errors.LastName && formik.touched.LastName && 'border-red-500'
//                   }`}
//                 />
//                 {formik.errors.LastName && formik.touched.LastName && (
//                   <span className='text-red-500'>{formik.errors.LastName}</span>
//                 )}

//                 <div className='flex flex-col'>
//                   <label htmlFor='Email' className={text-[#6C7480] text-[12px] ${openSans.className} font-[600]}>
//                     Email
//                   </label>
//                   <input
//                     type='text'
//                     placeholder='Type Email Here'
//                     name='Email'
//                     value={formik.values.Email}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${mukta.className} text-[14px] ${
//                       formik.errors.Email && formik.touched.Email && 'border-red-500'
//                     }`}
//                   />
//                   {formik.errors.Email && formik.touched.Email && (
//                     <span className='text-red-500'>{formik.errors.Email}</span>
//                   )}
//                 </div>
//                 <div className='flex flex-col'>
//                   <label htmlFor='Email' className={text-[#6C7480] text-[12px] ${openSans.className} font-[600]}>
//                     Email
//                   </label>
//                   <input
//                     type='text'
//                     placeholder='Type Email Here'
//                     name='Email'
//                     value={formik.values.Email}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${mukta.className} text-[14px] ${
//                       formik.errors.Email && formik.touched.Email && 'border-red-500'
//                     }`}
//                   />
//                   {formik.errors.Email && formik.touched.Email && (
//                     <span className='text-red-500'>{formik.errors.Email}</span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className='flex justify-end items-center gap-[16px]'>
//             {step === 1 && (
//               <button
//                 type='button'
//                 onClick={nextStep}
//                 className={px-[20px] py-[16px] rounded-[40px] w-[114px] text-[#FFF] bg-[#D0E1FF] ${mukta.className} text-[16px] font-[700]}
//               >
//                 Next
//               </button>
//             )}
//             {step === 2 && (
//               <button
//                 type='button'
//                 onClick={prevStep}
//                 className={px-[20px] py-[16px] rounded-[40px] w-[114px] text-[#FFF] bg-[#D0E1FF] ${mukta.className} text-[16px] font-[700]}
//               >
//                 Previous
//               </button>
//             )}
//             <button
//               type='submit'
//               className={px-[20px] py-[16px] rounded-[40px] w-[114px] text-[#FFF] bg-[#D0E1FF] ${mukta.className} text-[16px] font-[700]}
//             >
//               {isLastStep ? 'Submit' : 'Next'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default FormDetails;