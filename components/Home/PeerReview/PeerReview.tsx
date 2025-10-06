"use client"
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ClientReviewCard from './PeerReviewCard';
import { REVIEWS } from '@/components/constants';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const PeerReview = () => {
    return (
        <div id='reviews' className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                Kind words from my <br />{" "} <span className='text-cyan-200'>peers</span>
            </h1>
            <div className='mt-16 w-[70%] mx-auto'>
                <Carousel
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                >
                    {
                        REVIEWS.map(({ id, name, role, image, text }) => {
                            return (
                                <ClientReviewCard key={id} name={name} role={role} image={image} text={text} />
                            )
                        })
                    }
                </Carousel>;
            </div>
        </div>
    )
}

export default PeerReview