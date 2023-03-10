import img from '../image/admin.svg'
import img1 from '../image/list.svg'
import Footer from "./Footer"
import style from "./AdminListComponent.module.css"
import { NavLink, useNavigate } from 'react-router-dom'

function Adminlistcomponent()
{
  return(
  <>
     <Footer/>
    <div className={style.container}>
        <br/>
        <br/>
    <h1 className={style.resume}><span className={style.col}>Resume</span>Builder</h1>
    <div class="row">
     <div class="col-md-4">
     <h2 className={style.log}><span className={style.col}>Admin</span> Functionality</h2>
     <br/>
    <h2> <label><img src={img1} />List Review:</label> <button class='btn btn-success'>
                            <NavLink to="/feedbacklist">List All Review</NavLink>
                        </button></h2>

    <br/>
    <h2> <label><img src={img1} />User Details:</label> <button class='btn btn-success'>
                            <NavLink to="/userlist">User Details</NavLink>
                        </button></h2>                
     </div>
     <div class="col-md-8">
     
     <img src={img}/>
     </div>
    </div>
   
    </div>
  </>
  )

}
export default Adminlistcomponent