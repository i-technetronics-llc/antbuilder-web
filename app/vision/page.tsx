import React from 'react'
// import CTASection from '@/components/vision/CTASection'
import HeroSection from '@/components/vision/HeroSection'
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import Section from "@/components/vision/Section"
import Section2 from "@/components/vision/Section2"
import Mission from "@/components/vision/Mission"
import CoreValues from "@/components/vision/CoreValues"
function page() {
  return (
    <div>
      <Nav/>
      <HeroSection/>
        {/* <CTASe.ction/> */}
        <Section />
        <Mission />
        <Section2 />
        <CoreValues/>

        <Footer/>
    </div>
  )
}

export default page