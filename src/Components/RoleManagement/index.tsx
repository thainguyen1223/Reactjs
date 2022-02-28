import classes from './RoleManagement.module.css'
import Listitem from '../Listitem'
import Bellactive from "../Bellactive";
import {Link} from 'react-router-dom';
import rolegoto from "../image/gotoright.svg";
import plus from "../image/plus.svg";
import React, { useState,useEffect } from "react";
import {connect} from 'react-redux';
import {fetchData,SENDDATAROLEMANAGEMENT} from '../../redux/DatAlta/DataAltaActions'

function RoleManagement({dataTable,fetchData,SENDDATAROLEMANAGEMENT}:any ){
    useEffect(() => {

        fetchData()
        

    },[])

    const dataRoleTableDetail = dataTable.dataRole

    const handleSend = (data:any) => {
        SENDDATAROLEMANAGEMENT(data)
  }

      
      

    return(
        <div className={classes.listrole}>
            <Listitem/>
             <div className={classes.listroleright}>
                <div className={classes.role}>
                    <div className={classes.roleinfo}>
                        <div className={classes.roleinfolist}>
                            <p className={classes.roletitle}>
                                Cài đặt hệ thống
                            </p>
                    
                            <img src={rolegoto} alt="rolegoto" className={classes.rolegoto}></img>
               
                            <p className={classes.rolelist }>
                                Quản lý vai trò
                            </p>
                    
                        </div>
                            <div className={classes.bell}>
                                <Bellactive/>
                            </div>
                    </div>  

                        <div className={classes.rolecontainer}>
                            <div className={classes.rolelisttitle}>
                                    Danh sách vai trò
                            </div>
                            <div className={classes.tablelistitem}>
                                <div className={classes.roletable}>
                                    <div className={classes.roleitemname} style={{width:"224px"}}>
                                        <p className={classes.roleitemnametitle}> Tên vai trò </p>    
                                    </div>

                                    <div className={classes.roleitemname} style={{width:"224px"}}>
                                        <p className={classes.roleitemnametitle}> Số người dùng </p>    
                                    </div>

                                    <div className={classes.roleitemname} style={{width:"537px"}}>
                                        <p className={classes.roleitemnametitle}> Mô tả </p>    
                                    </div>

                                    <div className={classes.roleitemname} style={{width:"125px"}}>
                                        <p className={classes.roleitemnametitle}>  </p>    
                                    </div>
                                </div>
                                {
                                    dataRoleTableDetail.map ((item:any,index:any)=>
                                    <div className={classes.leveltablelist}key={index} >
                                        <div className={classes.levelitemname} style={{width:"224px"}}>
                                            <p className={classes.levelitemnametitleid}>{item.name}</p>    
                                        </div>
                                        <div className={classes.levelitemname} style={{width:"224px"}}>
                                            <p className={classes.levelitemnametitleid}>{item.users}</p>    
                                        </div>
                                        <div className={classes.levelitemname} style={{width:"537px"}}>
                                            <p className={classes.levelitemnametitleid}>{item.des}</p>    
                                        </div>
                                        <div className={classes.roleitemname} style={{width:"125px"}}>
                                            <Link to='/dashboard/RoleManagement/add-role-management'>
                                            <p className={classes.roleitemnametitleid1}>   <span onClick={ () => handleSend(item)}>
                                                      Cập nhập
                                                </span></p>    
                                                </Link>
                                        </div>
             
                                    </div>
                                
                                )
                            }
                            </div>

                            
                        </div>

                        <Link to= "/dashboard/RoleManagement/add-role-management">
                            <div className={classes.add}>
                                <div className={classes.addrole}>
                                        <img src={plus} alt="" />  
                                </div>
                                <p className={classes.roletitlename}> Thêm vai trò</p>
                            </div>
                        </Link>  
                 </div>
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
            SENDDATAROLEMANAGEMENT: (data:any)=> dispatch(SENDDATAROLEMANAGEMENT(data))  
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(RoleManagement)