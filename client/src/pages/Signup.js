import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto my-16 px-4">
      <h3 className="text-2xl text-center">Create Account</h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput id="username" type="email" placeholder="username" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Confirm password" />
        </div>
        <TextInput id="password2" type="password" required />
      </div>
      <Button gradientDuoTone="cyanToBlue" type="submit">
        Signup
      </Button>
      <p>
        Already have an account?
        <Link className="text-cyan-500" to="/login">
          {' '}
          Login
        </Link>
      </p>
    </form>
  )
}

export default Signup
