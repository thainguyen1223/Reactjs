import classes from "./Forgotpass.module.css"
import alta from "../image/alta.png"

import Frame from  "../image/Frame.png"
const Forgotpass =()=>{
    return(
        <div className={classes.login}>
            <div className={classes.left}>
                <img src={alta} ali='pic1'className={classes.alta} ></img>     
                    <div className={classes.pass}>
                        <h4>Đặt lại mật khẩu </h4>
                    </div>
                    <div className={classes.email}>
                        <p>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
                    </div>
                    
                    <input type="text" className={classes.title} name="" placeholder=" "/>
                        <button className={classes.sumitleft} onClick={classes.sumitt}>
                            Hủy 
                        </button>
                        <button className={classes.sumitright} onClick={classes.sumit}> 
                            Tiếp tục
                        </button>

            </div>
            <div className={classes.right}>
                    <img src={Frame} ali='frame' className={classes.frame}></img>
                
            </div>
        </div>
    )
}
export default Forgotpass;