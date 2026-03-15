import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-gray-900 to-gray-800 p-8'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                    <div>
                        <h3 className='text-white font-bold text-lg mb-4'>Lakshmi Balu</h3>
                        <p className='text-gray-400 text-sm'>
                            Senior Data Engineer | Data Analyst
                        </p>
                    </div>
                    <div>
                        <h4 className='text-white font-semibold mb-4'>Quick Links</h4>
                        <ul className='space-y-2 text-gray-400 text-sm'>
                            <li><a href='#home' className='hover:text-indigo-400 transition'>Home</a></li>
                            <li><a href='#background' className='hover:text-indigo-400 transition'>Background</a></li>
                            <li><a href='#skills' className='hover:text-indigo-400 transition'>Skills</a></li>
                            <li><a href='#contact' className='hover:text-indigo-400 transition'>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-white font-semibold mb-4'>Get In Touch</h4>
                        <p className='text-gray-400 text-sm'>
                            Email: <a href='mailto:lakshmibalu2019@gmail.com' className='hover:text-indigo-400 transition'>lakshmibalu2019@gmail.com</a>
                        </p>
                        <p className='text-gray-400 text-sm mt-2'>
                            Location: Toronto, ON, Canada
                        </p>
                    </div>
                </div>
                <div className='border-t border-gray-700 pt-6'>
                    <p className='text-gray-400 text-center text-sm'>
                        © {new Date().getFullYear()} Lakshmi Balu. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer