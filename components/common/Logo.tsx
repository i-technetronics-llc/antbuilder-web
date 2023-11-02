import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
interface Props {
    className?: string
}

const Logo = ({ className }: Props) => {
    return (
        <Link href='/'>
        <div className='flex items-center space-x-3 cursor-pointer' >

            <Image src={"/images/Logo.svg"} alt='Antbuilder Logo' width={210} height={150}/>
           
        </div>
        </Link>
    )
}

export default Logo