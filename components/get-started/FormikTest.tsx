"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { millik, mukta, openSans } from "../../app/font";
import Link from 'next/link'
import { ArrowLeft} from 'iconsax-react'
import Success from './success'

const schemaPersonalDetails = Yup.object().shape({
  FirstName: Yup.string().required("First Name is required"),
  LastName: Yup.string().required("Last Name is required"),
  Email: Yup.string().email("Invalid Email").required("Email is required"),
  Phone: Yup.string().required("Phone is required"),
});

const schemaBusinessDetails = Yup.object().shape({
  CompanyName: Yup.string(),
  WebsiteURL: Yup.string()
    // .required("Website URL is required")
    .test("custom-url-validation", "Invalid URL", (value) => {
      if (!value) return true;

      const urlRegex =
        /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9_-]+)*\/?$/;
      return urlRegex.test(value);
    }),
  Industry: Yup.string(),
  CountryRegion: Yup.string(),
  EmployeeCount: Yup.number()
    .integer("Employee Count must be an integer")
    .positive("Employee Count must be a positive number"),
    // .required("Employee Count is required"),
  ProjectTitle: Yup.string().required("Project Title is required"),
  ProjectBudget: Yup.number()
    .positive("Project Budget must be a positive number")
    .required("Project Budget is required"),
  ProjectDescription: Yup.string().required("Project Description is required"),
});



