import React, { useState, useEffect } from 'react';
import axios from 'axios';
import base_url from '../Api/BootApi';
import style from "./Resume.module.css"
import img from '../image/photo.png'
function Resume() {
  const [personal, setPersonal] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState([]);
  const [skills, setSkill] = useState([]);
  const [hobby, setHobby] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7071/resume/2")
      .then((response) => {
        setPersonal(response.data.personaldetails);
        setEducation(response.data.educationlist);
        setExperience(response.data.experiencelist);
        setSkill(response.data.skilllist);
        setHobby(response.data.hobbieslist);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const divStyle = { backgroundColor: 'dimgrey' };
  return (
         <div className={style.Container}>
        <div className='row'>
        <div className='col-md-2'>
        <img src={img} />
        </div>
      
        <div className='col-md-10 .bg-success' style={divStyle}>
       <h2></h2>
        </div>
        </div>
         </div>
        )
}
export default Resume;


















