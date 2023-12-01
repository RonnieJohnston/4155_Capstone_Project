import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../assets/css/Register.css'

function Register() {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()

    async function Authorization(e) {
        e.preventDefault()

        try {
            await axios.post("http://localhost:8000/register",
                {
                    first, last, email, password
                })
                .then(res => {
                    if (res.data == "Exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "Not exist") {
                        sessionStorage.setItem('email', email)
                        history("/home")
                    } else if (res.data == "Fail") {
                        alert('Failure to add account');
                    } else if (res.data == "Invalid") {
                        alert("Invalid email");
                    }
                })
                .catch(res => {
                    alert("Wrong details")
                    console.log(e)
                })
        }
        catch (e) {
            console.log(e)
        }
    }

    const validateEmail = (input) => {
        // Use a regular expression for basic email validation.
        const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        return emailRegex.test(input);
    };

    return(
        <body className='page'>
        <div className="register-page">
            <div className='register-page-contents'>
                <div className='register-page-icon'>
                    <img className='DC-icon' src='/images/DC-icon.png' alt='declassified icon' />
                </div>
                <div className="register-page-text-container">
                    <h1 className="mt-3"> Register </h1>
                    <form action="POST">
                        <div className="mb-3">
                            <input type="text" className="form-control mb-4" onChange={(e) => {setFirst(e.target.value)}} placeholder="First Name"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control mb-4" onChange={(e) => {setLast(e.target.value)}} placeholder="Last Name"/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control mb-4" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-outline-light" onClick={Authorization}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
    )
}

export default Register