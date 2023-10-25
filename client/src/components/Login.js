import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

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
                        history("/", {state:{id:username}})
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
        <div className="Login">
            <h1> Login </h1>

            <form action="POST">
                <input type="text" onChange={(e) => {setUsername(e.target.value)}} placeholder="Username"/>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"/>
                <input type="submit" onClick={Authorization} />
            </form>

            <br />
            <Link to="/register"> Register Here </Link>
        </div>
    )
}

export default Login