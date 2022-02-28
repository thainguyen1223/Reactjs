import classes from "./Forgotpass.module.css"
import alta from "../image/alta.png"

import Frame from  "../image/Frame.png"
import { Link } from "react-router-dom"
const Forgotpass =()=>{
    return(
        <div className={classes.login}>
            <div className={classes.left}>
                <img src={alta} alt='pic1'className={classes.alta} ></img>     
                    <div className={classes.pass}>
                        <p className={classes.passtitle}>Đặt lại mật khẩu </p>
                    </div>
                    <div className={classes.email}>
                        <p className={classes.emailtitle}>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
                    </div>
                    
                    <input type="text" className={classes.title} name="" placeholder=" "/>
                        <div className={classes.sumitleft} >
                            <p className={classes.cancel} >Hủy</p>
                        </div>
                        <Link to ="/wrong/forgot/reset">
                        <div className={classes.sumitright}> 
                        <p className={classes.next} >tiếp tục </p>
                        </div>
                        </Link>

            </div>
            <div className={classes.right}>
                    <img src={Frame} alt='frame' className={classes.frame}></img>
                
            </div>
        </div>
    )
}
export default Forgotpass;