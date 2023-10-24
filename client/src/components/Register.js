import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

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
                        history("/")
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
        <div className="Register">
            <h1> Register </h1>

            <form action="POST">
                <input type="text" onChange={(e) => {setUsername(e.target.value)}} placeholder="Username"/>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"/>
                <input type="submit" onClick={Authorization} />
            </form>
        </div>
    )
}

export default Register