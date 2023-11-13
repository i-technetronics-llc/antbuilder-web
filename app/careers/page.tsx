import React from 'react'
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import HeroSection from "@/components/careers/HeroSection";
import Card from "@/components/careers/CareerCard";
import Apply from "@/components/careers/ApplySection";

function page() {
    return (
            <div>
      <Nav/>
     <HeroSection/>
        <Card/>
        <Apply/>
        <Footer/>
    </div>
  )
}

export default page