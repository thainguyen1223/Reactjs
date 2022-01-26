import classes from "./Wrongpass.module.css"
import alta from "../image/alta.png"
import pic5 from  "../image/pic5.png"
import pic6 from  "../image/pic6.png"
import pic7 from  "../image/pic7.png"
import pic8 from  "../image/pic8.png"
// import pic9 from  "./image/pic9.png"
import {Link} from 'react-router-dom';
import warning from '../image/warning.svg'
const Wrongpass =()=>{
    return(
        <div className={classes.login}>
            <div className={classes.left}>
            <img src={alta} ali='pic1'className={classes.alta} ></img>     
                    <div className={classes.login1}>
                        <div className={classes.name}>Tên đăng nhập * </div>
                        <input type="text" className={classes.title} name="" placeholder="Aivan288"/>
                        
                        <div className={classes.password}>Mật khẩu * </div>
                        <input type="password"  className={classes.title} name="" placeholder="******"/>
                        <img src={pic7}  ali='eye'className={classes.eye}  ></img>
                        {/* <img src={pic9} ali='pic5' className={classes.pic9}></img> */}
                        <Link to="/wrong/forgot">
                        
                        <div className={classes.wrongpass}>
                            <img src={warning} alt="warning" className={classes.warning}></img>
                           <p className={classes.wrongpasstitle}>Sai mật khẩu hoặc tên đăng nhập </p> 
                            </div>
                        </Link>
                    </div>
                    <button className={classes.sumit} clonClick={classes.sumit}> Đăng nhập </button>
                    <div className={classes.pass}>Quên mật khẩu? </div>
            </div>
            <div className={classes.right}>
                    <img src={pic5} ali='pic5' className={classes.pic5}></img>
                    <img src={pic8} ali='pic8'className={classes.pic8} ></img>
                    <img src={pic6} ali='pic6'className={classes.pic6} ></img>
            </div>
        </div>
    )
}
export default Wrongpass;