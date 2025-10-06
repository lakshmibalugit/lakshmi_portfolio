import { NAVLINKS } from '@/components/constants'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';
    const onNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            closeNav();
        }
    }
    return (
        <div>
            <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[10000] bg-black opacity-70 
            w-full h-screen`}></div>
            <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full
            transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%]
            bg-cyan-800 space-y-6 z-[100050] right-0`}>
                {NAVLINKS.map((link) => {
                    return (<span key={link.id} onClick={() => onNavClick(link.url)}>
                        <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                            {link.label}
                        </p>
                    </span>
                    )
                })}
                <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer' />
            </div>
        </div>
    )
}

export default MobileNav