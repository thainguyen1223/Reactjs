import classes from "./Account.module.css"
import alta from "../image/alta.png"
import bell from "../image/bell.png"
import bellActive from "../image/bellActive.png"
import avata from "../image/avata.png"
import pic from "../image/pic.png"
import camera from "../image/camera.png"
import logo_dashboard from "../image/logo_dashboard.png"
import logo_device from "../image/logo_device.png"
import logo_level from "../image/logo_level.png"
import logo_setting from "../image/logo_setting.png"
import logo_service from "../image/logo_service.png"
import log_report from "../image/log_report.png"
import logo_logout from "../image/logo_logout.png"
import {useState} from "react";
import Listitem from "../Listitem"


const Account=()=>{
    const [isShow, setIsShow] = useState(false);
    const [info, setInfo] = useState(false);

    return(
        <div className={classes.main}>
            <div className={classes.left}>           
            <Listitem/>
            </div>
            <div className={classes.right}>   
                <div className={classes.top}>
                    <span className={classes.personal}>Thông tin cá nhân</span>
                    <div className={classes.topright}>
                        <p 
                         onMouseEnter={()=>setIsShow(true)} 
                        > <img src ={isShow ? bellActive : bell} ali="bell" className={classes.bell}></img> 
                        </p>
                        { isShow &&  <div className={classes.notify} onMouseLeave={()=>setIsShow(false)}>
                            <header className={classes.notifyheader}>
                                <p className={classes.notifytitle}>Thông báo </p>
                            </header>
                           <div className={classes.notifylist}>
                               <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Nguyễn Thị Thùy Dung</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>


                               <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Nguyễn Thiên Chinh</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>

                               <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Võ Thị Kim Liên</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>


                               <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Hoàng Nguyễn Quốc Huy</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>

                               <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Võ Ngọc Lan Anh</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>

                               <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Nguyễn Thị Trúc Anh</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>


                           </div>
                         
                        </div>
                        }

                        <img src ={avata} ali='avata ' className={classes.avata}></img>
                        <div className={classes.title}>
                            <p>Xin chào</p>
                            <h1 className={classes.usename}>Lê Quỳnh Ái Vân</h1>
                        </div>
                    </div>
                   
                </div>

                <div className={classes.bottom}>
           
                     <div className={classes.bottomleft}>
                            <img src ={pic} ali='pic' className={classes.pic}></img>
                            <img src ={camera} ali=' camera ' className={classes. camera}></img>
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