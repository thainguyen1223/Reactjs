import classes from "./Resetpass.module.css"
import alta from "../image/alta.png"
import pic5 from  "../image/pic5.png"
import pic6 from  "../image/pic6.png"

import pic8 from  "../image/pic8.png"
import eyeclose from "../image/eyeclose.svg"
import { Link } from "react-router-dom"
const Login =()=>{
    return(
        <div className={classes.login}>
            <div className={classes.left}>   
                <img src={alta} alt='pic1'className={classes.alta} ></img>   
                <h4>Đặt lại mật khẩu mới </h4>
                    <div className={classes.login1}>
                   
                        <div className={classes.name}>Mật khẩu  </div>
                        <input type="password" className={classes.title} name="" placeholder="*****"/>
                        <img src={eyeclose}  alt='eyeclose'className={classes.eyeclose}  ></img>
                        
                        <div className={classes.password}>Nhập lại mật khẩu  </div>
                        <input type="password"  className={classes.title} name="" placeholder="****"/>
                        <img src={eyeclose}  alt='eyeclose'className={classes.eyeclosepass}  ></img>
                        
                        
                    </div>
                    < Link to='/account'>
                        <div className={classes.sumit} > 
                            <p className={classes.confirm} >Xác nhận</p>
                        </div>
                    </Link>
            </div>
            <div className={classes.right}>
                    <img src={pic5} alt='pic5' className={classes.pic5}></img>
                    <img src={pic8} alt='pic8'className={classes.pic8} ></img>
                    <img src={pic6} alt='pic6'className={classes.pic6} ></img>
            </div>
        </div>
    )
}

export default Login;