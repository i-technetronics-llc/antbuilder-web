import Image from 'next/image'
import React from 'react'

interface Props {
    className?: string
}

const Logo = ({ className }: Props) => {
    return (
        <div className='flex items-center space-x-3'>
            <Image src={"/logo.svg"} alt='Antbuilder Logo' width={25} height={30} />
            <span className={`text-primary text-xl ${className}`}>AntBuilder</span>
        </div>
    )
}

export default Logo