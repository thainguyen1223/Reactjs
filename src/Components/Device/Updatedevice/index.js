import classes from "./Updatedevice.module.css"
import Listitem from '../../Listitem'
import Levelgoto from "../../image/gotoright.svg";
import Bellactive from "../../Bellactive";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import delefi from '../../image/delefi.svg'
import star from '../../image/star.svg'
import {Link} from 'react-router-dom';
function Updatedevice(){

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
                <div className={classes.update}>
                    <div className={classes.updateinfo}>
                        <div className={classes.updateinfolist}>
                            <p className={classes.updatetitle}>
                                Thiết bị
                            </p>
                            <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
               
                            <p className={classes.updatetitle }>
                                Danh sách thiết bị
                            </p>
                                <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
                            <p className={classes.updatelist }>
                                Thêm thiết bị
                            </p>
                        </div>
                        <div className={classes.bell}>
                            <Bellactive/>
                        </div>
                    </div>

                    <div className={classes.updatecontainer}>
                        <div className={classes.updatelisttitle}>
                            Quản lý tài khoản
                        </div>
                        <div className={classes.updatelistitem}>
                            <div className={classes.listitem}>
                                <div className={classes.updatelistinformation}>
                                    Thông tin tài khoản
                                </div>
                                <div className={classes.listinformation}>
                                    <div className={classes.updatename}>
                                        <p className={classes.updateid}>Mã thiết bị:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <input className={classes.titlecontnet} type="text"  name="" placeholder="KIO_01"/>
                                    </div>

                                    <div className={classes.updatename}>
                                        <p className={classes.updateid}>Loại thiết bị:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <div className={classes.updatedrow}>
                                            <Dropdown options={optionsdevice}  
                                            onChange={(e)=>sumitdevice(e)} 
                                            value={defaultOptiondevice} placeholder="Select an option" />
                            </div>
                                    </div>


                                    <div className={classes.updatename}>
                                        <p className={classes.updateid}>Tên thiết bị:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <input className={classes.titlecontnet} type="text"  name="" placeholder="Kiosk"/>
                                    </div>

                                    <div className={classes.updatename}>
                                        <p className={classes.updateid}>Tên đăng nhập:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <input className={classes.titlecontnet} type="text"  name="" placeholder="Linhkyo011"/>
                                    </div>

                                    <div className={classes.updatename}>
                                        <p className={classes.updateid}> Địa chỉ IP:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <input className={classes.titlecontnet} type="text"  name="" placeholder="128.172.308"/>
                                    </div>

                                    <div className={classes.updatename}>
                                        <p className={classes.updateid}>Mật khẩu:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                        <input className={classes.titlecontnet} type="text"  name="" placeholder="CMS"/>
                                    </div>

                                    <div className={classes.updatename}>
                                        <p className={classes.updateid}>Dịch vụ sử dụng:
                                        <img src={star} alt='star' className={classes.starid}></img>
                                        </p>
                                        
                                       <div className={classes.list}>
                                            <div className={classes.item}>
                                            <p className={classes.updatetitle__item}>
                                                
                                                    Khám tim mạch
                                                </p>
                                                <img src={delefi} alt='star' className={classes.delefi}></img>
                                            </div>
                                            <div className={classes.item}>
                                            <p className={classes.updatetitle__item}>
                                                
                                                    Khám sản phụ khoa
                                                </p>
                                                <img src={delefi} alt='star' className={classes.delefi}></img>
                                            </div>
                                            <div className={classes.item}>
                                            <p className={classes.updatetitle__item}>
                                                
                                                    Khám răng hàm mặt
                                                </p>
                                                <img src={delefi} alt='star' className={classes.delefi}></img>
                                            </div>

                                            <div className={classes.item}>
                                            <p className={classes.updatetitle__item}>
                                                
                                                    Khám tai mũi họng
                                                </p>
                                                <img src={delefi} alt='star' className={classes.delefi}></img>
                                            </div>

                                            <div className={classes.item}>
                                            <p className={classes.updatetitle__item}>
                                                
                                                    Khám hô hấp
                                                </p>
                                                <img src={delefi} alt='star' className={classes.delefi}></img>
                                            </div>

                                            <div className={classes.item}>
                                                <p className={classes.updatetitle__item}>
                                                
                                                    Khám tổng quát
                                                </p>
                                                <img src={delefi} alt='star' className={classes.delefi}></img>
                                            </div>
                                       </div>
                                    </div>
                                </div>

                                
                            </div>
                            <div className={classes.updatenameitem}>
                                    <img src={star} alt='star' className={classes.star}></img>
                                    <p> Là trường thông tin bắt buộc</p>
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

export default Updatedevice;