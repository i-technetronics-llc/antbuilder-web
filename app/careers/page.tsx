import React from 'react'
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import Card from "@/components/careers/CareerCard";
import HeroSection from "@/components/careers/HeroSection";
function page() {
  return (
    <div>
      <Nav/>
     <HeroSection/>
        <Card/>
        <Footer/>
    </div>
  )
}

export default page