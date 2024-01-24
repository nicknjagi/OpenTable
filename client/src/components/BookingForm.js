import React, { useContext } from 'react'
import { Button, Datepicker, Label, TextInput } from 'flowbite-react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const BookingForm = ({ onchange, setOnchange }) => {
  const { authToken } = useContext(UserContext)
  const { id } = useParams()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const dataObj = Object.fromEntries(formData)
    fetch('/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken && authToken}`,
      },
      body: JSON.stringify({ ...dataObj, restaurant_id: id }),
    }).then(res => {
        setOnchange(!onchange)
        navigate('/reservations')
    })
  }
  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <h5 className="text-2xl font-semibold text-center">Make a reservation</h5>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="date" value="Pick a date" />
        </div>
        <Datepicker name="booking_name" id="date" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="size" value="Party size" />
        </div>
        <TextInput
          className="w-24"
          id="size"
          name="party_size"
          type="number"
          min="1"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <label className="font-semibold text-sm" htmlFor="time">
            Time
          </label>
        </div>
        <input
          className="rounded-lg border border-neutral-300 focus:border-transparent focus:outline-cyan-100"
          type="time"
          id="time"
          name="booking_time"
          required
        />
      </div>
      <Button gradientDuoTone="cyanToBlue" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default BookingForm
