import React from "react"
import style from './Hobbies.module.css'
import img from '../image/Hobbie.svg'
import { useState } from "react"
import axios from "axios";
import base_url from '../Api/BootApi'
import Menu from "./Menu";
import { NavLink, useNavigate,useLocation} from 'react-router-dom'
function Hobbies()
{
    const [hobby,setHobby] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const userId = localStorage.getItem('userId');
    const handleform =(e)=>
    {
       console.log(hobby);
       postDataServer(hobby)
       e.preventDefault();
    }
    const postDataServer = (data)=>
    {
       axios.post(`${base_url}/hobbies/${userId}`,data).then(
         (response)=>{
          alert("Hoobies data added successfully!!!")
          navigate("/feedback",{state : {data:userId}})
           console.log(response)
         },
         (error)=>
         {
           console.log(error);
         }
       )
    }
 return(
  <>
  <Menu/>
    <div className={style.container}>
      <br/>
    <h1 className={style.resume}><span className={style.col}>Resume </span>Builder</h1>
    <h2 className={style.log}>What <span className={style.col}>Hobbies</span> would you like to Add?</h2><br/> 
   
<div className="row">
<div className="col-md-6">
<form onSubmit={handleform}>
<input type="text" id="hobbies" name="startDate" className="form-control" placeholder="eg:insert your Hobbie here" required onChange={(e)=>{
                            setHobby({...hobby ,hobbies:e.target.value})
                        }}/><br/>
    <button className="btn btn-success">Add Hobbie</button>
     </form>                  
</div>

<div className="col-md-6">
<img src={img} width={500} height={500}/>

</div>
</div>
</div>
</>
 )
}
export default Hobbies

