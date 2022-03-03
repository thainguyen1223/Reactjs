import classes from "./Adddevice.module.css"
import Listitem from '../../Listitem'
import Levelgoto from "../../image/gotoright.svg";
import Bellactive from "../../Bellactive";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import star from '../../image/star.svg'
import {Link} from 'react-router-dom';
function Adddevice(){

    const optionsdevice = [
        'Chọn loại thiết bị','Kiosk ','Display counter'
      ];
      const sumitdevice =(e)=>{
          console.log(e.value)
      }
      const defaultOptiondevice = optionsdevice[0];
    return(
        <div className={classes.listdevice}>
        <Listitem/>
            <div className={classes.listlevelright}>
                <div className={classes.account}>
                    <div className={classes.accountinfo}>
                        <div className={classes.accountinfolist}>
                            <p className={classes.accounttitle}>
                                Thiết bị
                            </p>
                            <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
               
                            <p className={classes.accounttitle }>
                                Danh sách thiết bị
                            </p>
                                <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
                            <p className={classes.accountlist }>
                                Thêm thiết bị
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
                                        <p className={classes.accountid}>Mã thiết bị:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <input className={classes.titlecontnet} type="text"  name="" placeholder="Nhập mã thiết bị"/>
                                    </div>

                                    <div className={classes.accountname}>
                                        <p className={classes.accountid}>Loại thiết bị:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <div className={classes.accountdrow}>
                                            <Dropdown options={optionsdevice}  
                                            onChange={(e)=>sumitdevice(e)} 
                                            value={defaultOptiondevice} placeholder="Select an option" />
                            </div>
                                    </div>


                                    <div className={classes.accountname}>
                                        <p className={classes.accountid}>Tên thiết bị:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <input className={classes.titlecontnet} type="text"  name="" placeholder="Nhập tên thiết bị"/>
                                    </div>

                                    <div className={classes.accountname}>
                                        <p className={classes.accountid}>Tên đăng nhập:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <input className={classes.titlecontnet} type="text"  name="" placeholder="Nhập tài khoản"/>
                                    </div>

                                    <div className={classes.accountname}>
                                        <p className={classes.accountid}> Địa chỉ IP:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <input className={classes.titlecontnet} type="text"  name="" placeholder="Nhập địa chỉ IP"/>
                                    </div>

                                    <div className={classes.accountname}>
                                        <p className={classes.accountid}>Mật khẩu:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <input className={classes.titlecontnet} type="text"  name="" placeholder="Nhập mật khẩu"/>
                                    </div>

                                    <div className={classes.accountname}>
                                        <p className={classes.accountid}>Dịch vụ sử dụng:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <input className={classes.titlecontnet1} type="text"  name="" placeholder="Nhập mật khẩu"/>
                                    </div>
                                </div>

                                <div className={classes.accountnameitem}>
                                    <img src={star} alt='star' className={classes.star}></img>
                                    <p> Là trường thông tin bắt buộc</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.userbutton}>
                            <Link to ='/device'>
                            <div className={classes.cannel}>
                                <div className={classes.canneltitle}>Hủy bỏ  </div>
                            </div>
                            </Link>
                            <div className={classes.more}>
                                <div className={classes.moretitle}>Thêm  </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>  
    )
}

export default Adddevice;