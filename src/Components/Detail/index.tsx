import classes from './Detail.module.css'
import Bellactive from "../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../image/gotoright.svg";
import blue from '../image/blue.svg'
import back from "../image/back.svg"

function Detail(){
    return(
        <div className={classes.detail}>
            <div className={classes.info}>
                <div className={classes.infolist}>
                    <p className={classes.title}>
                        Thiết bị 
                    </p>
                    
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
            
                    <p className={classes.title}>
                        Danh sách cấp số
                    </p>
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
                    <p className={classes.detaillist }>
                        Chi tiết 
                    </p>
                </div>
                <div className={classes.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.listtitle}>
                    Quản lý cấp số
                </div>
                <div className={classes.newitem}>
                    <div className={classes.informationlevel}>
                        Thông tin cấp số
                    </div>
                    <div className={classes.listitem}>
                        <div className={classes.id}>Họ tên:</div>
                        <div className={classes.name}>Nguyễn Thị Dung</div>
                        <div className={classes.adress}>Nguồn cấp:</div>
                        <div className={classes.source}>Kiosk</div>

                        <div className={classes.id}>Tên dịch vụ:</div>
                        <div className={classes.name}>Khám tim mạch</div>
                        <div className={classes.adress}>Trạng thái:</div>
                        <div className={classes.source}>
                            <img src={blue} alt="blue" className={classes.blue}></img>
                             Đang chờ</div>

                        <div className={classes.id}>Số thứ tự:</div>
                        <div className={classes.name}>2001201</div>
                        <div className={classes.adress}>Số điện thoại:</div>
                        <div className={classes.source}>0948523623</div>

                        <div className={classes.id}>Thời gian cấp:</div>
                        <div className={classes.name}>14:35 - 07/11/2021</div>
                        <div className={classes.adress}>Địa chỉ Email:</div>
                        <div className={classes.source}>nguyendung@gmail.com</div>

                        <div className={classes.id}>Hạn sử dụng:</div>
                        <div className={classes.name}>18:00 - 07/11/2021</div>
                    </div>
                </div> 
               <Link to ="/level/numberlevel">
                 <div className={classes.add}>
                        <div className={classes.addback}>
                                <img src={back} alt="" />  
                        </div>
                        <span className={classes.backtitle}>quay lại</span>
                </div>
                </Link>
            </div>       
        </div>    
    )

}

export default Detail;