import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import style from './ListFeedback.module.css'
function ListFeedback()
{
    const[feedback,setfeedback] = useState([])

    useEffect(() => {
        axios.get("http://localhost:7071/admin/feedbacks")
            .then((response) => {
                setfeedback(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return(
        <>
           <div className={style.container}>
            <div>
            <Footer/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className={style.resume}><span className={style.col}>Feedback </span>given of all user</h1>
            { feedback.map((key,index)=>(
                   <li>
                    <ul>
                   <h2> {key.text}</h2>
                   </ul>
                   </li>
                ))}
            </div>
           </div>
        </>
         )
}
export default ListFeedback