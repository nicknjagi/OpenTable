import React, { useContext, useEffect, useState } from 'react'
import Booking from '../components/Booking'
import { UserContext } from '../context/UserContext'

const Reservations = () => {
    const [bookings, setBookings] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {authToken} = useContext(UserContext)

    useEffect(() => {
        setIsLoading(true)
        fetch('/bookings', {
          method:"GET",
          headers: {
            Authorization: `Bearer ${authToken && authToken}`,
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json()
            }
          })
          .then((data) => {
            setBookings(data)
            setIsLoading(false)
            console.log(data)
          })
    },[])

    if (isLoading)
        return <h2 className="text-2xl text-center mt-12">Loading...</h2>

  return (
    <ul className='my-12 flex flex-col gap-4'>
      {bookings?.map(booking => {
        return <Booking key={booking.id} booking={booking}/>
      })}
    </ul>
  )
}

export default Reservations
