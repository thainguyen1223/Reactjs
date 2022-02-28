import {useState} from "react";
import alta from "../image/alta.png"
import classes from './Listitem.module.css'
import logo_dashboard from "../image/logo_dashboard.png"
import logo_device from "../image/logo_device.png"
import logo_level from "../image/logo_level.png"
import logo_setting from "../image/logo_setting.png"
import logo_service from "../image/logo_service.png"
import log_report from "../image/log_report.png"
import logo_logout from "../image/logo_logout.svg"
import three from "../image/more.svg"
import { Link  } from 'react-router-dom'
import { Provider } from "react-redux";
import abc from "../../redux/store";
const Listitem=()=>{
    const [info, setInfo] = useState(false);

    const slidebars = document.querySelectorAll('.Listitem')
    
   

  
   


    slidebars.forEach( (slidebar:any) => {
  
      slidebar.onclick = function () {
  
         let items = document.querySelector<HTMLElement>('.Listitem_listitem__6eCe-.activeSlidebar')!
              items.classList.remove('activeSlidebar')
          
          this.classList.add('activeSlidebar')
          
                        
      }
  })
     
       

    return(
   
   

        <div className={classes.dashboadleft}>
        <img src ={alta} alt='alta ' className={classes.alta} ></img>   
        <div className={classes.list}>  
                    <ul>
                    <Link to= '/dashboard'>
                        <li className={classes.listtitle}>
                            <div className={classes.listitem } >
                                <img  className={classes.logo1} src={logo_dashboard} alt='logo_dashboard'/>
                                <div className={classes.listheight} >Dashboard</div>
                              
                            </div>
                        </li>
                    </Link>   
                    <Link to= '/device'>
                        <li className={classes.listtitle}>
                            <div className={classes.listitem}>
                                <img src={logo_device} alt='logo_device'/>
                                <div className={classes.listheight}  >Thiết Bị</div>
                            </div>
                        </li>
                    </Link>
                    <Link to= '/service'>    
                        <li className={classes.listtitle}>
                            <div className={classes.listitem} >
                                <img src={logo_service} alt='logo_service'/>
                                <div className={classes.listheight}  >Dịch vụ</div>
                            </div>
                        </li>
                    </Link> 
                    <Link to= '/level'>
                        <li className={classes.listtitle}>
                            <div className={classes.listitem} >
                                <img src={logo_level} alt='logo_level'/>
                                <div className={classes.listheight} >Cấp số</div>
                            </div>
                        </li>
                    </Link>    
                    <Link to= '/report'>
                        <li className={classes.listtitle}>
                            <div className={classes.listitem} >
                                <img src={log_report} alt='log_report'/>
                                <div className={classes.listheight} >Báo cáo</div>
                            </div>
                        </li>
                    </Link>
                        <li className={classes.listtitle}
                        
                        onMouseEnter={()=>setInfo(true)} onMouseLeave={()=>setInfo(false)}
                        >
                            <div className={classes.listitem} >
                                
                                <img src={logo_setting } alt='logo_setting '/>
                                <div className={classes.listheight}  >Cài đặt hệ thống 
                                <img src={three } alt='three '/>
                                </div>
                            </div>
                            { info &&   <div className={classes.subnav}>
                                    <Link to= '/dashboard/RoleManagement'>
                                    <li><div>Quản lý vai trò</div></li>
                                    </Link>
                                    <Link to='/dashboard/AccountManagement'>
                                    <li><div >Quản lý tài khoản</div></li>
                                    </Link>
                                    <Link to ='/dashboard/Diarywork'>
                                    <li><div>Nhật ký người dùng</div></li>
                                    </Link>
                                </div>
                            }

                        </li>
                        <Link to='/'>
                        <div className={classes.logout}>
                                <img src={logo_logout} alt='logo_logout'/>
                                <div className={classes.color}>Đăng xuất </div>
                        </div>
                        </Link>
                    </ul>
                       
        </div>

    </div>
    )
}

export default Listitem;