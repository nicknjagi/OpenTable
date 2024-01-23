import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Navbar'
import Foot from '../components/Footer'

const Layout = () => {
  return (
    <div className="relative min-h-[100dvh] w-full">
      {/* navbar */}
      <div className="w-full px-6 border-b border-b-zinc-300">
        <Nav />
      </div>
      {/* outlet */}
      <Outlet />
      {/* footer */}
      <div className="w-full py-4 mt-8 bg-white px-6 border-t border-t-zinc-300 absolute bottom-0 left-1/2 -translate-x-1/2">
        <Foot />
      </div>
    </div>
  )
}

export default Layout
