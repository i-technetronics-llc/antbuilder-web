import React from "react";
import Image from "next/image";
import { millik, mukta, openSans } from "../../app/font";
import Button from "@/components/common/Button";
import Link from "next/link";
interface CardsProps {
    title: string;
    description: string;
    apply: string;
    tags: string[];
    link: string;
  }
const cardData = [
  {
    title: "Account Executive ",
    description: " As an Account Executive at Antbuilder, you play a pivotal role in driving our business growth and revenue. Your main responsibility is to identify potential clients and demonstrate how our innovative development approach, products, and services can help them bring their unique app ideas to life or enhance their existing applications to meet modern trends and technology.",
    apply: "Think this is you? Apply Now!",
    tags: ["100% Remote", "Full Time","Sales"],
    link: "/careers/account-executive",

  },
  {
    title: "Account Executive ",
    description: " As an Account Executive at Antbuilder, you play a pivotal role in driving our business growth and revenue. Your main responsibility is to identify potential clients and demonstrate how our innovative development approach, products, and services can help them bring their unique app ideas to life or enhance their existing applications to meet modern trends and technology.",
    apply: "Think this is you? Apply Now!",
    tags: ["100% Remote", "Full Time","Sales"],
    link: "/careers/account-executive",

  },
  {
    title: "Account Executive ",
    description: " As an Account Executive at Antbuilder, you play a pivotal role in driving our business growth and revenue. Your main responsibility is to identify potential clients and demonstrate how our innovative development approach, products, and services can help them bring their unique app ideas to life or enhance their existing applications to meet modern trends and technology.",
    apply: "Think this is you? Apply Now!",
    tags: ["100% Remote", "Full Time","Sales"],
    link: "/careers/account-executive",

  },
  {
    title: "Account Executive ",
    description: " As an Account Executive at Antbuilder, you play a pivotal role in driving our business growth and revenue. Your main responsibility is to identify potential clients and demonstrate how our innovative development approach, products, and services can help them bring their unique app ideas to life or enhance their existing applications to meet modern trends and technology.",
    apply: "Think this is you? Apply Now!",
    tags: ["100% Remote", "Full Time","Sales"],
    link: "/careers/account-executive",
  }
];

const Cards: React.FC<CardsProps> = ({ title, description, apply, tags, link }) => (
  <div
    className={`max-w-[917px] min-h-[249px] bg-[#FFFFFF] p-[32px] rounded-[16px]`}
  >
    <div>
      <h1
        className={`${millik.className} text-[32px] text-[#3B4350] font-[400]`}
      >
        {title}
      </h1>
      <p
        className={`${openSans.className}  text-[#3B4350]  mt-[24px]  text-[16px] font-[400]`}
      >
        {description}
      </p>
      <br />
      {/* <br /> */}
      <p
        className={`${openSans.className}  text-[#3B4350]   text-[16px] font-[400]`}
      >
        {apply}
      </p>

      <div className='flex items-center justify-between mt-[24px]'>
        <Link href={link}>
          <button
            className={`text-[16px] ${mukta.className} text-[#0A2656] border rounded-[40px] py-[8px] px-[16px] border-[#0A2656] hover:opacity-80 hover:scale-95 transition `}
          >
            Apply for this role
          </button>
        </Link>

        <div className={`flex justify-end items-center gap-[16px]`}>
          {tags.map((tag) => (
            <button key={tag} className={`bg-[#D0E1FF] ${openSans.className} text-[16px] font-[600] rounded-[8px] py-[4px] px-[8px] text-[#11223F]`}>{tag}</button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

function CareerCards() {
  return (
    <div
      className={`max-w-[998px] p-[40px] bg-[#0A2656] m-auto rounded-[16px] flex flex-col gap-[40px]`}
    >
      {cardData.map((card) => (
        <Cards key={card.title}  {...card}/>
      ))}
    </div>
  );
}

export default CareerCards;
