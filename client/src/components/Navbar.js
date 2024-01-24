import { Navbar, Button } from 'flowbite-react'
import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function Nav() {
    const {currentUser, logout} = useContext(UserContext)
  return (
    <Navbar fluid className="max-w-[1280px] px-0 mx-auto">
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Open Table
      </span>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex px-4 md:px-0 flex-col md:flex-row gap-4 items-end md:items-center">
          <NavLink
            className={({ isActive }) => (isActive ? 'text-cyan-500' : null)}
            to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-cyan-500' : null)}
            to="/restaurants">
            Restaurants
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-cyan-500' : null)}
            to="/reservations">
            Reservations
          </NavLink>
          {currentUser ? (
            <NavLink
              className={({ isActive }) => (isActive ? 'text-cyan-500' : null)}
              to="/login">
              <Button onClick={logout} gradientDuoTone="cyanToBlue" size="xs">
                Logout
              </Button>
            </NavLink>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-cyan-500' : null
                }
                to="/login">
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-cyan-500' : null
                }
                to="/signup">
                <Button gradientDuoTone="cyanToBlue" size="xs">
                  Sign Up
                </Button>
              </NavLink>
            </>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}
