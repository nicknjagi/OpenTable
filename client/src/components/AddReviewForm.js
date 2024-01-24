import React from 'react'
import { Button, Textarea, Label, TextInput } from 'flowbite-react'

const AddReviewForm = () => {
  return (
    <form className="flex max-w-md flex-col gap-4 mt-4 mx-auto">
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="review" value="Add review" />
        </div>
        <Textarea id="review" name="review" required rows={4} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="rating" value="Rating" />
        </div>
        <TextInput
          id="rating"
          name="rating"
          type="number"
          min="1"
          max="5"
          required
        />
      </div>
      <Button type="submit" className="w-1/2">
        Add review
      </Button>
    </form>
  )
}

export default AddReviewForm
