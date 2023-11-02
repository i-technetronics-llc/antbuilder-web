"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaTimes } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import Button from './Button2'
import Logo from './Logo'
import clsx from 'clsx'

interface Props {
    inverse?: boolean
}

const links = [
    {
        title: "Our Vision",
        href: "/vision"
    },
    {
        title: "Solution",
        href: "/solution"
    },
    {
        title: "Our Projects",
        href: "/projects"
    },
    {
        title: "Blog",
        href: "#"
    },
]

const Nav = ({ inverse }: Props) => {
    const pathname = usePathname()
    const [navOpened, setNavOpened] = useState<boolean | undefined>(undefined);

    const handleHamburgerClicked = () => {
        const newNav = !navOpened
        setNavOpened(newNav);

        if (newNav) {
            document.body.classList.add("disable-scroll")
        } else {
            document.body.classList.remove("disable-scroll")

        }
    };



    const containerClasses = clsx(
        'fixed flex bg-white',
        'left-0',
        'lg:animate-none',
        'flex-col items-center z-20 lg:z-auto justify-center lg:flex lg:flex-row text-center lg:text-left lg:justify-between lg:static space-y-4 lg:space-y-0 space-x-0 lg:space-x-12 top-0 w-screen lg:h-auto lg:w-auto h-screen',
        {
            'hidden': navOpened === undefined,
            'animate-in slide-in-from-left-full duration-500': navOpened,
            'animate-out slide-out-to-right-full pointer-events-none fill-mode-forwards duration-300': navOpened !== undefined && !navOpened,
        }
    );

    return (
        <nav className=' max-w-[1248px] p-[16px] flex items-center justify-between'>
            <Logo />

            <div className={`${containerClasses}`}>
                {links.map((link) => {
                    return (

                        <Link
                            className={`text-base font-normal text-trueGray hover:text-primary ${pathname.includes(link.href) ? "text-primary underline underline-offset-2" : ""}`}
                            key={link.title} href={link.href}>
                            {link.title}
                        </Link>

                    )
                })}

                <Link href='/'>
                <button  className='inline-block lg:hidden px-[16px] text-black '>
                    Log In
                </button>
                </Link>
                <button  className='inline-block lg:hidden px-[16px] py-[8px]  border-[1px] border-[#3B82F6] rounded-[40px]'>
                    Get Started
                </button>
             
            </div>

              <div className='flex items-center justify-between gap-[16px]'>

                {/* large screen */}
                <Link href='/'>
                <button  className='hidden lg:inline-block px-[16px] text-black '>
                    Log In
                </button>
                </Link>
               
               <button className='hidden lg:inline-block px-[16px] py-[8px]  border-[1px] border-[#3B82F6] rounded-[40px]'>
                Get Started
            </button>  
             </div>
            
            {/* <button variant='outline' rounded className='hidden lg:inline-block'>
                Get Started
            </button> */}

            <button title='hamburger-icon' className={`lg:hidden font-bold text-2xl z-30 ${!inverse ? "text-primary" : "text-trueGray-500"}`} onClick={handleHamburgerClicked}>
                {
                    navOpened ?
                        <FaTimes className={`animate-in spin-in-180 fade-in-0 duration-500`} /> :
                        <GiHamburgerMenu className={`animate-in fade-in duration-1000`} />
                }
            </button>
        </nav>
    )
}

export default Nav
