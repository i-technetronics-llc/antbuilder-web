import { openSans } from '@/app/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

interface Props {
    src: string
    title: string
    description: string
    moreLink: string
    className?: string
}

const BenefitCard = ({ src, title, description, moreLink, className = "" }: Props) => {
    return (
        <div className={`rounded-[18px] w-full max-w-[352px] bg-white p-6 ${className} flex flex-col transition-transform duration-300 `}>
            <Image src={src} alt={`${title} image`} width={328} height={248.307} className='mb-5' />

            <div className='grow space-y-3 flex flex-col justify-between'>

                <h3 className='text-2xl font-bold text-trueGray-500'>{title}</h3>

                <p className={`text-sm ${openSans.className}`}>{description}</p>
                <Link href={moreLink} className={`hover:border-b w-fit border-primary text-primary text-sm font-semibold inline-flex items-center ${openSans.className}`}>
                    Learn More <FaAngleRight className="ml-1" />
                </Link>
            </div>
        </div>
    )
}

export default BenefitCard