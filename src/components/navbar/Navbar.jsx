import React, { useState } from 'react'
import logo from "@/assets/navbarlogo.svg"
import tvlogo from "@/assets/tvlogo.svg"
import tabletlogo from "@/assets/tabletlogo.svg"
import savedlogo from "@/assets/savedlogo.svg"
import searchlogo from "@/assets/searchlogo.svg"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const handleNavLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <nav className='flex justify-between items-center py-3 px-4 md:px-10 bg-white relative z-50 shadow-md'>
            <div>
                <NavLink>
                    <img src={logo} alt="Logo" className='w-[120px]' />
                </NavLink>
            </div>

            <div className='hidden md:flex items-center gap-12 justify-center'>                
                <NavLink className='flex flex-col items-center' to={'/'}><img src={tvlogo} alt="TV" /><span className='text-[12px]'>Home</span></NavLink>                
                <NavLink className='flex flex-col items-center' to={'/movies'}><img src={tabletlogo} alt="TV" /><span className='text-[12px]'>Movies</span></NavLink>                
                <NavLink className='flex flex-col items-center' to={'/saved'}><img src={savedlogo} alt="Tablet" /><span className='text-[12px]'>Saved</span></NavLink>                
                <NavLink className='flex flex-col items-center' to={'/search'}><img src={searchlogo} alt="Search" /><span className='text-[12px]'>Search</span></NavLink>
            </div>

            <div className='hidden md:flex items-center gap-5'>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className='flex items-center justify-center p-3 bg-[#1D1D1D10] rounded-[12px]'
                >
                    {darkMode ? (
                        <MdLightMode className='text-[24px]' />
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

            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-all duration-300 ease-in-out 
                ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} flex flex-col gap-6 px-6 py-10`}>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className='flex items-center justify-start' 
                >
                    {darkMode ? (
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
