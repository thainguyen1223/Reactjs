import classes from "./Level.module.css"
import Bellactive from "../Bellactive";
import {Link} from 'react-router-dom';

import Levelgoto from "../image/gotoright.svg";
import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from "react-datepicker";
import plus from "../image/plus.svg";
import "react-datepicker/dist/react-datepicker.css";
import goright from "../image/goright.svg"
import fi_search from"../image/fi_search.svg"
import Page from "../Page";
import blue from '../image/blue.svg'
import red from '../image/red.svg'
import black from '../image/black.svg'
function Level(){
    const [startDate, setStartDate] = useState(new Date());

    const optionslevel = [
        'Tất cả', 'Khám sản - Phụ khoa', 'Khám răng hàm mặt','Khám tai mũi họng'
      ];
      const sumitlevel =(e)=>{
          console.log(e.value)
      }
      const defaultOptionlevel = optionslevel[0];
    const optionsstatus = [
        'Tất cả', 'Đang chờ', 'Đã sử dụng','Bỏ qua'
      ];
      const sumitstatus =(e)=>{
          console.log(e.value)
      }
      const defaultOptionstatus = optionsstatus[0];

      const optionspower = [
        'Tất cả', 'Kiosk', 'Hệ thống'
      ];
      const sumitpower =(e)=>{
          console.log(e.value)
      }
      const defaultOptionspower = optionspower[0];
      
   
    const [search , setSearch] = useState('')
    return(
        <div className={classes.level}>
            <div className={classes.levelinfo}>
                <div className={classes.levelinfolist}>
                    <p className={classes.leveltitle}>
                        Cấp số
                    </p>
                    
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
               
                    <p className={classes.levellist }>
                        Danh sách cấp số
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
                <div className={classes.levellistdrow}>
                    <div className={classes.listitemdrow}>
                        
                            <div className={classes.levelitem}>
                                    <div className={classes.levelname}>Tên dịch vụ</div>
                                    <div className={classes.leveldrow}>
                                        <Dropdown options={optionslevel} 
                                        className={classes.chartDropdown}
                                                onChange={(e)=>sumitstatus(e)} 
                                                value={defaultOptionlevel} placeholder="Select an option" />
                                    </div>
                            </div>
                            <div className={classes.levelitem}>
                                    <div className={classes.levelname}>Tình trạng</div>
                                    <div className={classes.leveldrow}>
                                        <Dropdown options={optionsstatus} 
                                                onChange={(e)=>sumitlevel(e)} 
                                                value={defaultOptionstatus} placeholder="Select an option" />
                                    </div>
                            </div>
                            <div className={classes.levelitem}>
                                    <div className={classes.levelname}>Nguồn cấp</div>
                                    <div className={classes.leveldrow}>
                                    <Dropdown options={optionspower} 
                                            onChange={(e)=>sumitpower(e)} 
                                            value={defaultOptionspower} placeholder="Select an option" />
                                    </div>
                            </div>

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
                               <div className={classes.levelitemseach}>
                            
                            <div className={classes.levelname}>Từ khoá</div>
                                <div className={classes.searchinput}>
                                    <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                                    <a href="" className={classes.fi_search}>
                                    <img src={fi_search} alt="" />
                                </a>
                            </div>
                    </div>
                    </div>
                 
                </div>

                <div className={classes.tablelistitem}>
                    <div className={classes.leveltable}>
                        <div className={classes.levelitemname} style={{width:"93px"}}>
                            <p className={classes.levelitemnametitle}> STT </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"162px"}}>
                            <p className={classes.levelitemnametitle}> Tên khách hàng </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"171px"}}>
                            <p className={classes.levelitemnametitle}> Tên dịch vụ </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"161px"}}>
                            <p className={classes.levelitemnametitle}> Thời gian cấp </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"174px"}}>
                            <p className={classes.levelitemnametitle}> Hạn sử dụng </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"147px"}}>
                            <p className={classes.levelitemnametitle}> Trạng thái </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"120px"}}>
                            <p className={classes.levelitemnametitle}> Nguồn cấp </p>    
                        </div>
                     
                            <p className={classes.levelitemnametitle}>  </p>    
                
                    </div>
                    <div className={classes.leveltablelist}>
                        <div className={classes.levelitemnameid} style={{width:"93px"}}>
                            <p className={classes.levelitemnametitleid}> 2010001 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"162px"}}>
                            <p className={classes.levelitemnametitleid}> Lê Huỳnh Ái Vân </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"171px"}}>
                            <p className={classes.levelitemnametitleid}> Khám tim mạch </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"161px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 07/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"174px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 12/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"147px"}}>
                            <img src={blue} alt="blue" alt="blue" className={classes.logo}></img>
                            <p className={classes.levelitemnametitleid}> Đang chờ </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"120px"}}>
                            <p className={classes.levelitemnametitleid}> Kiosk </p>    
                        </div>
                     
                        <a href=""  className={classes.levelitemlistnew}  > chi tiết </a>
             
 
                    </div>

                    <div className={classes.leveltablelistid}>
                        <div className={classes.levelitemnameid} style={{width:"93px"}}>
                            <p className={classes.levelitemnametitleid}> 2010002 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"162px"}}>
                            <p className={classes.levelitemnametitleid}>Huỳnh Ái Vân </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"171px"}}>
                            <p className={classes.levelitemnametitleid}> Khám sản - Phụ Khoa </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"161px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 07/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"174px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 12/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"147px"}}>
                            <img src={black} alt="black" alt="blue" className={classes.logo}></img>
                            <p className={classes.levelitemnametitleid}> Đã sử dụng </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"120px"}}>
                            <p className={classes.levelitemnametitleid}> Kiosk </p>    
                        </div>
                     
                        <a href=""  className={classes.levelitemlistnew}  > chi tiết </a>
   
                    </div>

                    <div className={classes.leveltablelist}>
                        <div className={classes.levelitemnameid} style={{width:"93px"}}>
                            <p className={classes.levelitemnametitleid}> 2010003 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"162px"}}>
                            <p className={classes.levelitemnametitleid}> Lê Ái Vân </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"171px"}}>
                            <p className={classes.levelitemnametitleid}> Khám răng hàm mặt </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"161px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 07/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"174px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 12/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"147px"}}>
                            <img src={blue} alt="blue" className={classes.logo} ></img>
                            <p className={classes.levelitemnametitleid}> Đang chờ' </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"120px"}}>
                            <p className={classes.levelitemnametitleid}> Hệ thống </p>    
                        </div>
                     
                        
                        <a href=""  className={classes.levelitemlistnew}  > chi tiết</a>
  
 
                        </div>

                        <div className={classes.leveltablelistid}>
                        <div className={classes.levelitemnameid} style={{width:"93px"}}>
                            <p className={classes.levelitemnametitleid}> 2010004 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"162px"}}>
                            <p className={classes.levelitemnametitleid}> Nguyễn Ái Vân </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"171px"}}>
                            <p className={classes.levelitemnametitleid}> Khám tai mũi họng </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"161px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 07/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"174px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 12/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"147px"}}>
                            <img src={blue} alt="blue" alt="blue" className={classes.logo}></img>
                            <p className={classes.levelitemnametitleid}> Đang chờ' </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"120px"}}>
                            <p className={classes.levelitemnametitleid}> Hệ thống </p>    
                        </div>
                     
                       
                        <a href=""  className={classes.levelitemlistnew}  > chi tiết</a>
  
                        </div>

                        <div className={classes.leveltablelist}>
                        <div className={classes.levelitemnameid} style={{width:"93px"}}>
                            <p className={classes.levelitemnametitleid}> 2010005 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"162px"}}>
                            <p className={classes.levelitemnametitleid}> Trần Thị Ái Vân</p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"171px"}}>
                            <p className={classes.levelitemnametitleid}> Khám hô hấp </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"161px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 07/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"174px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 12/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"147px"}}>
                            <img src={blue} alt="blue" alt="blue" className={classes.logo}></img>
                            <p className={classes.levelitemnametitleid}> Đang chờ' </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"120px"}}>
                            <p className={classes.levelitemnametitleid}> Kiosk </p>    
                        </div>
                     
                        <a href=""  className={classes.levelitemlistnew}  > chi tiết </a>
 
                        </div>

                        <div className={classes.leveltablelistid}>
                        <div className={classes.levelitemnameid} style={{width:"93px"}}>
                            <p className={classes.levelitemnametitleid}> 2010006 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"162px"}}>
                            <p className={classes.levelitemnametitleid}> Lê Huỳnh Nghĩa</p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"171px"}}>
                            <p className={classes.levelitemnametitleid}> Khám tổng quát </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"161px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 07/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"174px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 12/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"147px"}}>
                            <img src={black} alt="black" alt="blue" className={classes.logo}></img>
                            <p className={classes.levelitemnametitleid}> Đã sử dụng </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"120px"}}>
                            <p className={classes.levelitemnametitleid}> Hệ thống </p>    
                        </div>
                     
                        <a href=""  className={classes.levelitemlistnew}  > chi tiết</a>
  
                        </div>

                       

                        <div className={classes.leveltablelist}>
                        <div className={classes.levelitemnameid} style={{width:"93px"}}>
                            <p className={classes.levelitemnametitleid}> 2010007 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"162px"}}>
                            <p className={classes.levelitemnametitleid}> Lê Huỳnh Đức</p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"171px"}}>
                            <p className={classes.levelitemnametitleid}> Khám tai mũi họng </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"161px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 07/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"174px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 12/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"147px"}}>
                            <img src={black} alt="black" alt="blue" className={classes.logo}></img>
                            <p className={classes.levelitemnametitleid}> Đã sử dụng </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"120px"}}>
                            <p className={classes.levelitemnametitleid}> Kiosk </p>    
                        </div>
                     
                        
                        <a href=""  className={classes.levelitemlistnew}  > chi tiết</a>
  
  
                        </div>

                        <div className={classes.leveltablelistid}>
                        <div className={classes.levelitemnameid} style={{width:"93px"}}>
                            <p className={classes.levelitemnametitleid}> 2010008 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"162px"}}>
                            <p className={classes.levelitemnametitleid}> Phạm Văn Mạnh</p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"171px"}}>
                            <p className={classes.levelitemnametitleid}> Khám tổng quát </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"161px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 07/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"174px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 12/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"147px"}}>
                            <img src={red} alt="red" alt="blue" className={classes.logo}></img>
                            <p className={classes.levelitemnametitleid}> Bỏ qua </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"120px"}}>
                            <p className={classes.levelitemnametitleid}> Hệ thống </p>    
                        </div>
                     
                        
                        <a href=""  className={classes.levelitemlistnew}  > chi tiết</a>
  
                        </div>
                        
                        <div className={classes.leveltablelist}>
                        <div className={classes.levelitemnameid} style={{width:"93px"}}>
                            <p className={classes.levelitemnametitleid}> 2010009 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"162px"}}>
                            <p className={classes.levelitemnametitleid}>Lê Thị Cẩm Tiên</p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"171px"}}>
                            <p className={classes.levelitemnametitleid}> Khám tai mũi họng</p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"161px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 07/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"174px"}}>
                            <p className={classes.levelitemnametitleid}> 14:35 - 12/11/2021 </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"147px"}}>
                            <img src={black} alt="black" alt="blue" className={classes.logo}></img>
                            <p className={classes.levelitemnametitleid}> Đã sử dụng </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"120px"}}>
                            <p className={classes.levelitemnametitleid}> Hệ thống </p>    
                        </div>
                     
                        
                        <a href=""  className={classes.levelitemlistnew}  > chi tiết</a>
  
                        </div>





                       
            
                    
                </div>
    
            </div>   
         <Link to= "/level/add-level">   <div className={classes.add}>
                        <div className={classes.addlevel}>
                                <img src={plus} alt="" />  
                        </div>
                        <p className={classes.leveltitlename}> Cấp số mới</p>
                </div>
        </Link>      
            <div className={classes.chosepape}>

               <Page/>
                </div>        
            
            
        </div>
    )
}

export default Level;