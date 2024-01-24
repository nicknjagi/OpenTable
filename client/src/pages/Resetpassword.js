import React,{useState,useContext, useEffect} from 'react'
import Swal from "sweetalert2"
import {useNavigate} from "react-router-dom"


export default function Resetpassword() {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [onchange, setOnchange] = useState(false)
    const navigate = useNavigate()


    function reset(username,email){
        fetch("/reset_password",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({username,email})
        })
        .then((res)=> res.json())
        .then(response =>{
            if(response){
                navigate("/login")
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: response.message,
                    showConfirmButton: false,
                    timer: 1500
                    });
            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: response.error,
                    showConfirmButton: false,
                    timer: 1500
                    });
                    setOnchange(!onchange)
            }
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        response(username, email)

        setUsername("")
        setEmail("")
    }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md mx-auto mt-24 px-4 flex-col gap-4">
      <h3 className="text-2xl text-center">Reset Password</h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          id="username"
          name='username'
          type="text"
          value={username}
          onchange={(e)=> setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput id="password" name='password' type="password" 
        value={email} onChange={(e)=> setEmail(e.target.value)} required />
      </div>
      <Button gradientDuoTone="cyanToBlue" type="submit">
        Reset
      </Button>
      <p>
        Don't have an account? 
        <Link className="text-cyan-500 ml-1" to="/signup">
           Sign Up
        </Link>
      </p>
    </form>
  )
}
