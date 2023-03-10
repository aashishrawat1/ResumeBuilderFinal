import React, { useState } from "react"
import axios from "axios"
import img from "../image/login.svg"
import { NavLink, useNavigate } from 'react-router-dom'
import style from './AdminLogin.module.css'
function AdminLogin()
{
    const [admin, setAdmin] = useState()
    const navigate=useNavigate();
    const handleform = (e) => {
      console.log(admin);
      postDataServer(admin)
      e.preventDefault();
    }
    const postDataServer = (data) => {
        axios.post("http://localhost:7071/admin/login", data).then(
          (response) => {
            alert("Admin Login success")
            navigate("/admincomponent");
            console.log(response)
          },
          (error) => {
            alert("wrong id password please try again")
            navigate("/admin");
            console.log(error);
          }
        )
      }
   return(
    <>
    <div className="container">
    <button className='btn btn-primary'>
      <NavLink to="/">Home</NavLink>
    </button>
    <h1 className={style.resume}><span className={style.col}>Resume</span>Builder</h1>
    <h2 className={style.log}>Log in to your <span className={style.col}>Account</span></h2>
    <div className="row">
      <div className="col-md-8">
        <form onSubmit={handleform} >
          <label>Email:</label>
          <input type="email" className="form-control" required onChange={(e) => {
            setAdmin({ ...admin, email: e.target.value })
          }} /><br />

          <label>Password:</label>
          <input type="password" className="form-control" required onChange={(e) => {
            setAdmin({ ...admin, password: e.target.value })
          }} /><br />
          <button class='btn btn-success'>Log in</button>
        </form>
        <div className="col-md-4">
          <img src={img} width={200} height={200} />
        </div>
      </div>
    </div>
  </div>
</>





   )
}
export default AdminLogin;