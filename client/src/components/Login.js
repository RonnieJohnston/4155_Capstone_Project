import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../assets/css/Welcome.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()

    async function Authorization(e) {
        e.preventDefault()

        try {
            await axios.post("http://localhost:8000/",
                {
                    email, password
                })
                .then(res => {
                    if (res.data === "Exist") {
                        sessionStorage.setItem('email', email)
                        history("/home") //{state:{id:username}}
                    }
                    else if (res.data === "Not exist") {
                        alert("User hasn't signed in")
                    }
                })
                .catch(e => {
                    alert("Wrong details")
                    console.log(e)
                })
        }
        catch (e) {
            console.log(e)
        }
    }

    return(
        <body className='page'>
        <div className='welcome-page'>
            <div className='welcome-page-contents'>
                <div className='welcome-page-icon'>
                    <img className='DC-icon' src='/images/DC-icon.png' alt='declassified icon' />
                </div>
                <div className='welcome-page-text-container'>
                    <h1 className="mt-3"> Login </h1>
                    <form action="POST">
                        <input className="form-control mb-4" type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email"/>
                        <input className="form-control mb-4" type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"/>
                        <button type="submit" className="btn btn-outline-light" onClick={Authorization}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </body>
    )
}

export default Login