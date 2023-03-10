import style from './Final.module.css'
import img from '../image/finish.svg'
import { useState } from "react"
import axios from "axios";
import base_url from '../Api/BootApi'
import { NavLink, useNavigate,useLocation } from 'react-router-dom'
function Final() {
    const [feedback, setFeedback] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const userId = localStorage.getItem('userId');
    const handleform = (e) => {
        console.log(feedback);
        postDataServer(feedback)
        e.preventDefault();
    }
    const postDataServer = (data) => {
        axios.post(`${base_url}/feedback/${userId}`, data).then(
            (response) => {
                alert("Personal data added successfully")
                navigate("/resume",{state:{data:userId}})
                console.log(response)
            },
            (error) => {
                console.log(error);
            }
        )
    }

    return (
        <div className={style.container}>
            <div>
                <nav class="navbar navbar-dark bg-dark fixed-top">
                    <a href="/" className={style.colr}>Log Out</a>
                </nav>
                <br />
                <h1 className={style.resume}><span className={style.col}>Resume </span>Builder</h1>
                <h2>Thanks for using the <span className={style.col}>Resume  </span> Builder App</h2>
                <div className='row'>
                    <div className="col-md-9">
                        <button className='btn btn-primary'>
                            <NavLink to="/resume" className={style.colr}>Generate Resume</NavLink>
                        </button>
                    </div>
                    <div className="col-md-3">
                    <form onSubmit={handleform}>
                       
                    <h2 className={style.resume}>Would you like to add<span className={style.col}> Feedback </span></h2>
                            <textarea id="text" name="text" rows="5" placeholder='add feedback' required onChange={(e) => {
                                setFeedback({ ...feedback, text: e.target.value })
                            }}></textarea><br /><br />
                            <button class="btn btn-success">Add feedback</button>
                    </form>
                    </div>
                </div>
                <div className={style.img}>
                    <img src={img} className={img.finish} width={600} height={600} />
                </div>

            </div>

        </div>
    )
}
export default Final

