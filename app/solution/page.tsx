import React from 'react'
import CTASection from '@/components/solutions/CTASection'
import HeroSection from '@/components/solutions/HeroSection'
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import Divider from "@/components/solutions/Divider"
import AllStar from "@/components/solutions/StarTeam"
import BusinessTeam from "@/components/solutions/BusinessTeam"
import DevelopmentTeam from "@/components/solutions/DevelopmentTeam"
function page() {
  return (
    <div>
      <Nav/>
      <HeroSection/>
      <AllStar/>
      <BusinessTeam/>
      <Divider />

      <DevelopmentTeam/>
      <Divider />
        <CTASection/>
        <Footer/>
    </div>
  )
}

export default page