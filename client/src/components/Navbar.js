import { Navbar, Button } from 'flowbite-react'
import {NavLink} from 'react-router-dom'
export default function Nav() {
  return (
    <Navbar fluid className="max-w-[1280px] px-0 mx-auto">
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Open Table
      </span>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex px-4 md:px-0 flex-col md:flex-row gap-4 items-end md:items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to='/Restaurants'>Restaurants</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">
            <Button gradientDuoTone="cyanToBlue" size="xs">
              Sign Up
            </Button>
          </NavLink>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}
