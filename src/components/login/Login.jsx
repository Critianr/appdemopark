import axios from "axios";
import React, {Fragment, useRef} from "react";
// import { Fragment } from "react/cjs/react.development";
// import {useHistory} from 'react-router-dom';
import User from "../../models/user";
import {useNavigate} from 'react-router-dom'
import { Navigate } from "react-router-dom";


import authHelper from '../../../src/helpers/auth.helper';
import './login.css';

export default function Login(){

    // let history = useHistory()
    let navigate = useNavigate()

    const email = useRef();
    const pass = useRef();

    const signIn = async () => {
        let form = new URLSearchParams()
        form.append('email', email.current.value)
        form.append('password' , pass.current.value)
        // const data = await axios.post()
        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL + 'auth/login', form,{
            header:{'Accept': 'application/json'}
        } )
        authHelper.setToken(data.data.token.token)
        let userData = data.data.token.user
        let user = new User(userData._id, userData.name, userData.email)
        console.log(user)
        console.log(data)
        console.log(data.data)
        navigate('/')
    }
    return (
        !authHelper.getToken() ?
        <Fragment>
        <h1>Inicio de sesion</h1>
        <label htmlFor="email">E-mail</label>
        <input ref={email} type="email" name="" id="email" />
        <label htmlFor="pass">Contraseña</label>
        <input ref={pass} type="password" name="" id="pass" />
        <button onClick={signIn}>Ingresar</button>
        </Fragment> :
        <Navigate to={'/'} />
    )
}