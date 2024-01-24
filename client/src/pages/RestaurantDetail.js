import React, { useContext, useEffect, useState } from 'react'
import peopleOutline from '../assets/images/people-outline.svg'
import locationOutline from '../assets/images/location-outline.svg'
import callOutline from '../assets/images/call-outline.svg'
import Review from '../components/Review'
import BookingForm from '../components/BookingForm'
import { Link, useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import AddReviewForm from '../components/AddReviewForm'

const RestaurantDetail = () => {
  const [restaurant, setRestaurant] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(true)
  const {id}= useParams()

  useEffect(()=> {
    setIsLoading(true)
    setError(false)
    fetch(`/restaurants/${id}`)
      .then((res) => {
        if(res.status === 404){
            setError(true)
            return
        }
        return res.json()
      })
      .then((data) =>{
         setRestaurant(data)
         setIsLoading(false)
      })
  },[])

  if (isLoading) return <h2 className='text-2xl text-center mt-12'>Loading...</h2>
  
  if (error) return <h2 className='text-2xl text-center mt-12'>Restaurant not found</h2>


  return (
    <section className="w-full max-w-[1280px] mx-auto px-4">
      <h2 className="text-3xl font-semibold my-12">{restaurant.name}</h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20">
        <div className="w-full max-w-[670px]">
          <img
            className={restaurant.restaurant_img}
            alt=""
          />
          <h3 className="mt-6 mb-4 text-2xl">About</h3>
          <p>
            {restaurant.description}
          </p>
          <div className="flex flex-wrap flex-col md:flex-row gap-6 mt-4">
            <p className="flex gap-2">
              {' '}
              <img className="w-5" src={peopleOutline} alt="icon" />
              Available seats {restaurant.capacity}
            </p>
            <p className="flex gap-2">
              {' '}
              <img
                className="w-5"
                src={locationOutline}
                alt="icon"
              />
              {restaurant.location}
            </p>
            <p className="flex gap-2">
              {' '}
              <img
                className="w-5"
                src={callOutline}
                alt="icon"
              />
              {restaurant.phone_no}
            </p>
          </div>
        </div>
        <BookingForm />
      </div>
      <div className="mt-12 w-full max-w-[800px] ">
        <h5 className="text-xl text-center mb-8">Reviews</h5>
        <ul className="flex flex-col gap-4 mt-4">
          {restaurant.reviews.map((review) => {
            return <Review review={review} key={review.id} />
          })}
        </ul>
        <AddReviewForm />
      </div>
      <Link to="/restaurants" className="text-cyan-500 mt-8 block">
        {' '}
        &lt; Back
      </Link>
    </section>
  )
}

export default RestaurantDetail
