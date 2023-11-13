/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { openSans,millik,mukta} from "@/app/font";
function BusinessCard() {
  return (
    <div className={`max-w-[1280px] mt-[40px] flex flex-col gap-[100px]`}>
      <div className={`max-w-[1280px] `}>
        <div
          className={`max-w-[998px] bg-[#0A2656] rounded-[15px] p-[24px]  m-auto`}
        >
          <div
            className={` max-w-[950px]  flex flex-col gap-[24px] m-auto md:flex-row`}
          >
            <figure className="m-auto max-w-[352px]">
              <Image
                src="/images/b1.svg"
                alt="ugu"
                className="m-auto"
                width={752}
                height={478}
              />
            </figure>

            <div className={`max-w-[574px] mx-auto`}>
                <h1 className={`${millik.className} text-[36px] font-[400] leading-[38.41px] text-[#FFFFFF]`}>Graphics Designer</h1>
              <p
                className={`text-[18px] md:text-[24px] my-[16px] text-[#FFFFFF] m-auto font-[400] ${openSans.className} `}
              >
                Brief casual, informal description of role. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Ut ullamcorper libero ut
                lorem semper egestas. Aliquam ut vehicula felis. Sed et
                efficitur magna. <br /> <br /> <span className='pt-[80px]'>Think this is you? Apply now!</span>
              </p>

              <button className={`text-[16px] ${mukta.className} text-[#FFF] border rounded-[40px] py-[8px] px-[16px] border-[#FFF]`}>Apply for this role</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`max-w-[1280px] `}>
        <div
          className={`max-w-[998px] bg-[#EDF4FF] rounded-[15px] p-[24px]  m-auto`}
        >
          <div
            className={` max-w-[950px]  flex flex-col gap-[24px] m-auto md:flex-row`}
          >
            <figure className="m-auto max-w-[352px]">
              <Image
                src="/images/b1.svg"
                alt="ugu"
                className="m-auto"
                width={752}
                height={478}
              />
            </figure>

            <div className={`max-w-[574px] mx-auto`}>
                <h1 className={`${millik.className} text-[36px] font-[400] leading-[38.41px] text-[#0A2656]`}>Senior Data Analyst</h1>
              <p
                className={`text-[18px] md:text-[24px] my-[16px] text-[#0A2656] m-auto font-[400] ${openSans.className} `}
              >
                Brief casual, informal description of role. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Ut ullamcorper libero ut
                lorem semper egestas. Aliquam ut vehicula felis. Sed et
                efficitur magna. <br /> <br /> <span className='pt-[80px]'>Think this is you? Apply now!</span>
              </p>

              <button className={`text-[16px] ${mukta.className} text-[#0A2656] border rounded-[40px] py-[8px] px-[16px] border-[#0A2656]`}>Apply for this role</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`max-w-[1280px] `}>
        <div
          className={`max-w-[998px] bg-[#0A2656] rounded-[15px] p-[24px]  m-auto`}
        >
          <div
            className={` max-w-[950px]  flex flex-col gap-[24px] m-auto md:flex-row`}
          >
            <figure className="m-auto max-w-[352px]">
              <Image
                src="/images/b1.svg"
                alt="ugu"
                className="m-auto"
                width={752}
                height={478}
              />
            </figure>

            <div className={`max-w-[574px] mx-auto`}>
                <h1 className={`${millik.className} text-[36px] font-[400] leading-[38.41px] text-[#FFFFFF]`}>Graphics Designer</h1>
              <p
                className={`text-[18px] md:text-[24px] my-[16px] text-[#FFFFFF] m-auto font-[400] ${openSans.className} `}
              >
                Brief casual, informal description of role. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Ut ullamcorper libero ut
                lorem semper egestas. Aliquam ut vehicula felis. Sed et
                efficitur magna. <br /> <br /> <span className='pt-[80px]'>Think this is you? Apply now!</span>
              </p>

              <button className={`text-[16px] ${mukta.className} text-[#FFF] border rounded-[40px] py-[8px] px-[16px] border-[#FFF]`}>Apply for this role</button>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default BusinessCard;
