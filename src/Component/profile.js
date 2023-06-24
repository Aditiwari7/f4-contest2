import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state=>state.user.id)
    const [user, setUser] = useState({});
    useEffect(() => {
        const id = localStorage.getItem('id');

        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type:"SET_USER",
                    payload: data
                });
                setUser(data)
            })
            .catch(err=>console.log(err))
    }, [dispatch, userId]);

    return (
        <div>
            <h2>Profile</h2>
            <div className='container'>
                <div className='basic-details'>
                    <img src={user.image} alt="profilePic"/>
                    <div>Username: {user.username} </div>
                    <div className='fullname'>Name: {user.firstName} {user.lastName}</div>
                    
                </div>
                <div className='more-details'>
                    {/* <div className='fullname'>Name: {user.firstName} {user.lastName}</div> */}
                    <div>Date of Birth: {user.birthDate} </div>
                    <div>Age: {user.age} </div>
                    <div>Gender: {user.gender} </div>
                    <div>Email: {user.email} </div>
                    <div>Phone: {user.phone} </div>
                    <div>Domain: {user.domain} </div>
                    <div>IP Address: {user.ip} </div>
                    <div>User Agent: {user.userAgent}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage


{/* <div>
            <h2>Profile</h2>
            <div className='container'>
                <div className='basic-details'>
                    <img src={user.image} alt="profilePic"/>
                    <div>{user.username} </div>
                </div>
                <div className='more-details'>
                    <div>Name: {user.firstName} {user.lastName}</div>
                    <div>Date of Birth: {user.birthDate} </div>
                    <div>Age: {user.age} </div>
                    <div>Gender: {user.gender} </div>
                    <div>Email: {user.email} </div>
                    <div>Phone: {user.phone} </div>
                    <div>Domain: {user.domain} </div>
                    <div>IP Address: {user.ip} </div>
                    <div>User Agent: {user.userAgent}</div>
                </div>
            </div>
        </div> */}