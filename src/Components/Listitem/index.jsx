import {useState} from "react";
import alta from "../image/alta.png"
import classes from './Listitem.module.css'
import logo_dashboard from "../image/logo_dashboard.png"
import logo_device from "../image/logo_device.png"
import logo_level from "../image/logo_level.png"
import logo_setting from "../image/logo_setting.png"
import logo_service from "../image/logo_service.png"
import log_report from "../image/log_report.png"
import logo_logout from "../image/logo_logout.png"
const Listitem=()=>{
    const [info, setInfo] = useState(false);
    return(
    <div className={classes.dashboadleft}>
        <img src ={alta} ali='alta ' className={classes.alta}></img>   
        <div className={classes.list}>  
                    <ul>
                        <li className={classes.listtitle}>
                            <div className={classes.listitem}>
                                <img  className={classes.logo1} src={logo_dashboard} alt='logo_dashboard'/>
                                <a className={classes.listheight} href="">Dashboard</a>
                              
                            </div>
                        </li>
                        <li className={classes.listtitle}>
                            <div className={classes.listitem}>
                                <img src={logo_device} alt='logo_device'/>
                                <a className={classes.listheight}  href="">Thiết Bị</a>
                            </div>
                        </li>
                        <li className={classes.listtitle}>
                            <div className={classes.listitem} >
                                <img src={logo_service} alt='logo_service'/>
                                <a className={classes.listheight}  href="">Dịch vụ</a>
                            </div>
                        </li>
                        <li className={classes.listtitle}>
                            <div className={classes.listitem} >
                                <img src={logo_level} alt='logo_level'/>
                                <a className={classes.listheight} href="">Cấp số</a>
                            </div>
                        </li>
                        <li className={classes.listtitle}>
                            <div className={classes.listitem} >
                                <img src={log_report} alt='log_report'/>
                                <a className={classes.listheight} href="">Báo cáo</a>
                            </div>
                        </li>
                        <li className={classes.listtitle}
                        
                        onMouseEnter={()=>setInfo(true)} onMouseLeave={()=>setInfo(false)}
                        >
                            <div className={classes.listitem} >
                                
                                <img src={logo_setting } alt='logo_setting '/>
                                <a className={classes.listheight}  href="">Cài đặt hệ thống 
                                    <span className='fas fa-ellipsis-v fa-xs'> </span>
                                </a>
                            </div>
                            { info &&   <div className={classes.subnav}>
                                    <li><a href="#">Quản lý vai trò</a></li>
                                    <li><a href="#">Quản lý tài khoản</a></li>
                                    <li><a href="#">Nhật ký người dùng</a></li>
                                </div>
                            }

                        </li>
                        <button onClick={classes.sumit} className={classes.logout}>
                                <img src={logo_logout} alt='logo_logout'/>
                                <a href="" className={classes.color}>Đăng xuất </a>
                        </button>
                    </ul>
                       
        </div>

    </div>


    )
}

export default Listitem;