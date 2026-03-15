import React from 'react'
import ResumeCard from './ResumeCard'
import { EDUCATION, EXPERIENCES } from '@/components/constants'

const Resume = () => {
    return (
        <div id='background' className='pt-20 pb-16'>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-black'>
                        My Work <span className='text-blue-600'>Experience</span>
                    </h1>
                    <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement='top-center'>
                        {EXPERIENCES.map(experience => {
                            return (
                                <ResumeCard key={experience.id} Icon={experience.icon} role={experience.role} description={experience.desc} />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-black'>
                        My <span className='text-blue-600'>Education</span>
                    </h1>
                    <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement='top-center' data-aos-delay='300'>
                        {EDUCATION.map(education => {
                            return (
                                <ResumeCard key={education.id} Icon={education.icon} role={education.role} description={education.desc} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume