import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../assets/css/App.css'

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()

    async function Authorization(e) {
        e.preventDefault()

        try {
            await axios.post("http://localhost:8000/register",
                {
                    username, password
                })
                .then(res => {
                    if (res.data == "Exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "Not exist") {
                        sessionStorage.setItem('username', username)
                        history("/home")
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

    return(
        <body className='page'>
        <div className="Register">

        <div className="container-xl border mt-5">
            <h1 className="mt-3"> Register </h1>
            <form action="POST">
                <div className="mb-3"> 
                <input type="text"className="form-control mb-4" onChange={(e) => {setUsername(e.target.value)}} placeholder="Username"/>
                </div>
                <div className="mb-3"> 
                <input type="password" className="form-control" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-dark mb-4" onClick={Authorization}>Submit</button>
            </form>
        </div>
        </div>
    </body>
    )
}

export default Register