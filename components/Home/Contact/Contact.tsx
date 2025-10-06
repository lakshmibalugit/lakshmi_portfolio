"use client";

import { CONTACT, SOCIALS } from '@/components/constants';
import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import ContactSuccess from './ContactSuccess';

const Contact = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        if (!formRef.current) return;

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(
                () => {
                    setStatus("success");
                    formRef.current?.reset();
                },
                (error) => {
                    console.error("EmailJS error:", error);
                    setStatus("error");
                }
            );
    };

    return (
        <div id='contact' className='pt-16 pb-16'>
            <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                {/* LEFT SECTION */}
                <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>
                        Let’s Build Something Great!
                    </h1>
                    <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                        Get in touch for freelance or full-time full stack projects — from MVPs to enterprise solutions.
                    </p>

                    <div className='mt-7'>
                        {CONTACT.map(({ id, Icon, info }) => (
                            <div key={id} className='flex items-center space-x-3 mb-4'>
                                <Icon className='w-9 h-9 text-cyan-300' />
                                <p className='text-xl font-bold text-gray-400'>{info}</p>
                            </div>
                        ))}

                        <div className='flex items-center mt-8 space-x-3'>
                            {SOCIALS.map(({ id, Icon, hoverClass, url }) => (
                                <a
                                    href={url}
                                    target='_blank'
                                    key={id}
                                    className={`w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col ${hoverClass} transition-all duration-300`}
                                >
                                    <Icon className='text-white w-6 h-6' />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div
                    data-aos="zoom-in"
                    data-aos-anchor-placement='top'
                    className='md:p-10 p-5 bg-[#131332] rounded-lg h-[550px] flex items-center justify-center'
                >
                    {status === "success" ? (
                        <ContactSuccess />
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit} className='w-full'>
                            <input
                                type='text'
                                name='name'
                                required
                                placeholder='Name'
                                className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                            />
                            <input
                                type='email'
                                name='email'
                                required
                                placeholder='Email Address'
                                className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                            />
                            <input
                                type='text'
                                name='phone'
                                required
                                placeholder='Phone Number'
                                className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                            />
                            <textarea
                                name='message'
                                placeholder='Your Message'
                                required
                                className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'
                            ></textarea>

                            {status === "error" && (
                                <p className="mt-4 text-center text-sm font-medium text-red-400 bg-red-400/10 py-2 rounded-md">
                                    ❌ Failed to send. Please try again.
                                </p>
                            )}

                            <button
                                disabled={status === "loading"}
                                className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full w-full'
                            >
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;