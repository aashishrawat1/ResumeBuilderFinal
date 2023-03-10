import style from "./WorkHistory.module.css"
import { useState } from "react"
import axios from "axios";
import base_url from '../Api/BootApi'
import Menu from "./Menu";
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
function WorkHistory() {
    const [history,setHistory] = useState({});
    const navigate=useNavigate();
    const location =useLocation();
    const userId = localStorage.getItem('userId');
     const handleform =(e)=>
     {
        console.log(history);
        postDataServer(history)
        e.preventDefault();
     }
     const postDataServer = (data)=>
     {
        axios.post(`${base_url}/experience/${userId}`,data).then(
          (response)=>{
            alert("Work history data added successfully")  
            navigate("/skill",{state :{data:userId}})
            console.log(response)
          },
          (error)=>
          {
            console.log(error);
          }
        )
     }
    return (
        <>
        <Menu/>
        <div className={style.container}>
            <h1 className={style.resume}><span className={style.col}>Resume </span>Builder</h1>
            <h2 className={style.log}> Tell us about your most recent <span className={style.col}>Job</span></h2>
            <form onSubmit={handleform}>
                <div className="row">
                    <div className="col-md-3">
                        <label for="jobTitle">Job Title:</label>
                        <input type="text" id="jobTitle" className="form-control" name="jobTitle" required onChange={(e)=>{
                            setHistory({...history, jobTitle:e.target.value})
                        }}  /><br /><br />
                    </div>
                    <div className="col-md-3">
                        <label >Company:</label>
                        <input type="text" id="company" name="company" className="form-control" required onChange={(e)=>{
                            setHistory({...history , company:e.target.value})
                        }}  /><br /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label for="city">City:</label>
                        <input type="text" id="city" name="city" className="form-control" required  onChange={(e)=>{
                            setHistory({...history ,city:e.target.value})
                        }}/><br /><br />
                    </div>
                    <div className="col-md-3">
                        <label for="country">Country:</label>
                        <input type="text" id="country" className="form-control" name="country" required  onChange={(e)=>{
                            setHistory({...history ,country:e.target.value})
                        }}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label for="startDate">Start Date:</label>
                        <input type="date" id="startDate" name="startDate" className="form-control" required  onChange={(e)=>{
                            setHistory({...history , startDate:e.target.value})
                        }}/><br /><br />
                    </div>
                    <div className="col-md-3">
                        <label for="endDate">End Date:</label>
                        <input type="date" id="endDate" name="endDate" className="form-control" required  onChange={(e)=>{
                            setHistory({...history , endDate:e.target.value})
                        }}/><br /><br />
                    </div>
                </div>
                <button class="btn btn-success">Add WorkHistory</button>
            </form>
        </div>
        </>
    )
}
export default WorkHistory
