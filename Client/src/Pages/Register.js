import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useUser } from '../Server/Context/Hooks/userHook';
import '../style/style.css'

const Register = () => {
    const { register } = useUser();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const signUp = e => {
      e.preventDefault();
      register({
        email,
        username,
        password,
        confirmPassword
      });
      history.push("/");
    };
    return (
        <div className = "login">
        <Link to = "/">
          <img className = "login__logo" src = "https://pngimg.com/uploads/amazon/amazon_PNG12.png" alt = "" />
        </Link>
        <div className = "login__container">
          <h1>Sign In</h1>
          <form onSubmit = {signUp}>
            <h5> UserName </h5>
            <input 
              type = "text"
              value = {username}
              onChange = {e => setUsername(e.target.value)}
            />
            <h5> E-mail </h5>
            <input 
              type = "email"
              value = {email}
              onChange = {e => setEmail(e.target.value)}
            />
            <h5> Password </h5>
            <input 
              type = "password" 
              value = {password}
              onChange = {e => setPassword(e.target.value)}
            />
            <h5> Password </h5>
            <input 
              type = "password" 
              value = {confirmPassword}
              onChange = {e => setConfirmPassword(e.target.value)}
            />
            <button className = "login__signInBtn" type = 'submit'>Sign up</button>
          </form>
          <p> This Is Amazon Clone It's So Cool bro </p>
        </div>
    </div>
    )
}

export default Register
