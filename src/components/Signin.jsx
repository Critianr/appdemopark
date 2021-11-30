import React, {Fragment, useRef} from "react";
import logosig from '../assets/img/img-l.jfif'
import '../assets/css/signin.css'
import {useNavigate} from 'react-router-dom'
import { Navigate } from "react-router-dom";
import axios from "axios";
import authHelper from '../helpers/auth.helper';
import User from "../models/user";

const divStyle = {
  // backgroundImage: `url(${imgMyimageexample})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh' 
};

export default function Signin(){
  let navigate = useNavigate()

  const email = useRef();
  const pass = useRef();

  const signIn = async (e) => {
    e.preventDefault();
      let form = new URLSearchParams()
      form.append('email', email.current.value)
      form.append('password' , pass.current.value)
      // const data = await axios.post()
      console.log(process.env.REACT_APP_API_URL)
      const data = await axios.post(process.env.REACT_APP_API_URL + 'auth/login', form,{
          header:{'Accept': 'application/json'}
      } )
      authHelper.setToken(data.data.token)
      let userData = data.data.token.user
      let user = new User(userData._id, userData.name, userData.email)
      console.log(user)
      console.log(data)
      console.log(data.data)
      navigate('/index')
  }
    return(
      !authHelper.getToken() ?
      <Fragment>

      <div className="banner-inicio" style={divStyle}>
        <main className="form-signin text-center">
        {/* <div> */}
        <form>
          <img className="mb-4" src={logosig} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal text-white">Please sign in</h1>
      
          <div className="form-floating">
            <input ref={email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input ref={pass} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="pass">Password</label>
          </div>
      
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button onClick={signIn} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </main>
      </div>
      </Fragment> :

      <Navigate to={'/index'} />
    );
}
