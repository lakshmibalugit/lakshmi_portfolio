"use client";
import { NAVLINKS } from '@/components/constants'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };
        window.addEventListener("scroll", handler);
        return () => {
            window.removeEventListener("scroll", handler);
        }
    }, [])
    const onNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className={`transition-all ${navBg ? 'bg-white shadow-md' : 'fixed'} duration-200 h-[12vh] z-[10000] fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                        <FaCode className='w-5 h-5 text-black' />
                    </div>
                    <h1 className='text-xl hidden sm:block md:text-2xl text-black font-bold'>Lakshmi Balu</h1>
                </div>
                <div className='hidden lg:flex items-center space-x-10'>
                    {NAVLINKS.map((link) => {
                        return <span key={link.id} onClick={() => onNavClick(link.url)} className='text-base hover:text-blue-600 text-black font-medium transition-all duration-200 cursor-pointer'>
                            {link.label}
                        </span>
                    })}
                </div>
                <div className='flex items-center space-x-4'>
                    <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-600 hover:bg-blue-700 
                    transition-all duration-300 text-white flex items-center space-x-2'>
                        <BiDownload className='w-5 h-5' />
                        <a href='/files/lakshmi_resume.pdf' download>Download Resume</a>
                    </button>
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                </div>
            </div>
        </div>
    )
}

export default Nav