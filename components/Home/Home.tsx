"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import PeerReview from './PeerReview/PeerReview'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        const initAos = async () => {
            await import('aos');
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: 'top-bottom',
            })
        }
        initAos();
    }, [])
    return (
        <div className='overflow-hidden'>
            <Hero />
            <Services />
            <Resume />
            {/* <Projects /> */}
            <Skills />
            {/* <PeerReview /> */}
            {/* <Blog /> */}
            <Contact />
        </div>
    )
}

export default Home