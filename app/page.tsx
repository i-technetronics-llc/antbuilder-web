import AchievementSection from "@/components/Home/AchievementSection";
import BenefitSection from "@/components/Home/BenefitSection";
import CTASection from "@/components/Home/CTASection";
import FAQSection from "@/components/Home/FAQSection";
import FeatureSection from "@/components/Home/FeatureSection";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import { BsChevronRight } from 'react-icons/bs';
import { millik, openSans } from "./font";
import Image from 'next/image'
import Animate from "@/components/Home/animate";
import Link from "next/link";
export default function Home() {
  return (
    <div className="pb-10" >
      <header className="">
        <Container>
          <Nav />
          <section className="text-center mt-10 lg:mt-[48px] bg-no-repeat bg-center bg-cover bg-[url('/images/homebg.svg')]">
            <div className=" text-trueGray-300">
              <h3 className="text-4xl lg:text-5xl font-semibold text-trueGray-500 ">Build your Apps</h3>

              <h1 className={`text-[64px] ${millik.className} text-trueGray-500 mt-[16px] leading-tight lg:leading-normal`}>
                Faster and Better
              </h1>

              <p className="text-2xl mt-[27px]">
                Launch
                <span className={`text-primary-600 ${openSans.className} mx-1`}>5x Faster</span> &
                <span className={`text-primary-600 ${openSans.className} mx-1`}>2x Cheaper</span>
              </p>

              <p className="text-2xl mt-[12px] font-medium">Test your builds biweekly with our data-driven app development platform</p>
            </div>


            <Link href='/get-started'>
            <Button
              className="!text-2xl font-light mt-[24px] py-3 px-5"
              rounded
             
              Icon={<BsChevronRight className="text-2xl" />}
              iconDir="right">
              Get Started
            </Button>
            </Link>
          </section>
          <figure className=' max-w-[1100px] max-h-[478px] md:-mt-[32px]  mx-auto '>
          <Image src="/images/homeimg.svg" alt="Earth View" width={1800} height={550} />
        </figure>

      
        </Container>
      </header >
      <FeatureSection />
      <BenefitSection />
      {/* <Animate /> */}
      <AchievementSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  )
}
