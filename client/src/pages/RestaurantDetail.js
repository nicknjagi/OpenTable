import React from 'react'
import peopleOutline from '../assets/images/people-outline.svg'
import locationOutline from '../assets/images/location-outline.svg'
import Review from '../components/Review'
import BookingForm from '../components/BookingForm'

const RestaurantDetail = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4">
      <h2 className="text-3xl font-semibold my-12">The restaurant name</h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="w-full max-w-[670px]">
          <img
            className="rounded-2xl w-full"
            src="https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1674825837.jpg?fit=around|562.5:360&crop=562.5:360;*,*"
            alt=""
          />
          <h3 className="mt-6 mb-4 text-2xl">About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            rerum nemo doloribus, vel error, molestias aliquid at neque, quam
            reprehenderit dolor minus est libero? Sunt distinctio eligendi
            adipisci quia optio facere, quod natus unde. Deleniti commodi
            veritatis quidem facere incidunt!
          </p>
          <div className="flex gap-6 mt-4">
            <p className="flex gap-2">
              {' '}
              <img className="w-5" src={peopleOutline} alt="restaurant icon" />
              Available seats 30
            </p>
            <p className="flex gap-2">
              {' '}
              <img
                className="w-5"
                src={locationOutline}
                alt="restaurant icon"
              />
              4740 Baum Blvd, Pittsburgh
            </p>
          </div>
        </div>
        <BookingForm />
      </div>
    <div className="mt-12 w-full max-w-[800px] mx-auto">
        <h5 className='text-xl text-center'>Reviews</h5>
        <ul className='flex flex-col gap-4 mt-4'>
            {Array.from([1, 2, 3, 4, 5, 6]).map((i) => {
            return <Review key={i} />
            })}
        </ul>
    </div>
    </section>
  )
}

export default RestaurantDetail
