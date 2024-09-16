import React from 'react'
import WLogo from '../../../public/WLogo.png'
import Image from 'next/image'
import { FloatingDockDemo } from './FloatingDock'
import { BackgroundBeamsWithCollision } from "../components/ui/background-beam-with-collison";

function Footer() {
    return (
        <div className='w-full'>
            <BackgroundBeamsWithCollision>
                <div>
                <div className='flex pt-5 md:pt-20 justify-center items-end'>
                <Image
                    src={WLogo}
                    alt="Logo"
                    className='w-32 h-20'
                />
                <span className='font-serif text-3xl'>aqas</span>
            </div>
            <div>
                <nav className='flex flex-col md:flex-row justify-center items-center gap-8 text-lg my-10'>
                    <p>Product</p>
                    <p>Studio</p>
                    <p>Client</p>
                    <p>Pricing</p>
                    <p>Blog</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </nav>
            </div>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-black">
                    <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
                <FloatingDockDemo />
                </div>
            </BackgroundBeamsWithCollision>
            
            

           
        </div>
    )
}

export default Footer