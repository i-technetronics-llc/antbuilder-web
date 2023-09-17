import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Nav from "@/components/common/Nav";
import { BsChevronRight } from 'react-icons/bs';
import { millik, openSans } from "./font";
import FeatureSection from "@/components/Home/FeatureSection";
import BenefitSection from "@/components/Home/BenefitSection";
import CTASection from "@/components/Home/CTASection";

export default function Home() {
  return (
    <div className="pb-10">
      <header className="mb-14">
        <Container>
          <Nav />
          <section className="text-center mt-10 lg:mt-20">
            <div className="mb-20 text-trueGray-300">
              <h3 className="text-4xl lg:text-5xl font-semibold text-trueGray-500 mb-4">Build your Apps</h3>

              <h1 className={`text-[64px] ${millik.className} text-trueGray-500 mb-2.5 leading-tight lg:leading-normal`}>
                Faster and Better
              </h1>

              <p className="text-2xl mb-[23px]">
                Launch
                <span className={`text-primary-600 ${openSans.className} mx-1`}>5x Faster</span> &
                <span className={`text-primary-600 ${openSans.className} mx-1`}>2x Cheaper</span>
              </p>

              <p className="text-2xl font-medium">Test your builds biweekly with our data-driven app development platform</p>
            </div>

            <Button
              className="!text-2xl font-light py-3 px-5"
              rounded
              Icon={<BsChevronRight className="text-2xl" />}
              iconDir="right">
              Get Started
            </Button>
          </section>

        </Container>
      </header >
      <FeatureSection />
      <BenefitSection />
      <CTASection />
    </div>
  )
}
