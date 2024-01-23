import React from 'react'
import RestaurantCard from '../components/RestaurantCard'

const Restaurants = () => {
  return (
    <main className="px-6">
      <h1 className="text-2xl md:text-4xl text-center my-12">
        Book a reservation at a restaurant of your choosing.
      </h1>
      <section className="w-full justify-center mb-12 max-w-[1280px] mx-auto flex flex-wrap gap-x-4 gap-y-6">
       {Array.from([1,2,3,4,5,6]).map((i) => {
        return <RestaurantCard id={4} key={i} />
       })}
      </section>
    </main>
  )
}

export default Restaurants
