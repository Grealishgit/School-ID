import React from 'react'
import logo from '../assets/logo.png'
import { FaBell, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="bg-white fixed left-0 w-full shadow-md z-50 shadow-black p-4 flex justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
                <img src={logo} alt="" className='md:w-10 w-7 md:h-10 h-7 cursor-pointer' />
                <p className='text-xl md:block hidden  cursor-pointer font-bold'>MksU ID</p>
            </div>
            <div className="flex items-center text-lg  gap-4">
                <p>Good Eevening <span className='text-[#2c2e8b] font-bold'>Eugene!</span> </p>
                <div className="relative flex items-center justify-center w-8 h-8">
                    <FaBell className="w-5 h-5 text-gray-600 cursor-pointer" />
                    <span className="absolute -top-1 -right-1 bg-[#2c2e8b]  text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        5
                    </span>
                </div>


                <FaUserCircle className="w-6 h-6 cursor-pointer text-gray-600" />
                <button className="flex cursor-pointer items-center text-sm text-red-500">
                    <FaSignOutAlt className="w-4 h-4 mr-1" /> <span className='md:block hidden'>Logout</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
