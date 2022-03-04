import classes from './Listaccount.module.css'
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';

import Levelgoto from "../../image/gotoright.svg";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import plus from "../../image/plus.svg";
import "react-datepicker/dist/react-datepicker.css";

import fi_search from"../../image/fi_search.svg"
import Page from "../../Page";

import {fetchData} from '../../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import green from '../../image/green.svg'
import red from '../../image/red.svg'

function Listaccount({dataTable,fetchData}:any){
    useEffect(() => {
        
        fetchData()
        

    
    },[])

    const   dataUserList = dataTable.dataUserList



    const ServiceUsedPoint = ()=>{
        return (
                <><span className="green">
                    <img src={green} alt='green' ></img>
                    
                  </span><span>Hoạt động</span></>
        )
        }  
        
        
        const ServiceUnactivePoint = ()=>{
              return (  <><span className="red">
                
                <img src={red} alt="red"></img>
                </span><span>Ngưng hoạt động</span></>
              
              ) 
        }
    const options = [
        'Tất cả', 'Kế toán', 'Quản lý' , 'Admin'
      ];

    const defaultOption = options[0]

      const handleDropdownValue = (e:any)=>{
            
        console.log(e.value);
         
   }


  const [search , setSeatch] = useState('')

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
                                <Dropdown options={options}  
                                        onChange={(e)=>handleDropdownValue(e)} 
                                        value={defaultOption } placeholder="Select an option" />
                            </div>
                    </div>
                    <div className={classes.accountitem}>
                        <div className={classes.accountname}>Từ khoá</div>
                            <div className={classes.accountdrow}>
                            <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSeatch(e.target.value)}/>
                            <div className={classes.fi_search}>
                                <img src={fi_search} alt="fi" />
                            </div>
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

                    {
                      dataUserList.map( (item:any,index:any) =>
                    <div className={classes.accounttablelist} key={index}>
                        <div className={classes.accountitemname} style={{width:"150px"}}>
                            <p className={classes.accountitemnametitleid}> {item.id} </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"166px"}}>
                            <p className={classes.accountitemnametitleid}> {item.name} </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"130px"}}>
                            <p className={classes.accountitemnametitleid}> {item.phone}</p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"255px"}}>
                            <p className={classes.accountitemnametitleid}> {item.email} </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"114px"}}>
                            <p className={classes.accountitemnametitleid}> {item.role} </p>    
                        </div>
                        <div className={classes.accountitemname} style={{width:"193px"}}>
                           
                            <p className={`${classes.levelitemnametitleid} ${classes.id}`}>
                         
                              {item.status == 'Hoạt động' && <ServiceUsedPoint/>}
                              {item.status == 'Ngưng hoạt động' && <ServiceUnactivePoint/>}  </p>    
                        </div>
                        <Link to= '/dashboard/AccountManagement/Updateaccount'  className={classes.accountitemlistnew}>
                         cập nhập 
                        </Link>   
 
                    </div>
                        )}
                    
 
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
const mapStateToProps = (state:any) =>{
    return {
  
      dataTable:state.dataAlta
  
     
        
        
        
    }
  }
  
  const mapDispatchToProps = (dispatch:any) =>{
    return {
  
            fetchData: ()=>  dispatch(fetchData()),
       
      
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Listaccount)
  
