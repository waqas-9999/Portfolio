'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const content = [
    {
        title: "Expert Music Instruction",
        description:
            "Learn from the best in the industry. Our instructors are professional musicians with years of experience. Whether you're a beginner or looking to refine your skills, we offer personalized lessons to help you achieve your musical goals.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
                Expert Music Instruction
            </div>
        ),
    },
    {
        title: "State-of-the-Art Facilities",
        description:
            "Practice in an environment designed for your success. Our school is equipped with state-of-the-art facilities, including soundproof studios, high-quality instruments, and the latest music technology to enhance your learning experience.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                State-of-the-Art Facilities
            </div>
        ),
    },
    {
        title: "Performance Opportunities",
        description:
            "Gain confidence and experience through regular performance opportunities. We provide students with the chance to showcase their talents in recitals, concerts, and other events, helping you develop your stage presence and connect with a wider audience.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
                Performance Opportunities
            </div>
        ),
    },
    {
        title: "Diverse Music Programs",
        description:
            "Explore a wide range of music genres and programs tailored to your interests. From classical to contemporary, our diverse offerings ensure that every student can find their niche and grow as a musician.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">
                Diverse Music Programs
            </div>
        ),
    },
];


function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={content}/>
        </div>
    )
}

export default WhyChooseUs