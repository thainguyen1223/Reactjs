import classes from './Listreport.module.css'
import Bellactive from "../Bellactive";
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import goright from "../image/goright.svg"
import Levelgoto from "../image/gotoright.svg";
import {useState, useEffect} from 'react';

function Listreport(){
    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState([])

    
    const options = [
        'Tất cả', '2040001', '2060001','2050002'
      ];
      const sumit =(e)=>{
          console.log(e.value)
      }
      const defaultOption = options[0];
    return(
        <div className={classes.level}>
            <div className={classes.levelinfo}>
                <div className={classes.levelinfolist}>
                    <p className={classes.leveltitle}>
                        Báo cáo
                    </p>
                    
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
               
                    <p className={classes.levellist }>
                        Lập báo cáo
                    </p>
                    
                </div>
                <div className={classes.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={classes.levelcontainer}>
                <div className={classes.levellisttitle}>
                    Chọn thời gian
                </div>  
                <div className={classes.leveldrowcalendar}>
                    <DatePicker 
                    selected={startDate} onChange={(date) => setStartDate(date)} />
                    <img src={goright} alt="goright" className={classes.goright}></img>    
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className={classes.reportcontainer}>
                    <div className={classes.levellistdrow}>
                        <div className={classes.listitemdrow}>
                            <div className={classes.levelitem}>
                            <Dropdown options={options}        
                                onChange={(e)=>sumit(e)} 
                                value={defaultOption} placeholder="Select an option" />
                                
                                <div className={classes.levelname}>Tên dịch vụ</div>
                            </div>
                        </div>

                        <div className={classes.listitemdrow}>
                            <div className={classes.levelitem}>
                            <Dropdown options={options}        
                                onChange={(e)=>sumit(e)} 
                                value={defaultOption} placeholder="Select an option" />
                                
                                <div className={classes.levelname}>Tên dịch vụ</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Listreport;