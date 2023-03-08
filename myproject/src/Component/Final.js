import style from './Final.module.css'
import img from '../image/finish.svg'
function Final() {
    return (
        <div className={style.container}>
            <div>
                <h1 className={style.resume}><span className={style.col}>Resume</span>Builder</h1>
                <h2>Thanks for using the <span className={style.col}>Resume</span> Builder App</h2>
                <div className='row'>
                <div className="col-md-9">
                    <button className='btn btn-primary'>Download Resume</button>      
                    </div>
                 <div className="col-md-1">
                 <button className='btn btn-danger'>LogOut</button> 
                 </div>
                </div>
                    <div className={style.img}>
                        <img src={img} className={img.finish} width={600} height={600}/>
                    </div>
                </div>
            </div>
    )
}
export default Final

