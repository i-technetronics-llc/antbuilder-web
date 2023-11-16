import React from 'react'
import Image from 'next/image'
import { millik,mukta, openSans } from "../../../app/font";
import Button from "@/components/common/Button";
import Link from 'next/link'
import Logo from '@/components/common/Logo'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
function Apply() {
  return (
    <div>
        <Logo className='max-w-[1280px] px-[16px]'/>
        
        <div className='max-w-[1149px] mx-4 lg:mx-auto mt-[51.28px]'>
            <Header/>
             <div>
            <Body/>
        </div>
             <div>
            <Footer/>
        </div>
        </div>
       
    </div>

  )
}

export default Apply