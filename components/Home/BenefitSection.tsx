import { openSans } from '@/app/font'
import BenefitCard from './BenefitCard'

const BenefitSection = () => {
    return (
        <section>
            <div className='bg-primary-200 pb-8 pt-16 text-center space-y-2 flex flex-col items-center -mb-12 lg:-mb-0'>
                <h3 className='font-bold text-[28px] text-trueGray'>ANTBUILDER MODE OF OPERATION</h3>
                <p className={`text-lg lg:text-2xl text-trueGray-300 ${openSans.className}`}>Develop your software from pre-made components exclusively available to you</p>
            </div>

            <BenefitCard
                title='24/7 Talent Dedicated to You'
                src='/images/benefit-img-1.png'
                description='Dedicated team of developers working on your App 24 hours a day, 7 days a week, with the ability to add more resources if the need arises or you revise the go-to-market delivery date' />

            <BenefitCard
                title='Faster, Cheaper, Better, Smarter!'
                src='/images/benefit-img-2.png'
                description='Interact with true experts who will help you develop the best of the best apps based on your business requirements, as well as establish a dedicated delivery and go-to-market roadmap for your product'
                reverse
                backgroundColorVariant='white' />

            <BenefitCard
                title='Variable Scope and Costs'
                src='/images/benefit-img-3.png'
                description='Begin with an all-in-one MVP cost with an upfront payment, while funding the complete cost of development over time, with unlimited scope changes' />

            <BenefitCard
                title='Off-the-Shelf Codes and PRD’s'
                src='/images/benefit-img-4.png'
                description='Begin with an all-in-one MVP cost with an upfront payment, while funding the complete cost of development over time, with unlimited scope changes'
                reverse
                backgroundColorVariant='white' />

            <BenefitCard
                title='User-Centric Design'
                src='/images/benefit-img-6.png'
                description='We prioritize user experiences, creating intuitive, visually appealing apps that captivate and engage users,' />

            <BenefitCard
                title='App Support'
                src='/images/benefit-img-7.png'
                description='We offer post app support such as promotional content geared towards app growth and usage and post developmental support geared towards app maintenance,'
                reverse
                backgroundColorVariant='white' />

            <div className='bg-primary-200 h-[222px] backdrop-blur-[5px] relative -z-10 hidden lg:block' />
        </section>
    )
}

export default BenefitSection