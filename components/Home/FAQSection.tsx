"use client"
import { mukta, openSans } from '@/app/font'
import React, { useState } from 'react'
import { LiaMinusCircleSolid, LiaPlusCircleSolid } from 'react-icons/lia'
import Container from '../common/Container'

const FAQSection = () => {
    const [active, setActive] = useState(-1)

    function handleActiveFaq(idx: number) {
        if (idx === active) {
            setActive(-1)
            return
        }

        setActive(idx)
    }

    return (
        <section>
            <div className='bg-primary-200 pb-8 pt-16 text-center space-y-2 flex flex-col items-center mb-6'>
                <h3 className={`font-bold text-[28px] text-trueGray ${mukta.className}`}>FREQUENTLY ASKED QUESTION</h3>
                <p className={`text-lg lg:text-xl text-trueGray-300 ${openSans.className}`}>We have compiled a list of commonly asked questions for you</p>
            </div>

            <Container className='space-y-4 mx-auto w-full max-w-5xl'>
                {
                    faqdata.map((faq, idx) => {
                        const isActive = idx === active
                        return (
                            <div key={`faq-${idx}`}>
                                <div className='flex text-trueGray space-x-6 items-center justify-between py-6 border-b border-[#808080]'>
                                    <h4 className={`text-base lg:text-2xl font-medium  ${mukta.className}`}>{faq.question}</h4>
                                    <button className='text-lg font-medium inline-block' onClick={() => handleActiveFaq(idx)} >
                                        {isActive ? <LiaMinusCircleSolid className="animate-in fade-in rotate-180" /> : <LiaPlusCircleSolid className="animate-in fade-in rotate-180" />}
                                    </button>
                                </div>
                                <p className={`py-1.5 ${isActive ? "h-28 overflow-y-scroll select-auto pointer-events-auto disable-scrollbar" : " h-0 overflow-hidden opacity-0 select-none pointer-events-none"} transition-all duration-500`}>
                                    {faq.answer}
                                </p>
                            </div>
                        )
                    })
                }
            </Container>

        </section>
    )
}

export default FAQSection


const faqdata = [
    {
        question: "What makes your software/app development company unique?",
        answer: "At Antbuilder we take pride in our innovative approach to development. We use reusable modules/components, which enables us to build applications more efficiently and cost-effectively. Our strategic product roadmaps and go-to-market strategies ensure that your app development aligns with your business goals, making us specialists in building and promoting app developments."
    },
    {
        question: "How do you ensure the security of our app and its data?",
        answer: "Security is our top priority. We implement industry-best practices to safeguard your app and data. Our development team follows strict security guidelines, conducts regular security audits, and uses encryption protocols to protect sensitive information."
    },
    {
        question: "Can you build custom applications tailored to our specific needs?",
        answer: "Absolutely! We excel in creating custom applications to suit your unique requirements. Our team will work closely with you to understand your business needs and deliver a tailor-made solution that fits your goals."
    },
    {
        question: "What kind of support do you offer during the development process?",
        answer: "We provide end-to-end support throughout the development process. From the initial planning and design stages to deployment and beyond, our dedicated team of experts will be available to address any questions or concerns you may have."
    },
    {
        question: "How long does it typically take to develop an app?",
        answer: "The timeline for app development varies depending on the complexity and scope of the project. Our team will provide you with a detailed project plan and timeline, keeping you informed at every stage."
    },
    {
        question: "What platforms do you develop apps for?",
        answer: "We specialize in developing apps for a wide range of platforms, including iOS, Android, and web-based applications."
    },
    {
        question: "Can you assist with app marketing and promotion?",
        answer: "Absolutely! We offer marketing and promotion services to help your app gain traction in the market. Our go-to-market strategies and promotional expertise will increase your app's visibility and user base."
    },
    {
        question: "What if we need updates or additional features in the future?",
        answer: "We understand that apps may require updates or new features over time. We provide ongoing maintenance and support services to ensure your app stays up-to-date and meets evolving user needs."
    },
    {
        question: "How do I get started with your company for my app development project?",
        answer: "Getting started is easy! Simply reach out to us through our website or contact our sales team. We'll set up an initial consultation to discuss your project requirements and take it from there."
    },
    {
        question: "Can you provide references or case studies of your successful app developments?",
        answer: "Certainly! We have a portfolio of successful app developments, along with customer references and case studies, that showcase our expertise and track record of delivering exceptional results."
    },
    {
        question: "Do you offer technical support?",
        answer: "Yes, absolutely! We provide comprehensive technical support to all our valued customers. Our dedicated support team is available to assist you with any technical issues or challenges you may encounter while working with us or about your apps.\n\nWhether it's a question about functionality, troubleshooting, or general inquiries, our technical support team is ready to help. You can reach out to us through various channels, such as email, Social media channel, or a dedicated project channel on slack.\n\nIf you need technical assistance or have any questions, don't hesitate to contact our support team, and we'll be more than happy to assist you!"
    },
    {
        question: "When will the entire app be available?",
        answer: "The app's availability timeline depends on complexity, features, and specific requirements. Typically, an MVP is developed within 3 months, with new features released every two weeks. For an accurate estimate, let's discuss your app's goals. Rest assured, we'll keep you informed throughout development. Contact our sales team or visit our website to schedule a consultation."
    }
];