import style from "./Education.module.css"
import { useState } from "react"
import axios from "axios";
import base_url from '../Api/BootApi'
import Menu from "./Menu";
import { NavLink, useNavigate } from 'react-router-dom'

function Education() {
    
     const [education,setEducation] = useState({});
     const navigate=useNavigate();
     const handleform =(e)=>
     {
        console.log(education);
        postDataServer(education)
        e.preventDefault();
     }
     const postDataServer = (data)=>
     {
        axios.post(`${base_url}/education/2`,data).then(
          (response)=>{
            alert("Education data added successfully")  
            navigate("/experience")
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
               <div>
                    <div>
                         <h1 className={style.resume}><span className={style.col}>Resume</span>Builder</h1>
                         <h2 className={style.log}><span className={style.col}>Education</span> Details</h2>
                    </div>
                    <div className="row">
                         <div className="col-md-4">
                              <form onSubmit={handleform}>
                                   <h2>High School Information</h2>
                                   <label for="high-school-name">Name of High School:</label>
                                   <input type="text" id="nameHigh" name="high-school-name" className="form-control" required onChange={(e)=>{
                            setEducation({...education , nameHigh:e.target.value})
                        }} /><br />
                                   <label for="high-school-percentage">Percentage Obtained:</label>
                                   <input type="number" id="percentageHigh" className="form-control" name="high-school-percentage" min="0" max="100" step="0.01" required onChange={(e)=>{
                            setEducation({...education , percentageHigh:e.target.value})
                        }}  /><br />
                                   <label for="high-school-year">Year of Passing:</label>
                                   <input type="number" id="yearHigh" className="form-control" name="high-school-year" min="1900" max="2099" required onChange={(e)=>{
                            setEducation({...education , yearHigh:e.target.value})
                        }}/><br />
                                   <label for="high-school-board">Board of Education:</label>
                                   <input type="text" id="boardHigh" className="form-control" name="high-school-board" required  onChange={(e)=>{
                            setEducation({...education, boardHigh:e.target.value})
                        }} /><br />
                                   <h2>Intermediate School Information</h2>
                                   <label for="inter-school-name">Name of Intermediate School:</label>
                                   <input type="text" id="nameInter" className="form-control" name="inter-school-name" required   onChange={(e)=>{
                            setEducation({...education ,nameInter:e.target.value})
                        }}/><br />
                                   <label for="inter-school-percentage">Percentage Obtained:</label>
                                   <input type="number" id="percentageInter" className="form-control" name="inter-school-percentage" min="0" max="100" step="0.01" required onChange={(e)=>{
                            setEducation({...education ,percentageInter:e.target.value})
                        }} /><br />
                                   <label for="inter-school-year">Year of Passing:</label>
                                   <input type="number" id="yearInter" className="form-control" name="inter-school-year" min="1900" max="2099" required onChange={(e)=>{
                            setEducation({...education ,yearInter:e.target.value})
                        }} /><br />
                                   <label for="inter-school-board">Board of Education:</label>
                                   <input type="text" id="boardInter" className="form-control" name="inter-school-board" required onChange={(e)=>{
                            setEducation({...education ,boardInter:e.target.value})
                        }} /><br />
                                  
                                   <h2>Graduation Information</h2>
                                   <label for="graduation-institute">Name of Institute:</label>
                                   <input type="text" id="nameGraduation" className="form-control" name="graduation-institute" required  onChange={(e)=>{
                            setEducation({...education ,nameGraduation:e.target.value})
                        }}/><br />
                                   <label for="inter-school-percentage">Percentage Obtained:</label>
                                   <input type="number" id="percentageGraduation" className="form-control" name="inter-school-percentage" min="0" max="100" step="0.01" required onChange={(e)=>{
                            setEducation({...education,percentageGraduation:e.target.value})
                        }} /><br />

                                   <label for="graduation-year">Year of Graduation:</label>
                                   <input type="number" id="yearGraduation" className="form-control" name="graduation-year" min="1900" max="2099" required onChange={(e)=>{
                            setEducation({...education,yearGraduation:e.target.value})
                        }}/><br />

                                   <label for="graduation-year">Board of Graduation:</label>
                                   <input type="text" id="" className="form-control" name="boardGraduation"  required onChange={(e)=>{
                            setEducation({...education ,boardGraduation:e.target.value})
                        }} /><br />
                         <button class="btn btn-success">Add Education</button>
                              </form>
                         </div>
                         <div className={style.btn1}>
                              <button id="btn1" type="button" className="btn btn-danger">Next:</button>
                         </div>
                         <div className={style.btn2}>
                              <button id="btn2" className="btn btn-primary" type="button">Back</button>
                         </div>
                    </div>
               </div>
          </div>
          </>
     )
}
export default Education