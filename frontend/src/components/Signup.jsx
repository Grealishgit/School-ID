import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Signup = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="min-h-screen flex w-full flex-col md:flex-row bg-white" >
            {/* Left Section */}
            <div className="w-full min-h-screen md:w-1/2 bg-opacity-80 flex bg-cover bg-center bg-no-repeat items-center justify-center p-8"
                style={{ backgroundImage: "url('bg.png')" }}>
                <p className="text-white text-center md:text-left text-4xl font-bold">Co-Creating Sustainable Futures</p>
            </div>

            {/* Right Section */}
            {isLogin && (
                <div className="w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-center p-8">
                    <img src={logo} alt="" className='w-25 h-28' />
                    <p className='text-[#3b3c98] text-center font-bold text-4xl'>Hi, welcome back</p>
                    <p className='font-semibold text-sm'>Please fill in your details to login</p>

                    <form className="flex flex-col  w-[350px] md:p-12 p-12 mt-5 bg-white rounded-md shadow-lg shadow-gray-300">
                        <div className='flex flex-col gap-2'>
                            <label className='font-bold'>Username</label>
                            <input type="text"
                                placeholder='Student No/ Employee No'
                                className='p-2 py-1  border-1 text-sm border-gray-300 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-bold'>Password</label>
                            <input type="password"

                                placeholder='Enter your password'
                                className='p-2 py-1  border-1 text-sm border-gray-300 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className='flex justify-between mt-2 mb-3 items-center'>

                            <p className='gap-1 font-semibold text-[#3b3c98]  text-sm flex items-center'>
                                <input type="checkbox" className='w-4 h-4' />
                                Remember me
                            </p>

                            <p className='font-semibold text-[#3b3c98]  text-sm'>Forgot Pasword?</p>
                        </div>
                        <button className='w-full py-1 hover:rounded-lg cursor-pointer hover:scale-95 transition-all duration-500 text-white font-bold bg-[#3b3c98]'>Sign In</button>
                    </form>
                    <p className='font-semibold text-center mt-5 text-sm'>Don't have an account?
                        <span onClick={() => setIsLogin(false)} className='text-[#3b3c98] cursor-pointer font-bold'> Sign Up</span> </p>
                    <p className='font-bold mt-3 text-[#3b3c98] text-center text-sm'>Copyright © 2025-HunterDev Softwares</p>
                </div>
            )}
            {!isLogin && (
                <div className="w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-center p-8">
                    <img src={logo} alt="" className='w-25 h-27' />
                    <p className='text-[#3b3c98] text-center font-bold text-4xl'>Account Registration</p>
                    <p className='font-semibold text-sm'>To sign up, kindly fill the form below</p>

                    <form className="flex flex-col md:w-[330px] w-[350px] md:p-10 p-12 mt-5 bg-white rounded-md shadow-lg shadow-gray-300">
                        <div className='flex flex-col gap-2'>
                            <label className='font-bold'>Username</label>
                            <input type="text"
                                placeholder='Student No/ Employee No'
                                className='pl-2 py-1 font-medium text-sm w-full border-1 border-gray-300 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-bold'>Password</label>
                            <input type="password"
                                placeholder='Enter your password'
                                className='p-2 py-1 font-medium border-1 text-sm border-gray-300 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-bold'>Confirm Password</label>
                            <input type="password"
                                placeholder='Confirm your password'
                                className='p-2 py-1 font-medium border-1 text-sm border-gray-300 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className='flex justify-end mt-2 mb-2'>
                            <div className="flex flex-row gap-4 justify-end items-center ">
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="userType" id="student" className="accent-blue-500 cursor-pointer" />
                                    <label htmlFor="student" className="text-sm font-medium ">Student</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="userType" id="employee" className=' cursor-pointer' />
                                    <label htmlFor="employee" className="text-sm font-medium">Employee</label>
                                </div>
                            </div>
                        </div>
                        <button className='w-full py-1.5 hover:rounded-lg cursor-pointer hover:scale-95 transition-all duration-500 text-white font-bold bg-[#3b3c98]'>Submit</button>
                    </form>
                    <p className='text-center mt-5 text-sm'>Already have an account?
                        <span onClick={() => setIsLogin(true)} className='text-[#3b3c98] cursor-pointer font-bold'> Log In</span> </p>
                    <p className='text-center mt-2 text-sm'>Copyright © 2025-HunterDev Softwares</p>
                </div>
            )}

        </div>
    );
};

export default Signup;
