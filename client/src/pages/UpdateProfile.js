import {React, useContext, useState, useEffect} from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import { UserContext } from '../context/UserContext';
import Swal from "sweetalert2"

export default function UpdateProfile() {
const { currentUser, setCurrentUser } = useContext(UserContext);

const [user, setUser] = useState({
  username: currentUser ? currentUser.username : '',
  email: currentUser ? currentUser.email : '',
  profile_img: currentUser ? currentUser.profile_img : '',
  contact_info: currentUser ? currentUser.contact_info : '',
  first_name: currentUser ? currentUser.first_name : '',
  last_name: currentUser ? currentUser.last_name : ''
});

const handleSubmit = (event) => {
    event.preventDefault();
  
    setUser({
      id : currentUser.id,
      username: event.target.username.value,
      email: event.target.email.value,
      profile_img: event.target.profilepicture.value,
      contact_info: event.target.phone.value,
      first_name: event.target.firstname.value,
      last_name: event.target.lastname.value
    });
  
    fetch(`/users`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`,
      },
      body: JSON.stringify(user),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(data => {
      setCurrentUser({
        ...currentUser,
        ...data,
      });
      Swal.fire("Success", "Profile updated successfully", "success");
    })
    .catch(error => {
      Swal.fire("Error", error.message, "error");
    });
  };
console.log(JSON.stringify(user));
  return (
    <div>
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto mt-24 px-4 flex-col gap-4">
      <h3 className="text-2xl text-center">Update Profile</h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          id="username"
          name='username'
          type="text"
          required
          defaultValue={currentUser ? currentUser.username : ''}
          placeholder='Type username here'
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput id="email" name='email' type="text" 
        defaultValue={currentUser ? currentUser.email : ''}
        placeholder='Type email here'
        required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="firstname" value="First Name" />
        </div>
        <TextInput id="firstname" name='firstname' type="text" 
        defaultValue={currentUser ? currentUser.first_name : ''}
        placeholder='Type first name here'
         />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="lastname" value="Last Name" />
        </div>
        <TextInput id="lastname" name='lastname' type="text" 
        defaultValue={currentUser ? currentUser.last_name : ''}
        placeholder='Type last name here'
         />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Phone" />
        </div>
        <TextInput id="phone" name='phone' type="text" 
        defaultValue={currentUser ? currentUser.contact_info : ''}
        placeholder='Type phone number here'
         />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="profilepicture" value="Profile picture" />
        </div>
        <TextInput id="profilepicture" name='profilepicture' type="url" 
        defaultValue={currentUser ? currentUser.profile_img : ''}
        placeholder='Paste image link here'
         />
      </div>
      <Button gradientDuoTone="cyanToBlue" type="submit">
        Update
      </Button>
    </form>
    </div>
  )
}
