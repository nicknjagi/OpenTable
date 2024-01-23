import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <form className="flex max-w-md mx-auto mt-24 px-4 flex-col gap-4">
        <h3 className="text-2xl text-center">Login</h3>
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
      <Button type="submit">Login</Button>
      <p>Don't have an account? 
        <Link className='text-cyan-800' to='/signup'> Sign Up</Link>
      </p>
    </form>
  )
}

export default Login
