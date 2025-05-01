import React, { useState } from 'react';
import { FaBell, FaSignOutAlt, FaUserCircle, FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png';
import image from '../assets/image.jpg'
import Navbar from '../components/Navbar';
import signature from '../assets/exodus.png'
import { WiRefresh } from "react-icons/wi";


const Home = () => {
  const [cardView, setCardView] = useState(false);
  const [cardView2, setCardView2] = useState(true);
  return (
    <div className="min-h-screen  bg-gray-100">
      <Navbar />
      <div className='justify-between flex'>
        <div
          className="w-full min-h-screen md:w-1/2 bg-opacity-80 md:flex hidden bg-cover bg-center bg-no-repeat items-center justify-center p-8"
          style={{ backgroundImage: "url('bg.png')" }}
        >
          <div
            onClick={() => setCardView(!cardView)}
            className="relative w-[350px] h-[200px]  cursor-pointer"
            style={{ perspective: 1000 }}
          >
            <div
              className={`w-full h-full transition-transform duration-900 ease-in-out transform-style-preserve-3d ${cardView ? 'rotate-y-180' : ''
                }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* FRONT SIDE */}
              <div className="absolute -left-5 shadow-black w-[400px] backface-hidden bg-white border border-gray-300 rounded-lg shadow-lg flex  items-center p-6">
                <img
                  src={image}
                  alt="Student"
                  className="w-28 h-36 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-bold text-center text-sm">
                      MACHAKOS UNIVERSITY<br />
                      <span className="text-xs font-semibold">STUDENT IDENTIFICATION CARD</span>
                    </h2>
                    <img src={logo} alt="Logo" className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold">NAME: Eugene Khanda</h3>
                  <p className="text-sm text-gray-600">ADM NO: J17-1861-2022</p>
                  <p className="text-sm text-gray-600">PROG: B.Sc (COMPUTER SCIENCE)</p>
                  <p className="text-sm font-semibold mt-3">VALID: 09/2022 - 04/2026</p>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute -left-5 w-[400px] shadow-black backface-hidden bg-white border border-gray-300 rounded-lg shadow-lg rotate-y-180 flex flex-col items-center text-sm text-center">
                <div className="w-full h-10 bg-black mt-4"></div>
                <p>This card remains a property of Machakos University</p>
                <p>P.O BOX 136-90100 MACHAKOS</p>
                <p>Tel +254 739 184 442</p>
                <p>Website: www.mksu.ac.ke</p>
                <p className="mt-2">If found please return to the above address</p>
                <p className="mt-4 font-semibold">Authorized Signature</p>
                <img className='h-10 w-50' src={signature} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className='md:w-1/2 w-full border-l  border-gray-400 flex flex-col'>
          <section className="bg-white p-6 mt-25 mx-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaSearch className="text-[#2c2e8b]" /> Search for Lost Student ID
            </h3>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter Registration Number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-[#2c2e8b] font-semibold cursor-pointer text-white px-4 py-2 rounded "
              >
                Search
              </button>
            </form>
          </section>
          {/* Hero Section */}
          <section className="bg-white p-6 mt-4 shadow rounded-xl  mx-2">
            <div className='justify-between flex items-center'>
              <h2 className="text-2xl font-semibold mb-2">Welcome, Eugene! <br /> <span className="text-gray-600 text-sm mb-4">Here's your student ID at a glance.</span> </h2>

              <div onClick={() => setCardView2(!cardView2)} className='w-10 relative  cursor-pointer h-10 rounded-full bg-[#2c2e8b]'>
                <WiRefresh onClick={() => setCardView2(!cardView2)} className='absolute  cursor-pointer animate-spin  text-white h-10 w-10' />
              </div>
            </div>

            {cardView2 ? (
              <div className='flex justify-center items-center'>
                <div className="flex flex-col items-center  border border-gray-300 rounded-lg p-0.5 bg-white shadow-md max-w-105">
                  <div className='p-4 flex'>

                    <img
                      src={image}
                      alt="Student"
                      className="md:w-32 w-18 h-28 md:h-40 object-cover rounded-md mr-4 mb-4 md:mb-0"
                    />

                    {/* Info on the right */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="md:font-bold md:text-sm text-xs">
                          MACHAKOS UNIVERSITY<br />
                          <span className="text-xs font-semibold">STUDENT IDENTIFICATION CARD</span>
                        </h2>
                        <img src={logo} alt="Logo" className="w-10 h-10" />
                      </div>

                      <h3 className="font-bold text-sm">NAME: Eugene Khanda</h3>
                      <p className="md:text-sm text-xs text-gray-600">ADM NO: J17-1861-2022</p>
                      <p className="md:text-sm text-xs text-gray-600">PROG: B.Sc (COMPUTER SCIENCE)</p>
                      <p className="md:text-sm text-xs font-semibold mt-3">VALID: 09/2022 - 04/2026</p>
                    </div>
                  </div>
                  <div className="w-full h-8 bg-[#2c2e8b] mb-2"></div>
                </div>

              </div>

            ) : (
              <div className='flex justify-center items-center'>
                <div className=" w-[400px]  bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center text-sm text-center">
                  <div className="w-full h-8 bg-[#2c2e8b] mt-2"></div>
                  <p>This card remains a property of Machakos University</p>
                  <p>P.O BOX 136-90100 MACHAKOS</p>
                  <p>Tel +254 739 184 442</p>
                  <p>Website: www.mksu.ac.ke</p>
                  <p className="mt-2">If found please return to the above address</p>
                  <p className="mt-4 font-semibold">Authorized Signature</p>
                  <img className='h-10 w-50' src={signature} alt="" />
                </div>
              </div>
            )}


          </section>

          {/* Quick Access Cards */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-4">
            {[
              { title: 'View My ID', icon: '🆔' },
              { title: 'Download ID', icon: '📥' },
              { title: 'Update Info', icon: '🔄' },
              { title: 'Application Status', icon: '🧾' },
            ].map((item, i) => (
              <div key={i} className="bg-white text-center py-6 rounded shadow hover:shadow-md transition">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </section>

          {/* Notifications */}
          <section className="p-4">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold mb-2">Notifications</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Your digital ID has been approved.</li>
                <li>Update your passport photo by May 10th.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div >
  );
}
export default Home;