import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Signup />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </>
  )
}

export default App