import React from "react"
import style from './Skill.module.css'
import img from '../image/Skill.svg'
import { useState } from "react"
import axios from "axios";
import base_url from '../Api/BootApi'
import Menu from "./Menu";
import { NavLink, useNavigate } from 'react-router-dom'
function Skill() {
    const [skill,setSkill] = useState({});
    const navigate=useNavigate();
    const handleform =(e)=>
    {
       console.log(skill);
       postDataServer(skill)
       e.preventDefault();
    }
    const postDataServer = (data)=>
    {
       axios.post(`${base_url}/skill/2`,data).then(
         (response)=>{
          alert("skill data added successfully")  
            navigate("/hobbies")
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
            <form onSubmit={handleform}>
            <div className="row">
                <div className="col-md-6">
                
                <h2 className={style.log}>What <span className={style.col}>Skills</span> would you like to highlight?</h2><br />
                    <input type="text" id="skill" name="skill" className="form-control" placeholder="eg:Hobbies" required onChange={(e)=>{
                            setSkill({...skill ,skill:e.target.value})
                        }}/><br />
                    <h2 className={style.log}>Carrer <span className={style.col}>objective</span></h2><br />
                    <input type="text" id="objective" name="obejctive" className="form-control" placeholder="eg:objective" required onChange={(e)=>{
                            setSkill({...skill, objective:e.target.value})
                        }}/><br />
                  <button className="btn btn-success">Add</button>
                </div>
              
                <div className="col-md-6">
                    <img src={img} width={500} height={500} />
                </div>
            </div>
            </form>
            </div>
            </>
            )
}
            export default Skill;

