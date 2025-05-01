import React from 'react'
import logo from '../assets/logo.png'
import { FaBell, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="bg-white fixed left-0 w-full shadow-md z-50 shadow-black p-4 flex justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
                <img src={logo} alt="" className='w-10 h-10 cursor-pointer' />
                <p className='text-xl cursor-pointer font-bold'>MksU ID</p>
            </div>
            <div className="flex items-center gap-4">
                <p>Good Eevening <span className='text-[#2c2e8b] font-bold'>Eugene!</span> </p>
                <FaBell className="w-5 h-5 cursor-pointer text-gray-600" />
                <FaUserCircle className="w-6 h-6 cursor-pointer text-gray-600" />
                <button className="flex cursor-pointer items-center text-sm text-red-500">
                    <FaSignOutAlt className="w-4 h-4 mr-1" /> Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar
