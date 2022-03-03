import classes from './Update.module.css'
import Levelgoto from "../../image/gotoright.svg";
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import star from '../../image/star.svg'

import eyeopen from '../../image/eyeopen.svg'
function Update(){
    const optionsaccount = [
        'Chọn vai trò','kế toán ','Quản lý ','Admin '
      ];
      const sumitaccount =(e)=>{
          console.log(e.value)
      }
      const defaultOptionaccount = optionsaccount[0];

      const optionsstatus = [
        'Hoạt động','kế toán ','Ngưng hoạt động ','Tất cả '
      ];
      const sumitstatus =(e)=>{
          console.log(e.value)
      }
      const defaultOptionstatus = optionsstatus[0];
    return(
    <div className={classes.account}>
         <div className={classes.accountinfo}>
            <div className={classes.accountinfolist}>
                <p className={classes.accounttitle}>
                    Cài đặt hệ thống
                </p>
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
               
                <p className={classes.accounttitle }>
                    Quản lý tài khoản
                </p>
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
                <p className={classes.accountlist }>
                    Cập nhật tài khoản
                </p>
            </div>
            <div className={classes.bell}>
                <Bellactive/>
            </div>
        </div>
        <div className={classes.accountcontainer}>
            <div className={classes.accountlisttitle}>
                Quản lý tài khoản
            </div>
            <div className={classes.accountlistitem}>
                <div className={classes.listitem}>
                    <div className={classes.accountlistinformation}>
                        Thông tin tài khoản
                    </div>
                    <div className={classes.listinformation}>
                        <div className={classes.accountname}>
                            <p className={classes.accountid}>Họ tên
                            <img src={star} alt='star' className={classes.starid}></img>
                            </p>
                            
                            <input className={classes.titlecontnet} type="text"  name="" placeholder="Nguyen Van A"/>
                        </div>
                        <div className={classes.accountname}>
                            <p className={classes.accountid}>Tên đăng nhập:
                            <img src={star} alt='star' className={classes.starid}></img>
                            </p>
                            <input className={classes.titlecontnet} type="text"  name="" placeholder="tuyetnguyen123"/>
                        </div>
                        <div className={classes.accountname}>
                            <p className={classes.accountid}>Số điện thoại
                            <img src={star} alt='star' className={classes.starid}></img>
                            </p>
                            <input className={classes.titlecontnet} type="text"  name="" placeholder="0902345678"/>
                        </div>
                        <div className={classes.accountname}>
                            <p className={classes.accountid}>Mật khẩu:
                            <img src={star} alt='star' className={classes.starid}></img>
                            </p>
                            <input className={classes.titlecontnet} type="password"  name="" placeholder="Tuyetnguyen12"/>
                            <img src={eyeopen} alt='star' className={classes.eyeopenpass}></img>
                        </div>
                        <div className={classes.accountname}>
                            <p className={classes.accountid}>Email
                            <img src={star} alt='star' className={classes.starid}></img>
                            </p>
                            <input className={classes.titlecontnet} type="text"  name="" placeholder="NguyenA154@gmail.com"/>
                        </div>
                        <div className={classes.accountname}>
                            <p className={classes.accountid}>Nhập lại mật khẩu
                            <img src={star} alt='star' className={classes.starid}></img>
                            </p>
                            <input className={classes.titlecontnet} type="password"  name="" placeholder="Tuyetnguyen12"/>
                            <img src={eyeopen} alt='star' className={classes.eyeopennewpass}></img>
                        </div>
                        <div className={classes.accountname}>
                            <p className={classes.accountid}>Vai trò
                            <img src={star} alt='star' className={classes.starid}></img>
                            </p>
                            <div className={classes.accountdrow}>
                                <Dropdown options={optionsaccount}  
                                        onChange={(e)=>sumitaccount(e)} 
                                        value={defaultOptionaccount} placeholder="Select an option" />
                            </div>
                        </div>
                        <div className={classes.accountname}>
                            <p className={classes.accountid}>Tình trạng
                            <img src={star} alt='star' className={classes.starid}></img>
                            </p>
                            <div className={classes.accountdrow}>
                                <Dropdown options={optionsaccount}  
                                        onChange={(e)=>sumitaccount(e)} 
                                        value={defaultOptionaccount} placeholder="Select an option" />
                            </div>
                        </div>
                        <div className={classes.accountnameitem}>
                            <img src={star} alt='star' className={classes.star}></img>
                            <p> Là trường thông tin bắt buộc</p>
                        </div>
                    </div>
                </div>   
                  
            </div>
            <div className={classes.userbutton}>
            <Link to ='/dashboard/AccountManagement'>
            <button className={classes.cannel}>
                <a href="" className={classes.canneltitle}>Hủy bỏ  </a>
            </button>
            </Link>
            <button className={classes.more}>
                <a href="" className={classes.moretitle}>Thêm  </a>
            </button>
            </div>
        </div>
    </div>

    )
}

export default Update;