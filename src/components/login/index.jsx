
import React, { useState, useEffect} from 'react';
import { TextField } from '@mui/material/';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./index.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [ password, setPassword] = useState("")

  const navigate = useNavigate()

  const getValueEmail = (e) => {
    let valueEmail = e.target.value 
    if ( valueEmail !== ""){
      setEmail(valueEmail)
    }
  }
  const getValuePassword = (e) => {
    let valuePassword = e.target.value 
    if ( valuePassword !== ""){
      setPassword(valuePassword)
    }
  }
  const getToken = () => {
    let data = {
      email: email,
      password: password
    }
    axios.post("https://62913677665ea71fe142a512.mockapi.io/api/v1/login/", data)
    .then((res) => {
      let token = res.token
      localStorage.setItem("token", token)
      navigate("/feed/")
    })
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
        id="outlined-basic" 
        label="Email" 
        variant="outlined"
        margin="normal"
        type="email"
        onChange={getValueEmail}
      />
      <TextField 
        id="outlined-basic" 
        label="Password" 
        variant="outlined"
        margin="normal"
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
