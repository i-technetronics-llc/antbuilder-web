/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { millik, mukta, openSans } from "../../../app/font";
import Button from "@/components/common/Button";
import Link from "next/link";

function Body() {
  return (
    <div>
      <div>
        <h1
          className={`${mukta.className} text-[#3B4350] text-[24px] font-[600] mb-[13px]`}
        >
          About Role{" "}
        </h1>
        <p
          className={`${openSans.className} text-[#3B4350] text-[20px] leading-[33px] font-[400] mb-[13px]`}
        >
          As an Account Executive at Antbuilder, you play a pivotal role in
          driving our business growth and revenue. Your main responsibility is
          to identify potential clients and demonstrate how our innovative
          development approach, products and services can help them bring their
          unique app ideas to life or enhance their existing applications to
          meet mordern trends and technology.
        </p>
      </div>
      <div className="mt-[42px]">
        <h1
          className={`${mukta.className} text-[#3B4350] text-[24px] font-[600] mb-[13px]`}
        >
          Key Responsibilities
        </h1>
        <div className="mb-[24px]">
          <p
            className={`${openSans.className} text-[#3B4350] underline text-[20px] leading-[33px] mb-[13px] font-[400] `}
          >
            Outreach & Prospecting
          </p>
          <ul
            className={`${openSans.className} flex flex-col gap-5 max-w-[1120px] m-auto text-[#3B4350] list-disc text-[20px] leading-[33px] font-[400] mb-[13px]`}
          >
            <li>
              Engage in personalized outreach efforts through various channels
              e.g email, phone calls, LinkedIn and X, tailored to each
              prospect’s specific needs.
            </li>
            <li>
              Convert leads into successful deals or upsell existing clients to
              additional phases of development.
            </li>
            <li>
              Regularly follow up with prospects, emphasizing the value of our
              services and keeping them engaged until they are ready for a sales
              call.
            </li>
            <li>
              Provide insights to improve the existing sales workflow and
              support the Development team in achieving success.
            </li>
          </ul>
        </div>
        <div className="mb-[24px]">
          <p
            className={`${openSans.className} text-[#3B4350] underline mb-[13px]  text-[20px] leading-[33px] font-[400] `}
          >
            Lead Generation
          </p>
          <ul
            className={`${openSans.className} flex flex-col gap-5 max-w-[1120px] m-auto text-[#3B4350] list-disc text-[20px] leading-[33px] font-[400] mb-[13px]`}
          >
            <li>
            Use various tools and software to identify and scrape potential leads.
            </li>
            <li>
            Organize and maintain lead data in the CRM, ensuring accuracy and eliminating duplicates.
            </li>
            <li>
            Qualify leads based on their interest, needs, budget, and decision-making capacity.
            </li>
            <li>
            Collaborate with the development team to organize sales calls with qualified leads.
            </li>
          </ul>
        </div>
        <div className="mb-[24px]">
          <p
            className={`${openSans.className} text-[#3B4350] mb-[13px]  underline text-[20px] leading-[33px] font-[400] `}
          >
            Team Collaborations
          </p>
          <ul
            className={`${openSans.className} flex flex-col gap-5 max-w-[1120px] m-auto text-[#3B4350] list-disc text-[20px] leading-[33px] font-[400] mb-[13px]`}
          >
            <li>
            Provide market feedback to our marketing and product development teams to continuously enhance our offerings and create compelling marketing messages.
            </li>
            <li>
            Share valuable insights about each lead's specific needs and interests.Share valuable insights about each lead's specific needs and interests.
            </li>
            <li>
            Work closely with the development team to ensure smooth handover of qualified leads and deals.
            </li>

          </ul>
        </div>
      </div>

      <div className="mt-[51px]">
        <h1
          className={`${mukta.className} text-[#3B4350] text-[24px] font-[600] mb-[13px]`}
        >
          Expectations
        </h1>
        <ul
          className={`${openSans.className} flex flex-col gap-5 max-w-[1120px] m-auto text-[#3B4350] list-disc text-[20px] leading-[33px] font-[400] mb-[13px]`}
        >
          <li>Onboard a minimum of 5 clients per month.</li>
          <li>
            Generate a steady stream of qualified leads that convert into
            successful sales.
          </li>
          <li>Maintain accurate and up-to-date lead data in the CRM.</li>
          <li>
            Consistently follow up with prospects, leading to an increase in
            conversion rates.
          </li>
        </ul>
      </div>
      <div className="mt-[42px]">
        <h1
          className={`${mukta.className} text-[#3B4350] text-[24px] font-[600] mb-[13px]`}
        >
          Skills and Qualifications
        </h1>
        <ul
          className={`${openSans.className} flex flex-col gap-5 max-w-[1120px] m-auto text-[#3B4350] list-disc text-[20px] leading-[33px] font-[400] mb-[13px]`}
        >
          <li>
            We value proven experience in sales development or a similar role.
          </li>
          <li>
            Excellent communication, interpersonal, and organizational skills
            are essential.
          </li>
          <li>
            Proficiency in using lead scraping tools, such as Apollo and
            LinkedIn Sales Navigator, is highly desirable.
          </li>
          <li>
            A strong understanding of sales performance metrics is important for
            success in this role.
          </li>
          <li>
            The ability to handle and prioritize multiple tasks and collaborate
            effectively in a team-oriented environment is crucial.
          </li>
          <li>
            We appreciate self-motivated individuals who can work independently
            and embrace challenges.
          </li>
          <li>
            A fast-paced, goal-driven environment requires your adaptability and
            dedication.
          </li>
        </ul>
      </div>
      <div className="mt-[42px]">
        <h1
          className={`${mukta.className} text-[#3B4350] text-[24px] font-[600] mb-[13px]`}
        >
          Commission Based Pay Structure
        </h1>
        <ul
          className={`${openSans.className} flex flex-col gap-5 max-w-[1120px] m-auto text-[#3B4350] list-disc text-[20px] leading-[33px] font-[400] mb-[13px]`}
        >
          <li>10k - 50k USD projects = 8% Commission.</li>
          <li>50k - 100k USD projects = 10% Commission.</li>
          <li>&gt;100k USD projects = 12% Commission.</li>
        </ul>
      </div>
      <div className="mt-[42px]">
        <h1
          className={`${mukta.className} text-[#3B4350] text-[24px] font-[600] mb-[13px]`}
        >
          Additional Information
        </h1>
        <p
          className={`${openSans.className} text-[#3B4350] text-[20px] leading-[33px] font-[400] mb-[13px]`}
        >
        Position is fully remote and open to USA residents only
        </p>
      </div>
    </div>
  );
}

export default Body;
