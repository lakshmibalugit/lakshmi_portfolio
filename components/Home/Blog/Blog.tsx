import React from 'react'
import BlogCard from './BlogCard'
import { BLOGS } from '@/components/constants'

const Blog = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                My latest <span className='text-cyan-200'>Blogs</span>
            </h1>
            <div className='w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4
            gap-10 items-center mt-16'>
                {BLOGS.map(({ id, image, title, date, tags, url }, i) => {
                    return (
                        <div key={id} data-aos="fade-right" data-aos-anchor-placement='top-center' data-aos-delay={i * 100}>
                            <BlogCard image={image} title={title} date={date} tags={tags} url={url} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Blog