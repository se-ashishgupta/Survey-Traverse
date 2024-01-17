import React, { useEffect, useRef, useState } from 'react';
import logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { useUserContext } from '../../context/userContext';
import toast from 'react-hot-toast';
import axiosInstance from '../../config/AxiosInstance';



const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const { isAuthenticated, setIsAuthenticated, token, setToken, setUser } = useUserContext();

    const navItem = [
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "Survey",
            path: "/survey"
        },
        isAuthenticated ?
            {
                id: 4,
                title: "All Survey",
                path: "/admin"
            } : {
                id: 3,
                title: "Login",
                path: "/login"
            }

    ];


    const logoutHandler = async () => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: "/logout",
                data: {}
            });

            if (response.status === 200) {
                localStorage.clear();
                setIsAuthenticated(false);
                setToken(null);
                setUser(null);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
        setOpenNav(false);
    };

    return (
        <>
            {/* Desktop Navbar  */}
            <div className='fixed top-0 left-0 bg-backPrimary_color w-full h-[4rem] shadow-xl px-4 md:px-10 flex items-center z-20 justify-between overflow-x-hidden overflow-hidden'>

                {/* Logo  */}
                <Link to={"/"} className='flex items-center gap-2 animate-slideRight'  >
                    <img src={logo} alt="logo" className='w-[1.5rem] sm:w-[2rem]' />
                    <h1 className='text-lg sm:text-2xl font-extrabold text-text_color1'>Survey Traverse</h1>
                </Link>

                {/* Nav Item  */}
                <div className='hidden sm:flex items-center gap-3 md:gap-5'>
                    {
                        navItem.map((item) => (
                            <Link key={item.id} to={item.path} className=' transition-all duration-300 text-text_color1 font-semibold text-xl hover:text-text_color2'>{item.title}</Link>
                        ))
                    }
                    {isAuthenticated && <Link onClick={logoutHandler} className=' transition-all duration-300 text-text_color1 font-semibold text-xl hover:text-text_color2'>Logout</Link>}
                </div>




                {/* Menu Icon  */}
                <div onClick={() => setOpenNav(!openNav)} className='text-4xl p-1 cursor-pointer sm:hidden  shadow-md rounded-lg' >
                    <span className=' text-text_color1'>
                        {openNav ? <GrFormClose /> : <BiMenuAltRight />}
                    </span>
                </div>

            </div>

            {/* Phone Navbar  */}
            <div className={`fixed top-0 right-0 w-full bg-backPrimary_color z-10 pt-[5rem] p-6 ${openNav ? "" : "translate-y-[-100%]"} transition-all duration-300 flex flex-col gap-2 sm:translate-y-[-100%]`}>
                {
                    navItem.map((item) => (
                        <Link onClick={() => setOpenNav(false)} key={item.id} to={item.path} className=' transition-all duration-300 text-text_color1 font-semibold text-xl hover:text-text_color2'>{item.title}</Link>
                    ))
                }
                {isAuthenticated && <Link onClick={logoutHandler} className=' transition-all duration-300 text-text_color1 font-semibold text-xl hover:text-text_color2'>Logout</Link>}
            </div>
        </>
    );
};

export default Header;;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     const navItem = [
//         {
//             id: 1,
//             title: "Home",
//             path: "/"
//         },
//         {
//             id: 2,
//             title: "Survey",
//             path: "/survey"
//         },
//         {
//             id: 3,
//             title: "About",
//             path: "/about"
//         },
//         {
//             id: 4,
//             title: "Contact",
//             path: "/contact"
//         },
//         {
//             id: 5,
//             title: "Login",
//             path: "/login"
//         },
//     ];
//     return (
//         <div className=' bg-backPrimary_color px-4 py-6 text-text_color1'>

//             <div className=' flex items-center gap-6 justify-end'>
//                 {
//                     navItem.map((item) => (
//                         <Link key={item.id} to={item.path} className=' font-semibold text-xl hover:text-text_color2'>{item.title}</Link>
//                     ))
//                 }
//             </div>

//         </div>
//     );
// };

// export default Header;