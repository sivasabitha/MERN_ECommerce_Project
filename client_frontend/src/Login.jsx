import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import './Login.css';

function Login(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email && !password) {
            alert("Both fields are required!");
            return;
        }
        else if (!email){
            alert("Must filled Email text field")
            return;
        }
        else if (!password){
            alert("Must filled Password text field")
            return;
        }

        axios.post('http://localhost:3001/login', {email,password})
        .then(result => {console.log(result)
            if (result.data ==="Success") {
                navigate('/home')
            }

        })
        .catch(err => console.log(err))
    }

return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-3 rounded w-25">
        <h2> Login </h2>
        <form onSubmit={handleSubmit}>
        
        {/* User Email field*/}
        <div className="mb-3">
            <label htmlFor="email">
                <strong>E-Mail</strong>
            </label>
            <input 
               type="text"
               placeholder="Enter your Mail id"
               autoComplete="off"
               name="E-mail"
               className="form-control rounded-0"
               onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        {/* User Password field*/}
        <div className="mb-3">
            <label htmlFor="email">
                <strong>Password</strong>
            </label>
            <input
                 type="password"
                 placeholder="Enter your password"
                 name="Password"
                 className="form-control rounded-0"
                 onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <button type="submit" className="btn btn-success w-100 rounded-0">
        Shop now
        </button>
        <p>Don't have an account</p>
        <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Register
        </Link>
        </form>
        </div>
    </div>

);


}

export default Login;