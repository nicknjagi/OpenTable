import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Swal from 'sweetalert2';
import { Button } from 'flowbite-react';

const Profile = () => {
    const { currentUser, setCurrentUser, logout } = useContext(UserContext);
    function deleteProfile(){
        fetch(`/users`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser.token}`,
            }
        })
       .then(data => {
            console.log('Success:', data);
            Swal.fire({
                title: 'Deleted!',
                text: 'Your profile has been deleted.',
                icon: 'success'
            }).then(() => {
                logout();
            });
        }).catch((error) => {
            console.error('Error:', error);
            Swal("Error!", "There was a problem deleting the profile.", "error");
        });
    }

    const { id } = useParams();
    return (
        <div className="container mx-auto mt-5 text-gray-600">
            <div className="flex flex-wrap -mx-5">
                <div className="w-full px-5">
                    <div className="my-5">
                    <div className="flex items-center space-x-4">
    <h3 className="text-lg font-semibold">My Profile</h3>
    <Link to={'/update_profile'}>
        <Button gradientDuoTone="cyanToBlue">Update Profile</Button>
    </Link>
    <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: 'gray',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteProfile();
                }
            });
        }}
    >
        Delete
    </button>
</div>

                            <hr />
                        </div>
                        <form className="file-upload">
                            <div className="flex flex-wrap mb-5 -mx-5">
                                <div className="w-full lg:w-2/3 px-5 mb-5 lg:mb-0">
                                    <div className="p-4 bg-gray-200 rounded">
                                <div className="grid grid-cols-2 gap-3">
                                    <h4 className="col-span-2 mb-4 mt-0 text-lg font-semibold">My detais</h4>
                                    <div>
                                        <label className="form-label"> Username *</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="" aria-label="First name" defaultValue={currentUser ? currentUser.username : ''} disabled/>
                                    </div>
                                    <div>
                                        <label className="form-label">First Name *</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="" aria-label="First name" defaultValue={currentUser ? currentUser.first_name : ''} disabled/>
                                    </div>
                                    <div>
                                        <label className="form-label">Last Name *</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="" aria-label="Last name" defaultValue={currentUser ? currentUser.last_name : ''} disabled/>
                                    </div>
                                    <div>
                                        <label className="form-label">Phone number *</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="" aria-label="Phone number" defaultValue={currentUser ? currentUser.contact_info : ''}disabled />
                                    </div>
                                    <div>
                                        <label className="form-label" htmlFor="inputEmail4">Email *</label>
                                        <input type="email" className="w-full p-2 border border-gray-300 rounded" id="inputEmail4" defaultValue={currentUser ? currentUser.email : ''} disabled/>
                                    </div>
                                    <div>
                                        <label className="form-label">Password *</label>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="" aria-label="Phone number" defaultValue= '*******' disabled/>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-5">
                                <div className="p-4 bg-gray-200 rounded">
                        <div className="grid grid-cols-1 gap-3">
                            <h4 className="mb-4 mt-0 text-lg font-semibold">My profile photo</h4>
                            <div className="text-center">
                                <div className="h-64 w-64 mx-auto border border-gray-300 bg-white rounded">
                                    {currentUser && currentUser.profile_img ? (
                                        <img src={currentUser.profile_img} alt="Profile" className="object-cover h-64 w-64 rounded" />
                                    ) : (
                                        <div className="square position-relative display-2 mb-3">
                                            <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary" style={{fontSize: '3rem'}}></i>
                                        </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

export default Profile;
