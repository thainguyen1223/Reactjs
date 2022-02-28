import classes from "./Login.module.css"
import alta from "../image/alta.png"
import pic5 from  "../image/pic5.png"
import pic6 from  "../image/pic6.png"
import pic7 from  "../image/pic7.png"
import pic8 from  "../image/pic8.png"
import {Link} from 'react-router-dom';
const Login =()=>{
    return(
        <div className={classes.login}>
            <div className={classes.left}>   
                <img src={alta} alt='pic1'className={classes.alta} ></img>     
                    <div className={classes.login1}>
                        <div className={classes.name}>Tên đăng nhập * </div>
                        <input type="text" className={classes.title} name="" placeholder="lequynhavan01"/>
                        
                        <div className={classes.password}>Mật khẩu * </div>
                        <input type="password"  className={classes.title} name="" placeholder="****"/>
                        <img src={pic7}  alt='eye'className={classes.eye}  ></img>
                        <div className={classes.password1}>Quên mật khẩu? </div>
                        
                    </div>
                    <Link to="/wrong">
                        <div className={classes.sumit} > 
                            <p className={classes.log__in} >Đăng nhập</p>
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