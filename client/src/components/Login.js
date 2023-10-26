import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../assets/css/App.css'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()

    async function Authorization(e) {
        e.preventDefault()

        try {
            await axios.post("http://localhost:8000/",
                {
                    username, password
                })
                .then(res => {
                    if (res.data === "Exist") {
                        sessionStorage.setItem('username', username)
                        history("/") //{state:{id:username}}
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
        <div className="Login container-xl border mt-5">
            <h1 className="mt-3"> Login </h1>

            <form action="POST">
                <input className="form-control mb-4" type="text" onChange={(e) => {setUsername(e.target.value)}} placeholder="Username"/>
                <input className="form-control mb-4" type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"/>
                <button type="submit" className="btn btn-dark" onClick={Authorization}>Submit</button>
            </form>
        </div>
        </body>
    )
}

export default Login