function FormDetails() {
  const [step, setStep] = React.useState(1);
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const isLastStep = step === 2;

  const schema = step === 1 ? schemaPersonalDetails : schemaBusinessDetails;

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
      CompanyName: "",
      WebsiteURL: "",
      Industry: "",
      CountryRegion: "",
      EmployeeCount: "",
      ProjectTitle: "",
      ProjectBudget: "",
      ProjectDescription: "",
    },

    validationSchema: schema,
  onSubmit: async (values, { setSubmitting }) => {
    if (isLastStep) {
      try {
  
        const response = await fetch('http://localhost:3001/api/v1/bookings/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
  
        if (response.ok) {
          console.log('Form submitted successfully',values);
          setFormSubmitted(true);
          formik.resetForm();
        } else {
          console.error('Form submission failed:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred during form submission:', error);
      } finally {
        setSubmitting(false);
      }
    } else {
      nextStep();
    }
  },
  
    
   });

  return (

    <div>
 {formSubmitted ? (
  <Success />
) : (



    <div
      className={`max-w-[552px] shadow-md border-[1px] rounded-[20px] p-[20px] mt-[30px] m-auto`}
    >
      <div className={``}>
        <h1
          className={`text-[#3B4350] text-[36px] ${mukta.className} font-[500]`}
        >
          Booking Information
        </h1>
        <p
          className={`text-[#3B4350] text-[14px] ${mukta.className} font-[500]`}
        >
          Get in touch with a skilled development expert today!
        </p>
      </div>

      <div className="max-w-[480px] m-auto mt-[24px]">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-[24px] "
        >
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="FirstName"
                  className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  name="FirstName"
                  value={formik.values.FirstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${
                    mukta.className
                  } text-[14px] ${
                    formik.errors.FirstName &&
                    formik.touched.FirstName &&
                    "border-red-500"
                  }`}
                />
                {formik.errors.FirstName && formik.touched.FirstName && (
                  <span className="text-red-500">
                    {formik.errors.FirstName}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="LastName"
                  className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Type Last Name Here"
                  name="LastName"
                  value={formik.values.LastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${
                    mukta.className
                  } text-[14px] ${
                    formik.errors.LastName &&
                    formik.touched.LastName &&
                    "border-red-500"
                  }`}
                />
                {formik.errors.LastName && formik.touched.LastName && (
                  <span className="text-red-500">{formik.errors.LastName}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="Email"
                  className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Type Email Here"
                  name="Email"
                  value={formik.values.Email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${
                    mukta.className
                  } text-[14px] ${
                    formik.errors.Email &&
                    formik.touched.Email &&
                    "border-red-500"
                  }`}
                />
                {formik.errors.Email && formik.touched.Email && (
                  <span className="text-red-500">{formik.errors.Email}</span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Email"
                  className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Type  Here"
                  name="Phone"
                  value={formik.values.Phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${
                    mukta.className
                  } text-[14px] ${
                    formik.errors.Phone &&
                    formik.touched.Phone &&
                    "border-red-500"
                  }`}
                />
                {formik.errors.Phone && formik.touched.Phone && (
                  <span className="text-red-500">{formik.errors.Phone}</span>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="FirstName"
                  className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Type Company name here"
                  name="CompanyName"
                  value={formik.values.CompanyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${
                    mukta.className
                  } text-[14px] ${
                    formik.errors.CompanyName &&
                    formik.touched.CompanyName &&
                    "border-red-500"
                  }`}
                />
                {formik.errors.CompanyName && formik.touched.CompanyName && (
                  <span className="text-red-500">
                    {formik.errors.CompanyName}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="LastName"
                  className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}
                >
                  Website URL
                </label>
                <input
                  type="text"
                  placeholder="Type Website URL here"
                  name="WebsiteURL"
                  value={formik.values.WebsiteURL}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${
                    mukta.className
                  } text-[14px] ${
                    formik.errors.WebsiteURL &&
                    formik.touched.WebsiteURL &&
                    "border-red-500"
                  }`}
                />
                {formik.errors.WebsiteURL && formik.touched.WebsiteURL && (
                  <span className="text-red-500">
                    {formik.errors.WebsiteURL}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="Email"
                  className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}
                >
                  Employee Count
                </label>
                <input
                  type="number"
                  placeholder="Type Employee Count Here"
                  name="EmployeeCount"
                  value={formik.values.EmployeeCount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${
                    mukta.className
                  } text-[14px] ${
                    formik.errors.EmployeeCount &&
                    formik.touched.EmployeeCount &&
                    "border-red-500"
                  }`}
                />
                {formik.errors.EmployeeCount &&
                  formik.touched.EmployeeCount && (
                    <span className="text-red-500">
                      {formik.errors.EmployeeCount}
                    </span>
                  )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Email"
                  className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}
                >
                  Project Title
                </label>
                <input
                  type="text"
                  placeholder="Type Project Title Here"
                  name="ProjectTitle"
                  value={formik.values.ProjectTitle}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${
                    mukta.className
                  } text-[14px] ${
                    formik.errors.ProjectTitle &&
                    formik.touched.ProjectTitle &&
                    "border-red-500"
                  }`}
                />
                {formik.errors.ProjectTitle && formik.touched.ProjectTitle && (
                  <span className="text-red-500">
                    {formik.errors.ProjectTitle}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Email"
                  className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}
                >
                  Project Budget
                </label>
                <input
                  type="number"
                  placeholder="Type Project Budget Here"
                  name="ProjectBudget"
                  value={formik.values.ProjectBudget}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px] mt-[10px] ${
                    mukta.className
                  } text-[14px] ${
                    formik.errors.ProjectBudget &&
                    formik.touched.ProjectBudget &&
                    "border-red-500"
                  }`}
                />
                {formik.errors.ProjectBudget &&
                  formik.touched.ProjectBudget && (
                    <span className="text-red-500">
                      {formik.errors.ProjectBudget}
                    </span>
                  )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className={`text-[#6C7480] text-[12px] ${openSans.className} font-[600]`}
                >
                  Project Description
                </label>
                <textarea
                  placeholder="Tell us a bit about the app you are interested in building..."
                  value={formik.values.ProjectDescription}
                  name="ProjectDescription"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                
                  // onChange={handleChangeText}
                    className={`border-[1px] placeholder:text-[16px] placeholder:font-[400] py-[16px] resize-y px-[8px] border-[#E5E5E5] bg-[#F8F8F8] rounded-[5px]  mt-[10px] ${mukta.className} text-[14px]`}
                ></textarea>
                {formik.errors.ProjectDescription && formik.touched.ProjectDescription && (
                  <span className="text-red-500">
                    {formik.errors.ProjectDescription}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-end items-center gap-[16px]">
            {step === 1 && (
              <div className="flex justify-end items-center gap-[16px]">
                <Link href='/' className='items-center gap-[1px] flex'><ArrowLeft size={16} />
  <h1 className={`text-[#3B4350] font-[700] text-[18px] inline ${mukta.className}`}>
     Back </h1>
</Link>
            <button
            type="submit"
            className={`px-[20px] py-[16px] rounded-[40px] w-[114px] text-[#FFF] bg-[#D0E1FF] ${mukta.className} text-[16px] font-[700]`}
          >
            Next
          </button>
          </div>
            )}
            {step === 2 && (
              <div className="flex justify-end items-center gap-[16px]">
              <button
            type="submit"
            onClick={prevStep}
            className='items-center gap-[1px] flex'
            // className={`px-[20px] py-[16px] rounded-[40px] w-[114px] text-[#FFF] bg-[#D0E1FF] ${mukta.className} text-[16px] font-[700]`}
          >
<ArrowLeft size={16} />
  <h1 className={`text-[#3B4350] font-[700] text-[18px] inline ${mukta.className}`}>
     Back </h1>
</button>
              <button
              type="submit"
              className={`px-[20px] py-[16px] rounded-[40px] w-[114px] text-[#FFF] bg-[#D0E1FF] ${mukta.className} text-[16px] font-[700]`}
            >
              Next
            </button>
              </div>
            )}
            {/* <button
              type="submit"
              className={`px-[20px] py-[16px] rounded-[40px] w-[114px] text-[#FFF] bg-[#D0E1FF] ${mukta.className} text-[16px] font-[700]`}
            >
              {isLastStep ? "Submit" : "Next"}
            </button> */}
          </div>
        </form>
      </div>
    </div>
    )}
    </div>
  );
}

export default FormDetails;
