import Link from "next/link";
import React from "react";
import Container from "./Container";
import AppConfig from "@/app/AppConfig";
import Logo from "./Logo";
import { mukta } from "@/app/font";



export default function Footer() {

    const navigation = [
        { href: "/vision", value: "Our Vision" },
        { href: "/", value: "Solutions" },
        { href: "/", value: "Our Projects" },
        { href: "/", value: "Blog" },
    ];

    const legal = [
        { href: "#", value: "Terms" },
        { href: "/privacy_policy", value: "Privacy" },
    ];

    return (
        <Container className="mt-10 lg:mt-40">
            <div className="flex flex-col lg:flex-row justify-between mb-10 lg:mb-16 pt-10 lg:border-t border-[#D9D9D9]">
                <div className="mb-10 lg:mb-0">
                    <Logo />

                    <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
                        Launch apps faster and cheaper. Connect with expert developers, access customizable code modules, and enjoy dedicated support. Experience efficient app development with regular updates.
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 space-x-0 lg:space-x-10">
                    <div className="flex flex-col">
                        <h4 className={`${mukta.className} text-lg lg:text-xl font-bold`}>Company</h4>
                        {navigation.map((item, index) => (
                            <Link key={index} href={item.href} className="w-full py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-trueGray-700">
                                {item.value}
                            </Link>
                        ))}
                    </div>


                    <div className="flex flex-col lg:justify-self-center ">
                        <h4 className={`${mukta.className} text-lg lg:text-xl font-bold`}>Legal</h4>
                        {legal.map((item, index) => (
                            <Link key={index} href={item.href} className="w-full py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                                {item.value}
                            </Link>
                        ))}
                    </div>

                    <div>
                        {/* Follow us Section */}
                        <h4 className={`${mukta.className} text-lg lg:text-xl font-bold`}>Social</h4>
                        <div className="flex mt-5 space-x-5 text-gray-700 dark:text-gray-500">
                            <Link
                                className="dark:text-trueGray-900 -mt-1"
                                href={AppConfig.social.twitter}
                                target="_blank"
                                rel="noopener">
                                <span className="sr-only">Twitter</span>
                                <Twitter size={32} />
                            </Link>

                            <a href={AppConfig.social.linkedin} target="_blank" rel="noopener">
                                <span className="sr-only">Linkedin</span>
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="text-base font-medium text-center text-[#ADB8CC]">
                Copyright © {new Date().getFullYear()}. All Rights Reserved
            </div>
        </Container>
    );
}

const Twitter = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="currentColor"
        baseProfile="basic">
        <path d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" /><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z" /><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34" /><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14" />
    </svg>
);

const Linkedin = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
    </svg>
);