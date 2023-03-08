import React from "react"
import style from "./SignUp.module.css"
import img from "../image/signup.svg"
import { useState } from "react"
import axios from "axios";
import base_url from '../Api/BootApi'
import { NavLink } from 'react-router-dom'
function SignUp() {
    const [user, setUser] = useState({});

    const handleform = (e) => {
        console.log(user);
        postDataServer(user)
        e.preventDefault();
    }
    const postDataServer = (data) => {
        axios.post(`${base_url}/users`, data).then(
            (response) => {
                console.log(response)
            },
            (error) => {
                console.log(error);
            }
        )
    }
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        // Show the alert
        setShowAlert(true);
    };
    return (
        <div className={style.container}>
            <button className='btn btn-primary'>
                <NavLink to="/login">Login In</NavLink>
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button className='btn btn-primary'>
                <NavLink to="/">Home</NavLink>
            </button>
            <h1 className={style.resume}><span className={style.col}>Resume </span>Builder</h1>
            <h2 className={style.log}>Create a new <span className={style.col}>Account</span></h2>
            <div className="row">
                <div className="col-md-6" >
                    <form onSubmit={handleform}>
                        <div className="col-md-5">
                            <label>First Name:</label>
                            <input type="text" id="firstName" className="form-control" name="first-name" required onChange={(e) => {
                                setUser({ ...user, firstName: e.target.value })
                            }} /><br />
                        </div>
                        <div className="col-md-5">
                            <label>Last Name:</label>
                            <input type="text" id="lastName" className="form-control" name="last-name" required onChange={(e) => {
                                setUser({ ...user, lastName: e.target.value })
                            }} /><br />
                        </div>
                        <div className="col-md-5">
                            <label>Date of Birth:</label>
                            <input type="date" id="date" className="form-control" name="dob" required onChange={(e) => {
                                setUser({ ...user, date: e.target.value })
                            }} /><br />
                        </div>
                        <div className="col-md-5">
                            <label>Gender:</label>
                            <select id="gender" name="gender" required onChange={(e) => {
                                setUser({ ...user, gender: e.target.value })
                            }}>
                                <option value="">--Please select--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select><br />
                        </div><br />
                        <div className="col-md-5">
                            <label>Email:</label>
                            <input type="email" id="email" className="form-control" name="email" required onChange={(e) => {
                                setUser({ ...user, email: e.target.value })
                            }} /><br />
                        </div>
                        <div className="col-md-5">
                            <label>Password:</label>
                            <input type="password" id="password" name="password" className="form-control" required onChange={(e) => {
                                setUser({ ...user, password: e.target.value })
                            }} /><br />
                        </div>
                        <div>
                            <button onClick={handleClick} class="btn btn-success">Show Alert</button>
                            {showAlert && (
                                <div className="alert alert-success" role="alert">
                                    SignUp Successfully!!!
                        </div>
                            )}
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className={style.img}>
                        <img src={img} width="fill" height="fill" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp