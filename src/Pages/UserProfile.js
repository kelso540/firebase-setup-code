import React, { useState } from 'react';
import { getAuth } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {

    const navigate = useNavigate();

    const [name, setName] = useState(null); 
    const [img, setImg] = useState(null); 
    const [userInfo , setUserInfo] = useState({}); 

    //***************GET USER INFO******************
    useState(()=>{
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
          // The user object has basic properties such as display name, email, etc.
          setUserInfo({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
          }); 

          // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getToken() instead.
          // const uid = user.uid;
        };
    }, []); 

    //***************SET USER INFO******************
    const changeInfo = (e)=>{
        e.preventDefault();
        const setInfo = getAuth();
        updateProfile(setInfo.currentUser, {
          displayName: name, photoURL: img,
        })
        .then(() => {
            const auth = getAuth();
            const user = auth.currentUser;
            setUserInfo({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
            }); 
        })
        .catch((error) => {
            console.log(error); 
        });
    };

    const handleName = (e)=>{
        setName(e.target.value);
    };
    const handleImg = (e)=>{
        setImg(e.target.value);
    };



  return (
    <div>
        <h1>Your Info</h1>
        <p>{userInfo.displayName}</p>
        <p>{userInfo.email}</p>
        <img src={userInfo.photoURL} alt='Avatar' />
        <h2>Update your profile</h2>
        <form onSubmit={changeInfo}>
            <label>Display Name</label>
            <input type='name' onChange={handleName} />
            <label>Img Url</label>
            <input type='text' onChange={handleImg} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
