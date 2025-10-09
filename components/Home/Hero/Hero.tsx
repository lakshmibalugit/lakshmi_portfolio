'use client';
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';
import ParticlesHero from './ParticleBackground';
import { Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <div id='home' className='relative h-screen flex items-center justify-center text-white
    overflow-hidden flex-col'>
            <ParticlesHero />
            <div className='relative z-10 flex flex-col items-center'>
                <Image src='/images/portfolio_img.jpg' alt='heroimage' width={150} height={150}
                    className='rounded-full border-8 border-[#0c0c48aa]'
                    data-aos='fade-up' />
                <h1 data-aos='fade-up' data-aos-delay='200' className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
                    Creating web products, <br />
                    brands,
                    <span className='text-cyan-200'> and experiences.</span></h1>
                <h2 data-aos='fade-up' data-aos-delay='400' className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
                    Hi! I&apos;m Vicky - A Passionate
                    <span className='text-cyan-200 font-bold'>
                        <Typewriter options={{
                            strings: [
                                'Frontend Developer',
                                'Backend Developer',
                                'Fullstack Developer',
                                'MERN Developer',
                                'AI enthusiast'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            wrapperClassName: 'pl-2',
                        }} />
                    </span>
                </h2>
                <span data-aos='fade-up' data-aos-delay='200' className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>Want to know more?</span>
                <a
                    href="https://portfolio-chat-seven.vercel.app/"
                    rel="noopener noreferrer"
                    className='mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-3 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.7)]'
                >
                    <Sparkles className='w-5 h-5 animate-pulse' />
                    Ask My AI Assistant
                </a>
            </div>
        </div>
    )
}

export default Hero