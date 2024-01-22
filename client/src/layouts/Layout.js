import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Navbar'
import Foot from '../components/Footer'

const Layout = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto">
      <Nav />
      <Outlet />
      <Foot />
    </div>
  )
}

export default Layout
