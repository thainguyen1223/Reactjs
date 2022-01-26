import classes from './Diaryuser.module.css'
import Bellactive from "../Bellactive";
import Levelgoto from "../image/gotoright.svg";
import goright from "../image/goright.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fi_search from"../image/fi_search.svg"
import React, {useState} from 'react';
import Page from "../Page";
function Diaryuser(){
    const [startDate, setStartDate] = useState(new Date());
    const [search , setSearch] = useState('')
    return(
        <div className={classes.account}>
            <div className={classes.accountinfo}>
                <div className={classes.accountinfolist}>
                    <p className={classes.accounttitle}>
                        Cài đặt hệ thống
                    </p>
                        <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
                
                    <p className={classes.accountlist }>
                        Nhật ký hoạt động
                    </p>
                </div>
                <div className={classes.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={classes.accountcontainer}>
                <div className={classes.accountlistdrow}>
                    <div className={classes.levelitem}>
                        <div className={classes.levelname}>Chọn thời gian</div>
                            <div className={classes.leveldrowcalendar}>
                                {/* <img src={calendar} alt=''></img> */}
                                <DatePicker 
                            
                                selected={startDate} onChange={(date) => setStartDate(date)} />
                                <img src={goright} alt="goright" className={classes.goright}></img>    
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                    </div>
                    <div className={classes.accountitem}>
                        <div className={classes.accountname}>Từ khoá</div>
                            <div className={classes.accountdrow}>
                            <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                            <a href="" className={classes.fi_search}>
                                <img src={fi_search} alt="" />
                            </a>
                            </div>
                    </div>
                </div>
            
            
                <div className={classes.tablelistitem}>
                    <div className={classes.leveltable}>
                        <div className={classes.levelitemname} style={{width:"266px"}}>
                            <p className={classes.levelitemnametitle}> Tên đăng nhập </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"240px"}}>
                            <p className={classes.levelitemnametitle}> Thời gian tác động </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"216px"}}>
                            <p className={classes.levelitemnametitle}> IP thực hiện </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"400px"}}>
                            <p className={classes.levelitemnametitle}> Thao tác thực hiện </p>    
                        </div>
                    </div>

                    <div className={classes.leveltablelist}>
                        <div className={classes.levelitemnameid} style={{width:"266px"}}>
                            <p className={classes.levelitemnametitleid}> tuyetnguyen@12 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"240px"}}>
                            <p className={classes.levelitemnametitleid}>01/12/2021 15:12:17 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"216px"}}>
                            <p className={classes.levelitemnametitleid}> 192.168.3.1 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"400px"}}>
                        <p className={classes.levelitemnametitleid}> Cập nhật thông tin dịch vụ DV_01 </p>    
                        </div>
                    </div>
                    <div className={classes.leveltablelistid}>
                        <div className={classes.levelitemnameid} style={{width:"266px"}}>
                            <p className={classes.levelitemnametitleid}> tuyetnguyen@12 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"240px"}}>
                            <p className={classes.levelitemnametitleid}>01/12/2021 15:12:17 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"216px"}}>
                            <p className={classes.levelitemnametitleid}> 192.168.3.1 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"400px"}}>
                        <p className={classes.levelitemnametitleid}> Cập nhật thông tin dịch vụ DV_01 </p>    
                        </div>
                    </div>
                    <div className={classes.leveltablelist}>
                        <div className={classes.levelitemnameid} style={{width:"266px"}}>
                            <p className={classes.levelitemnametitleid}> tuyetnguyen@12 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"240px"}}>
                            <p className={classes.levelitemnametitleid}>01/12/2021 15:12:17 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"216px"}}>
                            <p className={classes.levelitemnametitleid}> 192.168.3.1 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"400px"}}>
                        <p className={classes.levelitemnametitleid}> Cập nhật thông tin dịch vụ DV_01 </p>    
                        </div>
                    </div>
                    <div className={classes.leveltablelistid}>
                        <div className={classes.levelitemnameid} style={{width:"266px"}}>
                            <p className={classes.levelitemnametitleid}> tuyetnguyen@12 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"240px"}}>
                            <p className={classes.levelitemnametitleid}>01/12/2021 15:12:17 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"216px"}}>
                            <p className={classes.levelitemnametitleid}> 192.168.3.1 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"400px"}}>
                        <p className={classes.levelitemnametitleid}> Cập nhật thông tin dịch vụ DV_01 </p>    
                        </div>
                    </div>
                    <div className={classes.leveltablelist}>
                        <div className={classes.levelitemnameid} style={{width:"266px"}}>
                            <p className={classes.levelitemnametitleid}> tuyetnguyen@12 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"240px"}}>
                            <p className={classes.levelitemnametitleid}>01/12/2021 15:12:17 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"216px"}}>
                            <p className={classes.levelitemnametitleid}> 192.168.3.1 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"400px"}}>
                        <p className={classes.levelitemnametitleid}> Cập nhật thông tin dịch vụ DV_01 </p>    
                        </div>
                    </div>
                    <div className={classes.leveltablelistid}>
                        <div className={classes.levelitemnameid} style={{width:"266px"}}>
                            <p className={classes.levelitemnametitleid}> tuyetnguyen@12 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"240px"}}>
                            <p className={classes.levelitemnametitleid}>01/12/2021 15:12:17 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"216px"}}>
                            <p className={classes.levelitemnametitleid}> 192.168.3.1 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"400px"}}>
                        <p className={classes.levelitemnametitleid}> Cập nhật thông tin dịch vụ DV_01 </p>    
                        </div>
                    </div>
                    <div className={classes.leveltablelist}>
                        <div className={classes.levelitemnameid} style={{width:"266px"}}>
                            <p className={classes.levelitemnametitleid}> tuyetnguyen@12 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"240px"}}>
                            <p className={classes.levelitemnametitleid}>01/12/2021 15:12:17 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"216px"}}>
                            <p className={classes.levelitemnametitleid}> 192.168.3.1 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"400px"}}>
                        <p className={classes.levelitemnametitleid}> Cập nhật thông tin dịch vụ DV_01 </p>    
                        </div>
                    </div>
                    <div className={classes.leveltablelistid}>
                        <div className={classes.levelitemnameid} style={{width:"266px"}}>
                            <p className={classes.levelitemnametitleid}> tuyetnguyen@12 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"240px"}}>
                            <p className={classes.levelitemnametitleid}>01/12/2021 15:12:17 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"216px"}}>
                            <p className={classes.levelitemnametitleid}> 192.168.3.1 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"400px"}}>
                        <p className={classes.levelitemnametitleid}> Cập nhật thông tin dịch vụ DV_01 </p>    
                        </div>
                    </div>
                    <div className={classes.leveltablelist}>
                        <div className={classes.levelitemnameid} style={{width:"266px"}}>
                            <p className={classes.levelitemnametitleid}> tuyetnguyen@12 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"240px"}}>
                            <p className={classes.levelitemnametitleid}>01/12/2021 15:12:17 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"216px"}}>
                            <p className={classes.levelitemnametitleid}> 192.168.3.1 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"400px"}}>
                        <p className={classes.levelitemnametitleid}> Cập nhật thông tin dịch vụ DV_01 </p>    
                        </div>
                    </div>
                    <div className={classes.leveltablelistid}>
                        <div className={classes.levelitemnameid} style={{width:"266px"}}>
                            <p className={classes.levelitemnametitleid}> tuyetnguyen@12 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"240px"}}>
                            <p className={classes.levelitemnametitleid}>01/12/2021 15:12:17 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"216px"}}>
                            <p className={classes.levelitemnametitleid}> 192.168.3.1 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"400px"}}>
                        <p className={classes.levelitemnametitleid}> Cập nhật thông tin dịch vụ DV_01 </p>    
                        </div>
                    </div>

                </div>


           
            
            
            
            
            </div>

            <div className={classes.chosepape}>
             <Page/>
            </div>    
        </div>
    )
}

export default Diaryuser;