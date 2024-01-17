import React from 'react';
import logo from "../../assets/logo.svg";
const Footer = () => {
    return (
        <div className=' w-100 bg-backPrimary_color'>
            <div className=' w-full py-6 bg-opacity-50 shadow-inner' >
                <div>
                    {/* Logo  */}
                    <div to={"/"} className='flex flex-col items-center gap-2 animate-slideUp text-text_color1'  >
                        <img src={logo} alt="logo" className='w-[1.5rem] sm:w-[2rem]' />
                        <h1 className='text-lg sm:text-2xl font-extrabold'>Survey Traverse</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;