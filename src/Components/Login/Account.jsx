import classes from "./Account.module.css"

import bell from "../image/bell.png"

import avata from "../image/avata.png"
import pic from "../image/pic.png"
import camera from "../image/camera.png"
import Bellactive from "../Bellactive";
import {useState} from "react";
import Listitem from "../Listitem"


const Account=()=>{
    const [isShow, setIsShow] = useState(false);
  

    return(
        <div className={classes.main}>
            <div className={classes.left}>           
            <Listitem/>
            </div>
            <div className={classes.right}>   
                <div className={classes.top}>
                    <span className={classes.personal}>Thông tin cá nhân</span>
                    <div className={classes.topright}>
                     
                            <Bellactive/>
                    
                     
                     
                    </div>
                   
                </div>

                <div className={classes.bottom}>
           
                     <div className={classes.bottomleft}>
                            <img src ={pic} alt='pic' className={classes.pic}></img>
                            <img src ={camera} alt=' camera ' className={classes. camera}></img>
                            <h3 className={classes.name}>Lê Quỳnh Ái Vân</h3>
                    </div>
                    <div className={classes.bottomright}>
                        <div className={classes.content}>
                                <p className={classes.usecontent} >Tên người dùng </p>
                                <input className={classes.titlecontnet} type="text"  name="" placeholder="Lê Quỳnh Ái Vân"/>
                        </div>

                        <div className={classes.content}>
                                <p className={classes.usecontent} >Tên đăng nhập  </p>
                                <input className={classes.titlecontnet} type="text"  name="" placeholder="lequynhaivan01"/>
                        </div>

                        <div className={classes.content}>
                                <p className={classes.usecontent} >Số điện thoại </p>
                                <input className={classes.titlecontnet} type="text"  name="" placeholder="0767375921"/>
                        </div>

                        <div className={classes.content}>
                                <p className={classes.usecontent} >Mật khẩu  </p>
                                <input className={classes.titlecontnet} type="text"  name="" placeholder="311940211"/>
                        </div>


                        <div className={classes.content}>
                                <p className={classes.usecontent} >Email: </p>
                                <input className={classes.titlecontnet} type="text"  name="" placeholder="adminSSO1@domain.com"/>
                        </div>


                        <div className={classes.content}>
                                <p className={classes.usecontent} >Vai trò: </p>
                                <input className={classes.titlecontnet} type="text"  name="" placeholder="Kế toán"/>
                        </div>

                      

                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Account;