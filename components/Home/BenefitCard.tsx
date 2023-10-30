import { millik, openSans } from '@/app/font'
import Image from 'next/image'
import React from 'react'
import Container from '../common/Container'

interface Props {
    title: string
    src: string
    alt?: string
    description: string
    reverse?: boolean
    backgroundColorVariant?: "lightblue" | "white"
    containerHeight?: string
    titleClassName?: string
}

interface DescriptionProps {
    value: string
    className?: string
}

const BenefitCard = ({ title, src, alt, description, reverse, containerHeight, titleClassName, backgroundColorVariant = "lightblue" }: Props) => {
    return (
        <div
            className={`${backgroundColorVariant === "white" ? "bg-white" : "bg-primary-200"} ${containerHeight ? containerHeight : "lg:h-[560px]"}  overflow-visible lg:pt-20 pt-24`}
        >
            <Container className='max-w-[1120px] m-auto'>
                <div className={`
                    flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between ${reverse ? "space-x-0" : "space-x-24"}
                    `}>
                    <div
                        className={`flex flex-col ${reverse ? "lg:w-[550px] lg:items-end " : "lg:w-6/12"} space-y-7`}
                    >
                        <h2 className={`${millik.className} text-4xl lg:text-[64px] leading-[110%] text-left ${reverse && "lg:text-right"} max-w-[596px] text-trueGray-500  ${titleClassName}`}>
                            {title}
                        </h2>
                        <Description value={description}  className='block max-w-[500px] lg:hidden' />

                        <Image src={src} alt={alt ?? `${title} image`} width={417} height={478} />
                    </div>

                    <Description value={description} className='hidden lg:block  max-w-[500px]' />
                </div>
            </Container >
        </div >
    )
}

export default BenefitCard



const Description = ({ value, className = "" }: DescriptionProps) => (
    <p className={`text-trueGray-500 lg:w-6/12 text-base lg:text-2xl ${openSans.className} ${className}`}>
        {value}
    </p>
)