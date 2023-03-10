import axios from 'axios';
import style from './UserListComponent.module.css'
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
function UserListComponent() {
    const [userlist, setUserList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:7071/admin/users")
            .then((response) => {
                setUserList(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <div className={style.container}>
                <div>
                    <Footer />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className={style.resume}>List of enrolled <span className={style.col}>Users</span></h1>
                    {userlist.map((key,value)=>(
                        <li>
                        <ul>
                       <h5> {key.firstName} {key.lastName}</h5>
                       </ul>
                       </li>
                    ))}
                </div>
            </div>
        </>
    )
}
export default UserListComponent