
import React, { useState, useEffect} from 'react';
import { TextField } from '@mui/material/';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./index.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [ password, setPassword] = useState("")
  const [errors, setErrors] = useState({
    email: null,
    password: null
  })

  const navigate = useNavigate()

  const getValueEmail = (e) => {
    setErrors({
      email: null,
      password: errors.password
    })
    let valueEmail = e.target.value 
    setEmail(valueEmail)
  }
  const getValuePassword = (e) => {
    setErrors({
      password: null,
      email: errors.email
    })
    let valuePassword = e.target.value 
    setPassword(valuePassword)
  }
  const getToken = () => {
    let hasEmailErrors = false
    let hasPasswordErrors = false
    if( email === ""){
      setErrors({
        email: "Email is required",
        password: errors.password
      }) 
      hasEmailErrors = true
    }
    if( password === ""){
      setErrors({
        password: "Password is required",
        email: errors.email
      })
      hasPasswordErrors = true
    } 
    console.log(hasEmailErrors === false && hasPasswordErrors === false)
    if( hasEmailErrors === false && hasPasswordErrors === false) {
      let data = {
        email: email,
        password: password
      }
      axios.post("https://62913677665ea71fe142a512.mockapi.io/api/v1/login/", data)
      .then((res) => {
        let token = res.token
        // localStorage.setItem("token", token)
        // navigate("/feed/")
      })
    }
  }
  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token !== null){
      navigate("/feed/")
    }
  },[])
  return (
    <div className="login">
        <h1 className='tituloLogin'>Login</h1>
       <TextField 
        error={errors.email !== null}
        helperText={errors.email !== null ? errors.email : ""}
        id="outlined-basic" 
        label="Email" 
        variant="outlined"
        margin="normal"
        value={email}
        type="email"
        onChange={getValueEmail}
      />
      <TextField 
        error={errors.password !== null}
        helperText={errors.password !== null ? errors.password : ""}
        id="outlined-basic" 
        label="Password" 
        variant="outlined"
        margin="normal"
        value={password}
        type="password"
        onChange={getValuePassword}
       />
      <button
        className="buttonLogin"
        onClick={getToken}
        >
        Login
    </button>
    </div>
  );
}

export default Login;
