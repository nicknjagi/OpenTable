import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <form className="flex max-w-md mx-auto mt-24 px-4 flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
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
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <Button type="submit">Submit</Button>
      <p >Don't have an account? 
        <Link className='text-cyan-800' to='/signup'> Sign Up</Link>
      </p>
    </form>
  )
}

export default Login
