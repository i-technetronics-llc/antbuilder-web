import React from "react";
import Image from "next/image";
import { millik, mukta, openSans } from "../../../app/font";
import Button from "@/components/common/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1
        className={`max-w-[856px] text-[40px] font-[400] ${millik.className} text-[#11223F]`}
      >
        Account Executive/Business development Executive
      </h1>
      <div className={`flex justify-between items-center max-w-[387px] mt-[43px] mb-[61px] `}>
        <button
          className={`bg-[#D0E1FF] ${openSans.className} text-[16px] font-[600] rounded-[8px] py-[4px] px-[4px] text-[#11223F]`}
        >
          100% Remote
        </button>
        <button
          className={`bg-[#D0E1FF] ${openSans.className} text-[16px]  font-[600] rounded-[8px] py-[4px] px-[8px] text-[#11223F]`}
        >
          Part Time
        </button>
        <button
          className={`bg-[#D0E1FF] ${openSans.className} text-[16px] font-[600] rounded-[8px] py-[4px] px-[8px] text-[#11223F]`}
        >
          USA Resident Only
        </button>
      </div>
    </div>
  );
};

export default Header;
