import React from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import {Link} from "react-router-dom";
import { Context } from '../../context/Context';
import './login.css';
import axios from "axios";

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch,isFetching} = useContext(Context)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value
      })
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  };

  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
       <form className="loginForm" onSubmit={handleSubmit}>
        <label style={{"fontWeight":"bold"}}>Username</label>
        <input type="text" className='loginInput' ref={userRef}/>
        <label style={{"fontWeight":"bold"}}>Password</label>
        <input type="password" className='loginInput'  ref={passwordRef}/>
        <button className="loginButton" type="submit" disabled={isFetching}>
            Login
        </button>
       </form>
       <button className="loginRegisterButton">
            <Link className='Link' to="/register">Register</Link>
        </button>
       
        </div>
  );
}
