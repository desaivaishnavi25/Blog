import React from 'react';
import {Link} from "react-router-dom";
import "./topbar.css";
import { useContext } from 'react';
import { Context } from '../../context/Context';


export default function Topbar() {
  const {user , dispatch} = useContext(Context);
  
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"});
  }
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className='topListItem'>
            <Link className="Link" to="/">HOME</Link>
            </li>
            <li className='topListItem'>
            <Link className="Link" to="/about">ABOUT</Link>
            </li>
            <li className='topListItem'>
            <Link className="Link" to="/write">WRITE</Link>
              </li>
            <li className='topListItem' onClick={handleLogout}>
            {user && "LOGOUT"}
              </li>
        </ul>
      </div>
      <div className="topRight">
       
        {
          user? (
            
            <Link to="settings">
            <img className="topImg" src="https://source.unsplash.com/random/900x700/?people" alt="" />
            </Link>
            
           
          ) : (
            <ul className='topList'>
              <li className='topListItem'><Link className="Link" to="/login">LOGIN</Link>
              </li>
              <li className='topListItem'><Link className="Link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }
            
        {
          user? (
            <i className="username">
                {user.username}
            </i>
            
          ):(
            <div></div>
          )
        }
      
        
      </div>

    </div>
  )
}



