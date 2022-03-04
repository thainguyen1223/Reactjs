import {useState} from "react";
import alta from "../image/alta.png"
import  './Listitem.css'
import logo_dashboard from "../image/logo_dashboard.png"
import logo_device from "../image/logo_device.png"
import logo_level from "../image/logo_level.png"
import logo_setting from "../image/logo_setting.png"
import logo_service from "../image/logo_service.png"
import log_report from "../image/log_report.png"
import logo_logout from "../image/logo_logout.svg"
import three from "../image/more.svg"
import { Link  } from 'react-router-dom'

function Listitem(){

    const slidebars = document.querySelectorAll('.SliderbarItem')
    


    slidebars.forEach( (slidebar:any) => {
  
      slidebar.onclick = function () {
  
         let items = document.querySelector<HTMLElement>('.SliderbarItem.active')!
              items.classList.remove('active')
          
          this.classList.add('active')
          
                        
      }
  })


  const [info, setInfo] = useState(false);

    return(
    <div className='Sliderbar'>
        <div className="alta ">
            <img src={alta} alt="alta" className="altaIMG"></img>
        </div>
        <div className="list">
            <div className="SliderbarItem active ">
                <Link  to='/dashboard' className="Link">
                    <img className="ItemIMG" src={logo_dashboard} alt="alta"></img>
                    <div className="title">Dashboard</div>
                </Link>
            </div>

            <div className="SliderbarItem">
                <Link to='/device' className="Link">
                    <img className="ItemIMG" src={logo_device} alt="alta"></img>
                    <div className="title"> Thiết Bị</div>
                </Link>
            </div>

            <div className="SliderbarItem">
            <Link to= '/service'  className="Link">  
                    <img className="ItemIMG" src={logo_service} alt="alta"></img>
                    <div className="title">   Dịch vụ</div>
                </Link>
            </div>
            <div className="SliderbarItem">
                <Link to= '/level'  className="Link">  
                    <img className="ItemIMG" src={logo_level} alt="alta"></img>
                    <div className="title">   Cấp số</div>
                </Link>
            </div>
            <div className="SliderbarItem">
                <Link to= '/report'  className="Link">  
                    <img className="ItemIMG" src={log_report} alt="alta"></img>
                    <div className="title">  Báo cáo</div>
                </Link>
            </div>
            <div className="SliderbarItem"
                  onMouseEnter={()=>setInfo(true)} onMouseLeave={()=>setInfo(false)}
            >              
            <Link to= ''  className="Link">  
                    <img className="ItemIMG" src={logo_setting} alt="alta"></img>
                    <div className="title">  Cài đặt hệ thống </div>
                    <img src={three } alt='three ' className="three" />
                    </Link>
                    { info &&       <div className='subnav'>
                        <div className="list_subnav list_subnav1">
                        <Link to= '/dashboard/RoleManagement' className="Linksubnav">
                            <div className="item">Quản lý vai trò</div>
                        </Link>
                        </div>
                        <div className="list_subnav">
                         <Link to='/dashboard/AccountManagement' className="Linksubnav">
                            <div className="item" >Quản lý tài khoản</div>
                        </Link>
                        </div>
                        <div className="list_subnav list_subnav2">
                        <Link to ='/dashboard/Diarywork' className="Linksubnav">
                            <div className="item" >Nhật ký người dùng</div>
                        </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
        
            <div className='logout'>
                <Link to='/' className="Linkout">
                    <img src={logo_logout} alt='logo_logout'/>
                <div className='out'>Đăng xuất </div>
                </Link>
            </div>
     
    </div>
    )
}

export default Listitem;