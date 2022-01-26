import classes from "./Forgotpass.module.css"
import alta from "../image/alta.png"

import Frame from  "../image/Frame.png"
import { Link } from "react-router-dom"
const Forgotpass =()=>{
    return(
        <div className={classes.login}>
            <div className={classes.left}>
                <img src={alta} ali='pic1'className={classes.alta} ></img>     
                    <div className={classes.pass}>
                        <p className={classes.passtitle}>Đặt lại mật khẩu </p>
                    </div>
                    <div className={classes.email}>
                        <p className={classes.emailtitle}>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
                    </div>
                    
                    <input type="text" className={classes.title} name="" placeholder=" "/>
                        <button className={classes.sumitleft} onClick={classes.sumitt}>
                            Hủy 
                        </button>
                        <Link to ="/wrong/forgot/reset">
                        <button className={classes.sumitright} onClick={classes.sumit}> 
                            Tiếp tục
                        </button>
                        </Link>

            </div>
            <div className={classes.right}>
                    <img src={Frame} ali='frame' className={classes.frame}></img>
                
            </div>
        </div>
    )
}
export default Forgotpass;