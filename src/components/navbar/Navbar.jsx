import React, { useEffect, useState } from 'react'
import logo from "@/assets/navbarlogo.svg"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"
import { RiMovieAiFill } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import { FaBookmark } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useStateValue } from '@/context'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [state, dispatch] = useStateValue()
    const handleNavLinkClick = () => {
        setMenuOpen(false)
    }

    useEffect(() => {
        if (state.isDarkmode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [state.isDarkmode])

    return (
        <nav className='flex justify-between items-center py-3 px-4 md:px-10 bg-white relative z-50 dark:bg-[#000000]'>
            <div>
                <NavLink to={'/'}>
                    <img src={logo} alt="Logo" className='w-[120px]' />
                </NavLink>
            </div>

            <div className='hidden md:flex items-center gap-12 justify-center'>
                <NavLink className='flex flex-col items-center' to={'/'}><ImHome className='text-[25px] text-red-700' /><span className='text-[12px]'>Home</span></NavLink>
                <NavLink className='flex flex-col items-center' to={'/movies'}><RiMovieAiFill className='text-[25px] text-red-700' /><span className='text-[12px]'>Movies</span></NavLink>
                <NavLink className='flex flex-col items-center' to={'/saved'}><FaBookmark className='text-[25px] text-red-700' /><span className='text-[12px]'>Saved</span></NavLink>
                <NavLink className='flex flex-col items-center' to={'/search'}><FaSearch className='text-[25px] text-red-700' /><span className='text-[12px]'>Search</span></NavLink>
            </div>

            <div className='hidden md:flex items-center gap-5'>
                <button
                    onClick={() => dispatch({ type: "MODE" })}
                    className='flex items-center justify-center p-3 bg-[#1D1D1D10] rounded-[12px]  dark:bg-gray-700'
                >
                    {state.isDarkmode ? (
                        <MdLightMode className='text-[24px] dark:text-white' />
                    ) : (
                        <MdDarkMode className='text-[24px]' />
                    )}
                </button>
                <button className='px-6 py-3 bg-primary text-white rounded-[12px] text-[16px] font-bold'>
                    Login
                </button>
            </div>

            <div className='flex items-center md:hidden'>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='text-[28px] z-50 relative'
                >
                    {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
                </button>
            </div>

            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-dark z-40 transition-all duration-300 ease-in-out 
                ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} flex flex-col gap-6 px-6 py-10`}>

                <button
                    onClick={() => dispatch({ type: "MODE" })}
                    className='flex items-center justify-start'
                >
                    {state.isDarkmode ? (
                        <MdLightMode className='text-[28px]' />
                    ) : (
                        <MdDarkMode className='text-[28px]' />
                    )}
                </button>

                <NavLink onClick={handleNavLinkClick}><span className='text-[32px] font-medium hover:text-gray-500 transition-colors duration-200'>Home</span></NavLink>
                <NavLink onClick={handleNavLinkClick}><span className='text-[32px] font-medium hover:text-gray-500 transition-colors duration-200'>Movies</span></NavLink>
                <NavLink onClick={handleNavLinkClick}><span className='text-[32px] font-medium hover:text-gray-500 transition-colors duration-200'>Saved</span></NavLink>
                <NavLink onClick={handleNavLinkClick}><span className='text-[32px] font-medium hover:text-gray-500 transition-colors duration-200'>Search</span></NavLink>

                <NavLink
                    onClick={handleNavLinkClick}
                    className=' px-8 py-1.5 bg-primary text-white rounded-[12px] text-[18px] font-bold w-fit'
                >
                    Login
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
