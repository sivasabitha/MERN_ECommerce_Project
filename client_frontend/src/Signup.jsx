import { useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Signup.css';

function Signup() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [confirmpassword, setConfirmPassword] = useState();
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name && !email && !password && !confirmpassword) {
            alert("All text fields are required!");
            return;
        }
        else if (!name && !email ){
            alert("Must filled name and email text fields")
            return;
        }
        else if (!email && !password){
            alert("Must filled email and password text fields")
            return;
        }
        else if (!password && !name){
            alert("Must filled name and password text fields")
            return;
        }
        else if (!name && !email && !password){
            alert("Must filled name,email and password text fields")
            return;
        }
        else if (!email && !password && !confirmpassword){
            alert("Must filled email, password and confirm password text fields")
            return;
        }
        else if (!password && !confirmpassword && !name){
            alert("Must filled name,password and confirmpassword text fields")
            return;
        }
        else if (!name){
            alert("Must filled name text field")
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

        else if (!confirmpassword){
            alert("Must filled Confirmpassword text field")
            return;
        }
        
        if (password !== confirmpassword) {
            alert("Passwords do not match!");
            return;
          }


        axios.post('http://localhost:3001/register', {name,email,password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }

return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-3 rounded w-25">
        <h2> Create a account </h2>
        <form onSubmit={handleSubmit}>

        {/* User Name field*/}
        <div className="mb-3">
            <label htmlFor="name"> 
                <strong>Name</strong>
            </label>
            <input 
               type="text"
               placeholder="Enter your name"
               autoComplete="off"
               name="Name"
               className="form-control rounded-0"
               onChange={(e) => setName(e.target.value)}
            />
        </div>

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
            <label htmlFor="password">
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

        {/* User Confirm Password field */}
        <div className="mb-3">
            <label htmlFor="confirmPassword">
              <strong>Confirm Password</strong>
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              name="confirmPassword"
              className="form-control rounded-0"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">
        Sign-up
        </button>
        <p>Yes i  have an Account</p>
        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
        Login
        </Link>
        </form>
        </div>
    </div>

);

}

export default Signup;