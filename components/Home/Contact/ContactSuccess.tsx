import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const ContactSuccess = () => {
    return (
        <div className='text-center space-y-4'>
            <h2 className='text-2xl font-bold text-green-400'>
                ✅ Message Sent Successfully!
            </h2>
            <p className='text-gray-300 text-base leading-relaxed'>
                Thank you for reaching out. I’ll get back to you as soon as possible.
                <br />
                For a faster response, feel free to connect with me on LinkedIn and send a message there.
            </p>
            <a
                href="https://www.linkedin.com/in/balasubv/"
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#006097] text-white px-5 py-3 rounded-full transition-all duration-300'
            >
                <FaLinkedin className='w-5 h-5' />
                Connect on LinkedIn
            </a>
        </div>
    );
};

export default ContactSuccess;