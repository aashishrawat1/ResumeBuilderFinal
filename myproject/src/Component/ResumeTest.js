import React, { useState, useEffect, useRef } from 'react';
import "./resume.css";
import axios from 'axios';
import base_url from '../Api/BootApi';
import img from '../image/photo.png'
import ReactToPrint from 'react-to-print';
import { NavLink, useNavigate,useLocation } from 'react-router-dom'
function ResumeTest() {
    const [personal, setPersonal] = useState({});
    const [education, setEducation] = useState({});
    const [experience, setExperience] = useState([]);
    const [skills, setSkill] = useState([]);
    const [hobby, setHobby] = useState([]);
    const location = useLocation();
    const userId = location.state && location.state.data
    useEffect(() => {
        axios.get(`${base_url}/resume/${userId}`)
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
    const componentRef = useRef(null);
    return (
        <div id="doc2" className="yui-t7" ref={componentRef}>
            <div id="inner">
                <div id="hd">
                    <div className="yui-gc">
                        <div className="yui-u first">
                            <h1>{personal.firstName} {personal.lastName}</h1>
                            <img src={`data:image/png;base64,${personal.image}`} />
                            <h2>Web Designer, Director</h2>
                        </div>
                        <div className="yui-u">
                            <div className="contact-info">
                                <h3>
                                    <a href="mailto:name@yourdomain.com">
                                        {personal.email}
                                    </a>
                                </h3>
                                <h3>{personal.phone}</h3>
                                <h3>{personal.city} {personal.state} {personal.pincode}</h3>

                            </div>
                        </div>
                    </div>
                    <ReactToPrint
                        trigger={() => <button className='btn btn-success'>Download Resume</button>}
                        content={() => componentRef.current}
                    />
                </div>
                <div id="bd">
                    <div id="yui-main">
                        <div className="yui-b">
                            <div className="yui-gf">
                                <div className="yui-u first">
                                    <h2><b>Objective</b></h2>
                                </div>
                                <div className="yui-u">
                                    {skills.map((skill, index) => (
                                        <p className="enlarge">
                                            {skill.objective}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="yui-gf">
                                <div className="yui-u first">
                                    <h2>Skills</h2>
                                </div>
                                <div className="yui-u">
                                    <div className="talent">
                                        <h2>Web Design</h2>
                                        <p>Assertively exploit wireless initiatives rather than synergistic core competencies.</p>
                                    </div>
                                    <div className="talent">
                                        <h2>Interface Design</h2>
                                        <p>Credibly streamline mission-critical value with multifunctional functionalities.</p>
                                    </div>
                                    <div className="talent">
                                        <h2>Project Direction</h2>
                                        <p>Proven ability to lead and manage a wide variety of design and development projects in team and independent situations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="yui-gf">
                                <div className="yui-u first">
                                    <h2>Technical</h2>
                                </div>
                                <div className="yui-u">
                                    <ul>
                                        {skills.map((skill) => (
                                            <li key={skill.id}>
                                                <ul>
                                                    {skill.skill.split(",").map((s) => (
                                                        <li>{s.trim()}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="yui-gf">
                                <div className="yui-u first">
                                    <h2>Experience</h2>
                                </div>
                                <div className="yui-u">
                                    <div className="job">
                                        {experience.map((value, index) => (
                                            <h2> {value.company}</h2>
                                        ))}
                                        {experience.map((value, index) => (
                                            <h3> {value.jobTitle}</h3>
                                        ))}
                                        {experience.map((value, index) => (
                                            <h4>{value.startDate}  {value.endDate}</h4>
                                        ))}
                                        {experience.map((value, index) => (
                                            <p>Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms and top-line convergence.</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="yui-gf last">
                                <div className="yui-u first">
                                    <h2>Education</h2>
                                </div>
                                <div className="yui-u">
                                    <li><ul><h2>{education.nameHigh}-{education.yearHigh}</h2><h3>{education.boardHigh} &mdash; <strong>{education.percentageHigh}</strong></h3></ul></li>
                                    <li><ul><h2>{education.nameInter}-{education.yearInter}</h2><h3>{education.boardInter} &mdash; <strong>{education.percentageInter}</strong></h3></ul></li>
                                    <li><ul><h2>{education.nameGraduation}-{education.yearGraduation}</h2><h3>{education.boardGraduation} &mdash; <strong>{education.percentageGraduation}</strong></h3></ul></li>
                                </div>
                            </div>
                            <div className="yui-gf">
                                <div className="yui-u first">
                                    <h2>Hobbies</h2>
                                </div>
                                <div className="yui-u">
                                    <ul>
                                        {hobby.map((hobby) => (
                                            <li key={hobby.id}>
                                                <ul>
                                                    {hobby.hobbies.split(",").map((s) => (
                                                        <li>{s.trim()}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ft">
                    <p>{personal.firstName}&mdash; <a href="mailto:name@yourdomain.com">{personal.email}</a> &mdash; {personal.phone}</p>
                </div>
            </div>
        </div>
    )
}
export default ResumeTest;


