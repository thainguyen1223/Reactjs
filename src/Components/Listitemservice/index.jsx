import classes from './Listitemservice.module.css'
import Bellactive from "../Bellactive";
import {Link} from 'react-router-dom';
import levelgoto     from "../image/gotoright.svg";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fi_search from"../image/fi_search.svg"
import React, {useState} from 'react';
import goright from "../image/goright.svg";
import red from '../image/red.svg'
import green from '../image/green.svg'
import Page from "../Page";
import plus from "../image/plus.svg";
function Listitemservice(){
    const [startDate, setStartDate] = useState(new Date());
    const [search , setSearch] = useState('')
    
    const optionsservice = [
        'Tất cả','Hoạt động','Ngưng hoạt động '
      ];
      const sumitservice =(e)=>{
          console.log(e.value)
      }
      const defaultOptionservice = optionsservice[0];
    return (
        <div className={classes.service}>
            <div className={classes.serviceinfo}>
                <div className={classes.serviceinfolist}>
                    <p className={classes.servicetitle}>
                        Dịch vụ
                    </p>
                        <img src={levelgoto} alt="levelgoto" className={classes.servicegoto}></img>
                
                    <p className={classes.servicelist }>
                        Danh sách dịch vụ
                    </p>
                </div>
                <div className={classes.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={classes.servicecontainer}>
                <div className={classes.servicelisttitle}>
                    Quản lý dịch vụ
                </div>
                <div className={classes.servicelistdrow}>
                    <div className={classes.serviceitemdrow}>  
                        <div className={classes.serviceitem}>
                            <div className={classes.servicename}>Tên vai trò</div>
                                <div className={classes.servicedrow}>
                                    <Dropdown options={optionsservice}  
                                            onChange={(e)=>sumitservice(e)} 
                                            value={defaultOptionservice} placeholder="Select an option" />
                                </div>
                        </div>
                        <div className={classes.serviceitem}>
                            <div className={classes.servicenamee}>Chọn thời gian</div>
                                <div className={classes.servicedrowcalendar}>
                                    {/* <img src={calendar} alt=''></img> */}
                                    <DatePicker 
                                
                                    selected={startDate} onChange={(date) => setStartDate(date)} />
                                    <img src={goright} alt="goright" className={classes.goright}></img>    
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                        </div>
                    </div>
                        <div className={classes.serviceitem}>
                            <div className={classes.servicename}>Từ khoá</div>
                                <div className={classes.servicedrow}>
                                <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                                <a href="" className={classes.fi_search}>
                                    <img src={fi_search} alt="" />
                                </a>
                                </div>
                        </div>
                </div>
                <div className={classes.tablelistitem}>
                    <div className={classes.servicetable}>
                        <div className={classes.serviceitemname} style={{width:"150px"}}>
                            <p className={classes.serviceitemnametitle}> Mã dịch vụ </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"224px"}}>
                            <p className={classes.serviceitemnametitle}> Tên dịch vụ  </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"230px"}}>
                            <p className={classes.serviceitemnametitle}> Mô tả </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"253px"}}>
                            <p className={classes.serviceitemnametitle}> Trạng thái hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <p className={classes.serviceitemnametitle}>  </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <p className={classes.serviceitemnametitle}>  </p>    
                        </div>
                    </div>

                    <div className={classes.servicetablelist}>
                        <div className={classes.serviceitemnameid} style={{width:"150px"}}>
                            <p className={classes.serviceitemnametitleid}> KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"224px"}}>
                            <p className={classes.serviceitemnametitleid}>KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"230px"}}>
                            <p className={classes.serviceitemnametitleid}> Mô tả dịch vụ 1 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"253px"}}>
                            <img src={green}  alt="green"  className={classes.logo}></img>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Chi tiết  </a>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Cập nhật </a>    
                        </div>
                    </div>
                    
                    <div className={classes.servicetablelistid}>
                        <div className={classes.serviceitemnameid} style={{width:"150px"}}>
                            <p className={classes.serviceitemnametitleid}> KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"224px"}}>
                            <p className={classes.serviceitemnametitleid}>KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"230px"}}>
                            <p className={classes.serviceitemnametitleid}> Hoạt động  </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"253px"}}>
                            <img src={green}  alt="green"  className={classes.logo}></img>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <Link to ="./detailservice">
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Chi tiết  </a>    
                        </div>
                        </Link>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Cập nhật </a>    
                        </div>
                    </div>

                    <div className={classes.servicetablelist}>
                        <div className={classes.serviceitemnameid} style={{width:"150px"}}>
                            <p className={classes.serviceitemnametitleid}> KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"224px"}}>
                            <p className={classes.serviceitemnametitleid}>KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"230px"}}>
                            <p className={classes.serviceitemnametitleid}> Hoạt động  </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"253px"}}>
                            <img src={red}  alt="red"  className={classes.logo}></img>
                            <p className={classes.serviceitemnametitleid}> Ngưng hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Chi tiết  </a>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Cập nhật </a>    
                        </div>
                    </div>

                    <div className={classes.servicetablelistid}>
                        <div className={classes.serviceitemnameid} style={{width:"150px"}}>
                            <p className={classes.serviceitemnametitleid}> KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"224px"}}>
                            <p className={classes.serviceitemnametitleid}>KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"230px"}}>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"253px"}}>
                            <img src={green}  alt="green"  className={classes.logo}></img>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Chi tiết  </a>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Cập nhật </a>    
                        </div>
                    </div>

                    <div className={classes.servicetablelist}>
                        <div className={classes.serviceitemnameid} style={{width:"150px"}}>
                            <p className={classes.serviceitemnametitleid}> KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"224px"}}>
                            <p className={classes.serviceitemnametitleid}>KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"230px"}}>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"253px"}}>
                            <img src={green}  alt="green"  className={classes.logo}></img>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Chi tiết  </a>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Cập nhật </a>    
                        </div>
                    </div>

                    <div className={classes.servicetablelistid}>
                        <div className={classes.serviceitemnameid} style={{width:"150px"}}>
                            <p className={classes.serviceitemnametitleid}> KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"224px"}}>
                            <p className={classes.serviceitemnametitleid}>KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"230px"}}>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"253px"}}>
                            <img src={green}  alt="green"  className={classes.logo}></img>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Chi tiết  </a>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Cập nhật </a>    
                        </div>
                    </div>

                    <div className={classes.servicetablelist}>
                        <div className={classes.serviceitemnameid} style={{width:"150px"}}>
                            <p className={classes.serviceitemnametitleid}> KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"224px"}}>
                            <p className={classes.serviceitemnametitleid}>KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"230px"}}>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"253px"}}>
                            <img src={green}  alt="green"  className={classes.logo}></img>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Chi tiết  </a>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Cập nhật </a>    
                        </div>
                    </div>

                    <div className={classes.servicetablelistid}>
                        <div className={classes.serviceitemnameid} style={{width:"150px"}}>
                            <p className={classes.serviceitemnametitleid}> KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"224px"}}>
                            <p className={classes.serviceitemnametitleid}>KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"230px"}}>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"253px"}}>
                            <img src={green}  alt="green"  className={classes.logo}></img>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Chi tiết  </a>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Cập nhật </a>    
                        </div>
                    </div>

                    <div className={classes.servicetablelist}>
                        <div className={classes.serviceitemnameid} style={{width:"150px"}}>
                            <p className={classes.serviceitemnametitleid}> KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"224px"}}>
                            <p className={classes.serviceitemnametitleid}>KIO_01 </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"230px"}}>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"253px"}}>
                            <img src={green}  alt="green"  className={classes.logo}></img>
                            <p className={classes.serviceitemnametitleid}> Hoạt động </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Chi tiết  </a>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <a href='' className={classes.serviceitemlistnew}> Cập nhật </a>    
                        </div>
                    </div>
                </div>
            </div>

            <Link to= '/listservice'>  <div className={classes.add}>
                        <div className={classes.addservice}>
                                <img src={plus} alt="" />  
                        </div>
                        <p className={classes.servicetitlename}> Thêm dịch vụ</p>
                </div>
            </Link>    
            <div className={classes.chosepape}>

                <Page/>
            </div>      
        </div>
    )
}

export default Listitemservice;