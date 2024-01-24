import React from 'react'
import { Rating } from 'flowbite-react'

const Review = ({review}) => {
  
  return (
    <li className="border border-zinc-300 py-2 px-4 rounded-md">
      <div className='flex gap-4 items-center my-2'>
        <img className='w-12 h-12 rounded-full object-cover object-top'
          src={review.user.profile_img}
          alt="profile pic"
        />
        <span>{review.user.username}</span>
      </div>
      <p>
        {review.comment}
      </p>
      <div className="flex justify-between mt-2">
        <span>Rating: {" "} 
          {review.rating}
        </span>
        <small className='text-zinc-400'>{review.date_posted}</small>
      </div>
    </li>
  )
}

export default Review
