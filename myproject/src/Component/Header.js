import React from 'react'
import style from "./Header.module.css"
import img from "../image/main.svg"
import { NavLink } from 'react-router-dom'
function Header()
{
 
 return(
   <div className={style.container}>
 
    <div className={style.button} align="right">
      
    <button className='btn btn-primary'>
      <NavLink to="/login">Login In</NavLink>
    </button>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
    <button className='btn btn-primary'>
    <NavLink to="/signup">Sign Up</NavLink>
    </button>
    </div>
    <p className={style.heading}>Build a <span className={style.high}>Resume</span></p>
    <p className={style.heading}>Make your Own Resume</p>
    <p className={style.heading}>It's <span className={style.high}>Free</span></p>
    <div className={style.img}>
      <img src={img} className={img.main}/>
    </div>
   </div>
 )
}
export default Header
