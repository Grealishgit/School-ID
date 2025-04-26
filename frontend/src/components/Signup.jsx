import React from 'react';
import logo from '../assets/logo.png';

const Signup = () => {
    return (
        <div className="min-h-screen flex w-full flex-col md:flex-row bg-gray-100" >
            {/* Left Section */}
            <div className="w-full min-h-screen md:w-1/2 bg-opacity-80 flex bg-cover bg-center bg-no-repeat items-center justify-center p-8"
                style={{ backgroundImage: "url('bg.png')" }}>
                <p className="text-white text-center text-5xl font-bold">Co-Creating Sustainable Futures</p>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-center p-8">
                <img src={logo} alt="" className='w-20 h-20' />
                <p className='text-[#3b3c98] text-center font-bold text-3xl'>Hi, welcome back</p>
                <p className='font-semibold text-lg'>Please fill in your details to login</p>

                <form className="flex flex-col gap-4 md:w-md w-[350px] md:p-8 p-12 mt-10 bg-white rounded-md shadow-lg shadow-gray-300">
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Username</label>
                        <input type="text"
                            placeholder='Student No/ Employee No'
                            className='p-2 font-medium border-2 border-gray-300 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Username</label>
                        <input type="text"

                            placeholder='Enter your password'
                            className='p-2 font-medium border-2 border-gray-300 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className='flex justify-between items-center'>

                        <p className='gap-1 font-semibold text-[#3b3c98] md:text-lg text-sm flex items-center'>
                            <input type="checkbox" className='w-4 h-4' />
                            Remember me
                        </p>

                        <p className='font-semibold text-[#3b3c98] md:text-lg text-sm'>Forgot Pasword?</p>
                    </div>
                    <button className='w-full py-2 hover:rounded-lg cursor-pointer hover:scale-95 transition-all duration-500 text-white font-bold bg-[#3b3c98]'>Sign In</button>
                </form>
                <p className='font-semibold text-center mt-5 text-lg'>Don't have an account?
                    <span className='text-[#3b3c98] cursor-pointer font-bold'> Sign Up</span> </p>
                <p className='font-bold mt-3 text-[#3b3c98] text-center text-lg'>Copyright © 2025-HunterDev Softwares</p>
            </div>
        </div>
    );
};

export default Signup;
