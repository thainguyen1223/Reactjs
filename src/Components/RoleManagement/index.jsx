import classes from './RoleManagement.module.css'
import Listitem from '../Listitem'
import Bellactive from "../Bellactive";
import {Link} from 'react-router-dom';
import rolegoto from "../image/gotoright.svg";
import plus from "../image/plus.svg";
function RoleManagement(){
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

export default RoleManagement;