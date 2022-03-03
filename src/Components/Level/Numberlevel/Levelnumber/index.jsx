import classes from "./Levelnumber.module.css"
import Bellactive from "../../../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../../../image/gotoright.svg";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Levelnumber(){

        const optionservice = [
            'Chọn dịch vụ', 'Khám tim mạch', 'Khám sản - Phụ khoa','Khám răng hàm mặt','Khám tai mũi họng'
          ];
          const sumitservice =(e)=>{
              console.log(e.value)
          }
          const defaultOptionservice = optionservice[0];
    
        
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
                        <div className={classes.cannel}>
                            <div className={classes.canneltitle}>Hủy bỏ  </div>
                        </div>
                        </Link>
                        <div  className={classes.print}>
                            <div className={classes.printtitle}>In số </div>
                            {/* <div className={classes.propprint}>
                                <label className={classes.dele}>
                                    <img src={dele} alt="dele" ></img>
                                </label>
                                <dlv className={classes.propkey}>
                                    <div className={classes.number}>Số thứ tự được cấp</div>
                                    <div className={classes.id}>2001201</div>
                                    <div className={classes.DV}>DV: Khám răng hàm mặt (tại quầy số 1)</div>
                                </dlv>
                                <div className={classes.propprintbottom}>
                                    <div className={classes.time}>Thời gian cấp: 09:30 11/10/2021 </div>
                                    <div className={classes.user}>Hạn sử dụng: 17:30 11/10/2021 </div>
                                </div>
                            </div> */}
                        </div>
                        
                     </div>
                                                 
                </div>
            </div>
        
        </div>    
        
    </div>
    )
}

export default Levelnumber;