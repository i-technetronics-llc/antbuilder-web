"use client"
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Button from './Button'

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
        href: "#"
    },
    {
        title: "Blog",
        href: "#"
    },
]

const Nav = () => {
    const pathname = usePathname()

    return (
        <nav className='py-5 flex items-center justify-between'>
            <Logo />

            <div className='space-x-4'>
                {links.map((link) => {
                    return (

                        <Link
                            className={`text-base font-normal text-trueGray hover:text-primary ${pathname.includes(link.href) ? "text-primary underline underline-offset-2" : ""}`}
                            key={link.title} href={link.href}>
                            {link.title}
                        </Link>

                    )
                })}
            </div>

            <Button variant='outline' rounded>
                Get Started
            </Button>
        </nav>
    )
}

export default Nav