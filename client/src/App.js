import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Restaurants from './pages/Restaurants'
import RestaurantDetail from './pages/RestaurantDetail'
import Reservations from './pages/Reservations'
import ReservationLayout from './layouts/ReservationLayout'
import RestaurantBookings from './pages/RestaurantBookings'
import RestaurantRegistration from './pages/RestaurantRegistration'
import RestaurantsProvider from './context/RestaurantsContext'
import UserProvider from './context/UserContext'

export default function App() {
  return (
    <UserProvider>
        <RestaurantsProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/restaurants/:id" element={<RestaurantDetail />} />
                <Route path="/reservations" element={<ReservationLayout />}>
                  <Route index element={<Reservations />} />
                  <Route path='restaurant' element={<RestaurantBookings />} />
                </Route>
                <Route path='/register_restaurant' element={<RestaurantRegistration /> }/>
              </Route>
            </Routes>
        </RestaurantsProvider>
    </UserProvider>
  )
}
