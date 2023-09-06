import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='flex items-center space-x-3'>
            <Image src={"/logo.svg"} alt='Antbuilder Logo' width={25} height={30} />
            <span className='text-primary'>AntBuilder</span>
        </div>
    )
}

export default Logo