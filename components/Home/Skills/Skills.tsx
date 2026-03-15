"use client";
import { SKILLS } from '@/components/constants'
import React from 'react'
import Tilt from 'react-parallax-tilt'

const Skills = () => {
    return (
        <div id='skills' className='text-black pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>
                My <span className='text-blue-600'>Skills</span>
            </h1>
            <div className='flex flex-wrap justify-center gap-6 mt-16'>
                {SKILLS.map(({ id, Icon, name, percent }, i) => {
                    return (
                        <Tilt key={id} scale={1.5} transitionSpeed={400}>
                            <div className='bg-gray-100 text-center w-40 h-48 rounded-3xl flex flex-col
                            items-center justify-center shadow-lg transition hover:scale-105'
                                data-aos="flip-right" data-aos-anchor-placement='top-center' data-aos-delay={i * 100}>
                                <div className='text-5xl mb-4 text-gray-600'>
                                    <Icon />
                                </div>
                                <p className='text-2xl font-semibold'>
                                    {percent}%
                                </p>
                                <p className='text-purple-400 mt-1'>
                                    {name}
                                </p>
                            </div>
                        </Tilt>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills