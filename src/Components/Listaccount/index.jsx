import classes from './Listaccount.module.css'
import Bellactive from "../Bellactive";
import {Link} from 'react-router-dom';

import Levelgoto from "../image/gotoright.svg";
import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import plus from "../image/plus.svg";
import "react-datepicker/dist/react-datepicker.css";
// import goright from "../image/goright.svg"
import fi_search from"../image/fi_search.svg"
import Page from "../Page";
import red from '../image/red.svg'
import green from '../image/green.svg'

function Listaccount(){
    const [search , setSearch] = useState('')
    const optionsaccount = [
        'Tất cả','kế toán '
      ];
      const sumitaccount =(e)=>{
          console.log(e.value)
      }
      const defaultOptionaccount = optionsaccount[0];
    return(
    <div className={classes.account}>
        <div className={classes.accountinfo}>
            <div className={classes.accountinfolist}>
                <p className={classes.accounttitle}>
                    Cài đặt hệ thống
                </p>
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
               
                <p className={classes.accountlist }>
                    Quản lý tài khoản
                </p>
            </div>
            <div className={classes.bell}>
                <Bellactive/>
            </div>
        </div>
        <div className={classes.accountcontainer}>
            <div className={classes.accountlisttitle}>
                Danh sách tài khoản
            </div>
            <div className={classes.accountlistdrow}>

                <div className={classes.accountitemdrow}>                 
                    <div className={classes.accountitem}>
                        <div className={classes.accountname}>Tên vai trò</div>
                            <div className={classes.accountdrow}>
                                <Dropdown options={optionsaccount}  
                                        onChange={(e)=>sumitaccount(e)} 
                                        value={defaultOptionaccount} placeholder="Select an option" />
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
            </div>
            <div className={classes.tablelistitem}>
                <div className={classes.accounttable}>
                    <div className={classes.accountitemname} style={{width:"150px"}}>
                        <p className={classes.accountitemnametitle}> Tên đăng nhập </p>    
                    </div>
                    <div className={classes.accountitemname} style={{width:"166px"}}>
                        <p className={classes.accountitemnametitle}> Họ tên </p>    
                    </div>
                    <div className={classes.accountitemname} style={{width:"130px"}}>
                        <p className={classes.accountitemnametitle}> Số điện thoại </p>    
                    </div>
                    <div className={classes.accountitemname} style={{width:"255px"}}>
                        <p className={classes.accountitemnametitle}> Email </p>    
                    </div>
                    <div className={classes.accountitemname} style={{width:"114px"}}>
                        <p className={classes.accountitemnametitle}> Vai trò </p>    
                    </div>
                    <div className={classes.accountitemname} style={{width:"193px"}}>
                        <p className={classes.accountitemnametitle}> Trạng thái hoạt động</p>    
                    </div>
                        <p className={classes.accountitemnametitle}>  </p>    
                    </div>


                    <div className={classes.accounttablelist}>
                        <div className={classes.accountitemnameid} style={{width:"150px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen@12 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"166px"}}>
                            <p className={classes.accountitemnametitleid}> Nguyen Văn A </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"130px"}}>
                            <p className={classes.accountitemnametitleid}> 0919256712 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"255px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen123@gmail.com  </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"114px"}}>
                            <p className={classes.accountitemnametitleid}> Kế toán </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"193px"}}>
                            <img src={green} alt="green"  className={classes.logo}></img>
                            <p className={classes.accountitemnametitleid}> Hoạt động </p>    
                        </div>
                        <Link to= '/dashboard/AccountManagement/Updateaccount'  className={classes.accountitemlistnew}>
                         cập nhập 
                        </Link>   
 
                    </div>

                    <div className={classes.accounttablelist}>
                        <div className={classes.accountitemnameid} style={{width:"150px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen@10 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"166px"}}>
                            <p className={classes.accountitemnametitleid}> Nguyen Văn B </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"130px"}}>
                            <p className={classes.accountitemnametitleid}> 0919236712 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"255px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen123@gmail.com  </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"114px"}}>
                            <p className={classes.accountitemnametitleid}> Kế toán </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"193px"}}>
                            <img src={green}  alt="green"  className={classes.logo}></img>
                            <p className={classes.accountitemnametitleid}> Hoạt động </p>    
                        </div>
                     
                        <a href=""  className={classes.accountitemlistnew}  > cập nhập  </a>
             
 
                    </div>

                    <div className={classes.accounttablelist}>
                        <div className={classes.accountitemnameid} style={{width:"150px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen@22 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"166px"}}>
                            <p className={classes.accountitemnametitleid}> Nguyen Văn C </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"130px"}}>
                            <p className={classes.accountitemnametitleid}> 0919116712 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"255px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen222@gmail.com </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"114px"}}>
                            <p className={classes.accountitemnametitleid}> Kế toán </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"193px"}}>
                            <img src={red} alt="blue"  className={classes.logo}></img>
                            <p className={classes.accountitemnametitleid}>Ngưng hoạt động </p>    
                        </div>
                     
                        <a href=""  className={classes.accountitemlistnew}  > cập nhập  </a>
             
 
                    </div>

                    <div className={classes.accounttablelist}>
                        <div className={classes.accountitemnameid} style={{width:"150px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen@18 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"166px"}}>
                            <p className={classes.accountitemnametitleid}> Nguyen Văn D </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"130px"}}>
                            <p className={classes.accountitemnametitleid}> 0919253715 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"255px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen232@gmail.com  </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"114px"}}>
                            <p className={classes.accountitemnametitleid}> Kế toán </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"193px"}}>
                            <img src={green}  alt="blue" className={classes.logo}></img>
                            <p className={classes.accountitemnametitleid}> Hoạt động </p>    
                        </div>
                     
                        <a href=""  className={classes.accountitemlistnew}  > cập nhập  </a>
             
 
                    </div>

                    <div className={classes.accounttablelist}>
                        <div className={classes.accountitemnameid} style={{width:"150px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen@19</p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"166px"}}>
                            <p className={classes.accountitemnametitleid}> Nguyen Văn T </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"130px"}}>
                            <p className={classes.accountitemnametitleid}> 0919233712 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"255px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen244@gmail.com  </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"114px"}}>
                            <p className={classes.accountitemnametitleid}> Kế toán </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"193px"}}>
                            <img src={green} alt="green" className={classes.logo}></img>
                            <p className={classes.accountitemnametitleid}> Hoạt động </p>    
                        </div>
                     
                        <a href=""  className={classes.accountitemlistnew}  > cập nhập  </a>
             
 
                    </div>

                    <div className={classes.accounttablelist}>
                        <div className={classes.accountitemnameid} style={{width:"150px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen@18 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"166px"}}>
                            <p className={classes.accountitemnametitleid}> Nguyen Văn K </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"130px"}}>
                            <p className={classes.accountitemnametitleid}> 0919277712 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"255px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen242@gmail.com  </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"114px"}}>
                            <p className={classes.accountitemnametitleid}> Kế toán </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"193px"}}>
                            <img src={green} alt="green" className={classes.logo}></img>
                            <p className={classes.accountitemnametitleid}> Hoạt động </p>    
                        </div>
                     
                        <a href=""  className={classes.accountitemlistnew}  > cập nhập  </a>
             
 
                    </div>

                    <div className={classes.accounttablelist}>
                        <div className={classes.accountitemnameid} style={{width:"150px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen@16 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"166px"}}>
                            <p className={classes.accountitemnametitleid}> Nguyen Văn N</p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"130px"}}>
                            <p className={classes.accountitemnametitleid}> 0919257008 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"255px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen122@gmail.com  </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"114px"}}>
                            <p className={classes.accountitemnametitleid}> Kế toán </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"193px"}}>
                            <img src={green} alt="green"  className={classes.logo}></img>
                            <p className={classes.accountitemnametitleid}> Hoạt động </p>    
                        </div>
                     
                        <a href=""  className={classes.accountitemlistnew}  > cập nhập  </a>
             
 
                    </div>

                    <div className={classes.accounttablelist}>
                        <div className={classes.accountitemnameid} style={{width:"150px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen@14 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"166px"}}>
                            <p className={classes.accountitemnametitleid}> Nguyen Văn M </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"130px"}}>
                            <p className={classes.accountitemnametitleid}> 0919258003 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"255px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen227@gmail.com  </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"114px"}}>
                            <p className={classes.accountitemnametitleid}> Kế toán </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"193px"}}>
                            <img src={red} alt="red"  className={classes.logo}></img>
                            <p className={classes.accountitemnametitleid}> Ngưng hoạt động </p>    
                        </div>
                     
                        <a href=""  className={classes.accountitemlistnew}  > cập nhập  </a>
             
 
                    </div>

                    <div className={classes.accounttablelist}>
                        <div className={classes.accountitemnameid} style={{width:"150px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen@13 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"166px"}}>
                            <p className={classes.accountitemnametitleid}> Nguyen Văn L </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"130px"}}>
                            <p className={classes.accountitemnametitleid}> 0919251274 </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"255px"}}>
                            <p className={classes.accountitemnametitleid}> tuyetnguyen278@gmail.com  </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"114px"}}>
                            <p className={classes.accountitemnametitleid}> Kế toán </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"193px"}}>
                            <img src={green} alt="green" className={classes.logo}></img>
                            <p className={classes.accountitemnametitleid}> Hoạt động </p>    
                        </div>
                     
                        <a href=""  className={classes.accountitemlistnew}  > cập nhập  </a>
             
 
                    </div>
                </div>
            
        </div>  
        <Link to= '/dashboard/AccountManagement/Moreaccount'>  <div className={classes.add}>
                        <div className={classes.addaccount}>
                                <img src={plus} alt="" />  
                        </div>
                        <p className={classes.accounttitlename}> Thêm tài khoản</p>
                </div>
        </Link>      
            <div className={classes.chosepape}>

               <Page/>
                </div>        
            
    </div>
    )
}

export default Listaccount;