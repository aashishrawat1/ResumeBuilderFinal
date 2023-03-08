import React from "react";
import style from "./Menu.module.css"
const Menu=() =>
{
 return(
   <nav class="navbar navbar-dark bg-dark fixed-top">
   <a href="/personal" className={style.colr}>Personal Details</a>
   <a href="/education" className={style.colr}>Education</a>
   <a href="/experience" className={style.colr}>WorkHistory</a>
   <a href="/skill" className={style.colr}>Skill</a>
   <a href="/hobbies" className={style.colr}>Hobby</a>
   </nav>
 );
}
export default Menu;
