import React from 'react'
import { Button, Textarea, Label, TextInput } from 'flowbite-react'

const RestaurantRegistration = () => {
  return (
    <form className="flex max-w-md mx-auto px-4 mt-12 flex-col gap-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Register your restaurant
      </h2>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Restaurant name" />
        </div>
        <TextInput id="name" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Phone" />
        </div>
        <TextInput id="phone" type="text" required />
      </div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <Textarea id="description" required rows={4} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="image" value="Image" />
        </div>
        <TextInput id="image" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="location" value="Location" />
        </div>
        <TextInput id="location" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="capacity" value="Capacity" />
        </div>
        <TextInput id="capacity" type="number" min='1' required />
      </div>
      <Button gradientDuoTone="cyanToBlue" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default RestaurantRegistration
