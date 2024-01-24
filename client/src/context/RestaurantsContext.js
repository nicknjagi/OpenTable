import { createContext, useEffect, useState } from "react";


export const RestaurantsContext = createContext()

export default function RestaurantsProvider({children}){
    const [restaurants, setRestaurants] = useState([])
    const [onchange, setOnchange] = useState(false)

    const authToken = sessionStorage.getItem('authToken')

    useEffect(()=>{
        getAllRestaurants()
    },[onchange])

    function getAllRestaurants(){
        fetch('/restaurants')
        .then(res => res.json())
        .then(data => setRestaurants(data))
    }

    function getRestaurantById(id){
        fetch(`/restaurants/id`)
          .then((res) => res.json())
          .then((data) => data)
    }

    const contextData = {restaurants}

    return (
        <RestaurantsContext.Provider value={contextData} >
            {children}
        </RestaurantsContext.Provider>
    )

}