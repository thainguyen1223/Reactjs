import classes from "./Detaildevice.module.css"
import Listitem from "../../Listitem"

import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../../image/gotoright.svg";
import blue from '../../image/blue.svg'
import back from "../../image/back.svg"
function Detaildevice() {
    return(
        
        <div className={classes.detaildevice}>
            <Listitem/>
            <div className={classes.listlevelright}>
                <div className={classes.detail}>
                <div className={classes.info}>
                    <div className={classes.infolist}>
                        <p className={classes.title}>
                            Thiết bị 
                        </p>
                        
                        <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
                
                        <p className={classes.title}>
                            Danh sách thiết bị
                        </p>
                        <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
                        <p className={classes.detaillist }>
                            Chi tiết thiết bị
                        </p>
                    </div>
                    <div className={classes.bell}>
                        <Bellactive/>
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.listtitle}>
                        Quản lý thiết bị
                    </div>
                    <div className={classes.newitem}>
                        <div className={classes.informationlevel}>
                            Thông tin thiết bị
                        </div>
                        <div className={classes.listitem}>
                            <div className={classes.id}>Mã thiết bị:</div>
                            <div className={classes.name}>KIO_01</div>
                            <div className={classes.adress}>Loại thiết bị:</div>
                            <div className={classes.source}>Kiosk</div>

                            <div className={classes.id}>Tên thiết bị:</div>
                            <div className={classes.name}>Kiosk</div>
                            <div className={classes.adress}>Tên đăng nhập:</div>
                            <div className={classes.source}>
                                
                                Linhkyo011</div>

                            <div className={classes.id}>Địa chỉ IP:</div>
                            <div className={classes.name}>128.172.308</div>
                            <div className={classes.adress}>Mật khẩu:</div>
                            <div className={classes.source}>CMS</div>

                            <div className={classes.id}>Dịch vụ sử dụng:</div>
                            

            
                           
                        </div>
                        <div className={classes.source1}>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</div>
                    </div> 
                <Link to ="/device">
                    <div className={classes.add}>
                            <div className={classes.addback}>
                                    <img src={back} alt="" />  
                            </div>
                            <span className={classes.backtitle}>Cập nhật thiết bị</span>
                    </div>
                    </Link>
                </div>       
            </div>    
                </div>
        </div>
    )
}


export default Detaildevice;