import React from 'react'

const Booking = () => {
  return (
    <li className="border border-zinc-300 py-2 px-4 max-w-lg rounded-md">
      <div className="flex gap-4 items-center my-2">
        <img
          className="w-12 h-12 rounded-full object-cover object-top"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile pic"
        />
        <span>Sasrah</span>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        minima cumque quasi, inventore delectus ratione distinctio consectetur
        porro itaque quidem?
      </p>
      <div className="flex justify-between mt-2">
        <span>
        
        </span>
        <small>23/01/2024</small>
      </div>
    </li>
  )
}

export default Booking
