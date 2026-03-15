import React from 'react'
import ServiceCard from './ServiceCard'
import { SERVICES } from '@/components/constants'

const Services = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>
                Unlocking insights <br /> through data analysis <br /> for strategic decision-making
            </h1>
            <div
                className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
                gap-10 mt-20 items-center'
            >
                {SERVICES.map(service => (
                    <div
                        key={service.id}
                        data-aos='fade-right'
                        data-aos-anchor-placement='top-center'
                        data-aos-delay={service.dataAosDelay}
                    >
                        <ServiceCard
                            icon={service.icon}
                            name={service.name}
                            description={service.description}
                        />
                    </div>
                ))}
            </div>
            <div className='mt-20 text-center space-y-4'>
                <p className='text-lg md:text-xl font-medium text-gray-600'>
                    Want to create something cool?
                </p>
                <a
                    href="https://rebrand.ly/lakshmi_balu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='inline-block bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.7)]'
                >
                    Book a time to chat
                </a>
            </div>
        </div>
    )
}

export default Services
