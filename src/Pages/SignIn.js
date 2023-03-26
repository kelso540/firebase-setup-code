import React, { useEffect, useState } from 'react'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

    const navigate = useNavigate(); 

    const [email, setUsername] = useState(null); 
    const [password, setPassword] = useState(null);
    const [signedIn, setSignedIn] = useState(null); 

    const handleUser = (e)=>{
        setUsername(e.target.value); 
    }; 
    const handlePass = (e)=>{
        setPassword(e.target.value); 
    }; 

    const signUp = (e)=>{
        e.preventDefault(); 
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user); 
          navigate('/user'); 
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`Error ${errorCode} ${errorMessage}`);
        });
    }; 

  return (
    <form onSubmit={signUp}>
        <label>Username</label>
        <input type='text' name='name' onChange={handleUser} />
        <label>Password</label>
        <input type='text' name='name' onChange={handlePass} />
        <button type='submit'>Sign Up</button>
        <p>{signedIn}</p>
    </form>
  )
}
