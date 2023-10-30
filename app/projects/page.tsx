import React from 'react'
import CTASection from '@/components/solutions/CTASection'
import HeroSection from '@/components/solutions/HeroSection'
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import Card from "@/components/projects/projectCard";

function page() {
  return (
    <div>
      <Nav/>
        <Card/>
        <Footer/>
    </div>
  )
}

export default page