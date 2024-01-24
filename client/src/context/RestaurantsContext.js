import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const RestaurantsContext = createContext()

export default function RestaurantsProvider({children}){
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [onchange, setOnchange] = useState(false)
    const navigate= useNavigate()

    const authToken = sessionStorage.getItem('authToken')

    useEffect(()=>{
        getAllRestaurants()
    },[onchange])

    function getAllRestaurants(){
        fetch('/restaurants')
        .then(res => res.json())
        .then(data => {
            setRestaurants(data)
            setIsLoading(false)
        })
    }

    function addRestaurant(restaurant){
        fetch('/restaurants', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken && authToken}`,
          },
          body: JSON.stringify({...restaurant}),
        })
          .then((res) => res.json())
          .then((response) => {
            navigate('/restaurants')
            setOnchange(!onchange)
          })
    }

    const contextData = {
        restaurants,
        addRestaurant,
        isLoading
    }

    return (
        <RestaurantsContext.Provider value={contextData} >
            {children}
        </RestaurantsContext.Provider>
    )

}