import React from 'react'
import ServiceCard from './ServiceCard'
import { SERVICES } from '@/components/constants'

const Services = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                Engineering <br /> impactful web experiences <br /> for modern teams
            </h1>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
            gap-10 mt-20 items-center'>

                {SERVICES.map(service => {
                    return (
                        <div key={service.id} data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay={service.dataAosDelay}>
                            <ServiceCard icon={service.icon} name={service.name}
                                description={service.description} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Services