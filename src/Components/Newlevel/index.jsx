import classes from "./Newlevel.module.css"
import Bellactive from "../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../image/gotoright.svg";
import dele from "../image/fi_x.svg";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React, {useState} from 'react';
function Newlevel() {
    const optionservice = [
        'Chọn dịch vụ', 'Khám tim mạch', 'Khám sản - Phụ khoa','Khám răng hàm mặt','Khám tai mũi họng'
      ];
      const sumitservice =(e)=>{
          console.log(e.value)
      }
      const defaultOptionservice = optionservice[0];
      const [isShow, setIsShow] = useState(false);
     
    //   const modal=document.querySelectorAll('.&time')
    //   const modalContainer =document.querySelector('.print')
    //   modalContainer.classList('open')
      
    return(
        <div className={classes.level}>
            <div className={classes.levelinfo}>
                <div className={classes.levelinfolist}>
                    <p className={classes.leveltitle}>
                        Cấp số
                    </p>
                    
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
            
                    <p className={classes.leveltitle}>
                        Danh sách cấp số
                    </p>
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
                    <p className={classes.levellist }>
                        Cấp số mới
                    </p>
                </div>
                <div className={classes.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={classes.levelcontainer}>
                <div className={classes.levellisttitle}>
                    Quản lý cấp số
                </div>
                <div className={classes.Newlevelitem}>
                    <div className={classes.list}>
                        <p className={classes.levelnew}>CẤP SỐ MỚI</p>
                        <p className={classes.service} >Dịch vụ khách hàng lựa chọn</p>
                        <div className={classes.leveldrow}>
                            <Dropdown options={optionservice} 
                                className={classes.chartDropdown}
                                        onChange={(e)=>sumitservice(e)} 
                                        value={defaultOptionservice} placeholder="Select an option" />
                        </div>     
                        <div className={classes.button}>
                        <Link to='./level'>
                            <button className={classes.cannel}>
                                <a href="" className={classes.canneltitle}>Hủy bỏ  </a>
                            </button>
                        </Link>    
                        {/* <Link to= '/level/service'> */}
                            <button  className={classes.print} onClick={()=>setIsShow(true)} >
                                <a href="" className={classes.printtitle}>In số </a>
                                { isShow &&  <div className={classes.modal}>
                                           <div className={classes.modal__item}>
                                            <Link to ="/level/service">
                                            <div className={classes.modal__item_close}>
                                                    &times;
                                            </div>
                                            </Link>
                                            <div className={classes.modal__item_title}>Số thứ tự được cấp</div>
                                            <div className={classes.modal__item_number}>2001201</div>
                                            <div className={classes.modal__item_des}>DV: Khám răng hàm mặt <span>(tại quầy số 1)</span></div>
                                            <div className={classes.modal__item_footer}>s

                                                        <div className={classes.modal__item_footer__item}>
                                                                    <span>Thời gian cấp:</span>
                                                                    <span>09:30 11/10/2021</span>
                                                        </div>
                                                        <div className={classes.modal__item_footer__item}>
                                                                    <span>Thời gian cấp:</span>
                                                                    <span>09:30 11/10/2021</span>
                                                        </div>
                                                
                                            </div>
                                
                                      </div>
                             </div>
                     }    </button>
                        {/* </Link> */}
                         </div>
                                                     
                    </div>
                </div>
            
            </div>    
            
        </div>
    )
}


export default Newlevel;