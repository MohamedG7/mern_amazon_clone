import React, { useState } from 'react';
import { useUser } from '../Server/Context/Hooks/userHook';
import { Link, useHistory } from 'react-router-dom';
import '../style/style.css';


function Login() {
    const history = useHistory();
    const { login } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
      e.preventDefault();
      login({email, password});
      history.push("/");
    };
    const signUp = e => {
      e.preventDefault();
      history.push("/register");
    };
    return (
        <div className = "login">
            <Link to = "/">
              <img className = "login__logo" src = "https://pngimg.com/uploads/amazon/amazon_PNG12.png" alt = "" />
            </Link>
            <div className = "login__container">
              <h1>Sign In</h1>
              <form>
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
                <button className = "login__signInBtn" type = 'submit' onClick = {signIn}>Sign In</button>
              </form>
              <p> This Is Amazon Clone It's So Cool bro </p>
              <p>
                 You Don't Have An Account create one 
              </p>
              <button className = "login__signUpBtn" type = 'submit' onClick = {signUp}>Sign Up</button>
            </div>
        </div>
    )
}

export default Login
