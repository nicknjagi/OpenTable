import React from 'react'
import { Button, Datepicker, Label, TextInput } from 'flowbite-react'

const BookingForm = () => {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <h5 className="text-2xl font-semibold text-center">Make a reservation</h5>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="date" value="Pick a date" />
        </div>
        <Datepicker id="date" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="size" value="Party size" />
        </div>
        <TextInput className="w-24" id="size" type="number" min='1' required />
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
          name="time"
        />
      </div>
      <Button gradientDuoTone="cyanToBlue" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default BookingForm
