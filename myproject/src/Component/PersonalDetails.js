import style from "./PersonalDetails.module.css"
import img from "../image/photo.png"
import { useState } from "react"
import axios from "axios";
import base_url from '../Api/BootApi'
import Menu from "./Menu";
import { NavLink, useNavigate } from 'react-router-dom'
function PersonalDetails() {
     const [personal,setPersonal] = useState({});
     const navigate=useNavigate();
     const handleform =(e)=>
     {
        console.log(personal);
        postDataServer(personal)
        e.preventDefault();
     }
     const postDataServer = (data)=>
     {
        axios.post(`${base_url}/personal/2`,data).then(
          (response)=>{
            alert("Personal data added successfully")  
            navigate("/education")
            console.log(response)
          },
          (error)=>
          {
            console.log(error);
          }
        )
     }
    return (  <>
    <Menu/>
        <div className={style.container}>
            <h1 className={style.resume}><span className={style.col}>Resume</span>Builder</h1>
            <h2 className={style.log}>Personal <span className={style.col}>Details</span></h2>
            <div className="row">
                <div className="col-md-5">
                    <form onSubmit={handleform}>
                        <label for="first-name">First Name:</label>
                        <input type="text" id="firstName" name="first-name" className="form-control" required onChange={(e)=>{
                            setPersonal({...personal , firstName:e.target.value})
                        }} />

                        <label for="last-name">Last Name:</label>
                        <input type="text" id="lastName" name="last-name" className="form-control" required onChange={(e)=>{
                            setPersonal({...personal , lastName:e.target.value})
                        }} />

                        <label for="city">City:</label>
                        <input type="text" id="city" name="city" className="form-control" required onChange={(e)=>{
                            setPersonal({...personal , city:e.target.value})
                        }} />

                        <label for="country">Country:</label>
                        <input type="text" id="country" name="country" className="form-control" required onChange={(e)=>{
                            setPersonal({...personal , country:e.target.value})
                        }} />
                        <label for="pincode">Pincode:</label>
                        <input type="text" id="pincode" name="pincode" className="form-control" required onChange={(e)=>{
                            setPersonal({...personal , pincode:e.target.value})
                        }} /><br />

                        <label for="sex">Sex:</label>
                        <select id="gender" name="sex" required onChange={(e)=>{
                            setPersonal({...personal , gender:e.target.value})
                        }}>
                            <option value="">--Select--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select><br /><br />

                        <label for="state">State:</label>
                        <input type="text" id="state" name="state" className="form-control" required onChange={(e)=>{
                            setPersonal({...personal , state:e.target.value})
                        }} />

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" className="form-control" required onChange={(e)=>{
                            setPersonal({...personal , email:e.target.value})
                        }} />

                        <label for="phone-no">Phone No:</label>
                        <input type="tel" id="phone" name="phone-no" className="form-control" required  onChange={(e)=>{
                            setPersonal({...personal , phone:e.target.value})
                        }}/>
                        <div className="col-md-5">
                <img src={img} /><br/><br/>
                {/* <input type="file" id="image" onChange={(e)=>{
                            setPersonal({...personal , image:e.target.value})
                        }}/> */}
                        <input type="file" id="image" onChange={(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const base64Encoded = event.target.result.split(",")[1];
        setPersonal({...personal , image: base64Encoded});
    };
    reader.readAsDataURL(file);
}}/>

                </div>
                        <button className="btn btn-success">Add Personal Detail</button>

                      </form>
                </div>
                
            </div>
            <div className={style.button1}>
                <button type="button" className="btn btn-danger">Next:PAge</button>
                </div>
         <div className={style.button2}>
                <button type="button" className="btn btn-primary">Back</button>
                </div>
        </div>
        </>
      
    )
}
export default PersonalDetails