import classes from './AddRole.module.css'
import Listitem from '../../Listitem'
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import rolegoto from "../../image/gotoright.svg";
import {useState} from 'react'
import star from '../../image/star.svg'
function AddRole(){
    const [nameAddRole, setNameAddRole] = useState()

    const [desService , setDesService] = useState()
    
    // const [desAddRole , setDesAddRole] = useState<string>()
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

                            <p className={classes.roletitle}>
                                Quản lý vai trò
                            </p>
                            <img src={rolegoto} alt="rolegoto" className={classes.rolegoto}></img>
                            <p className={classes.rolelist }>
                                Thêm vai trò
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
                                <div className={classes.tableltilte}>
                                    Thông tin vai trò
                                </div>
                                <div className={classes.tablelcontainer}>
                                    <div className={classes.tablelcontainer__right}>
                                        <div className={classes.tablelcontainer__Input}>
                                            <div className={classes.tablelcontainer__items}>
                                                <div className={classes.tablelcontainer__rolename}>
                                                    <div className={classes.table__title}>
                                                       <p className={classes.title}> Tên vai trò </p> 
                                                        <img src={star} alt='star' className={classes.starid}></img>
                                                    </div>
                                                  
                                                    <div className={classes.tablelcontainer__text}>
                                                        <input type="text" value={nameAddRole} onChange={ e=> setNameAddRole(e.target.value)} placeholder="Nhập tên vai trò"  />
                                                    </div>
                                                </div>


                                                <div className={classes.tablelcontainer__rolename1}>
                                                    <div className={classes.table__title}>
                                                       <p className={classes.title}> Mô tả: </p> 
                                                        
                                                    </div>
                                                  
                                                    <div className={classes.tablelcontainer__text}>
                                                        <textarea rows={4} cols={50} placeholder="Nhập mô tả" value={desService} onChange={ e=> setDesService(e.target.value)}></textarea>
                                                    </div>
                                                </div>

                                                <div className={classes.nameitem}>
                                                    <img src={star} alt='star' className={classes.star}></img>
                                                    <p className={classes.nametitle}> Là trường thông tin bắt buộc</p>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>

                                    <div className={classes.tablelcontainer__left}>
                                        <div className={classes.table__title}>
                                            <p className={classes.title}> Phân quyền chức năng </p> 
                                            <img src={star} alt='star' className={classes.starid}></img>
                                        </div>
                                        <div className={classes.tablelist}>
                                            <div className={classes.tablelistgroup}>
                                                <div className={classes.tablegroupA}>
                                                        Nhóm chức năng A
                                                </div>

                                                <div className={classes.tablegroup___checkbox}>
                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Tất cả</p>
                                                    </div> 

                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Chức năng x</p>
                                                    </div> 

                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Chức năng y</p>
                                                    </div> 

                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Chức năng z</p>
                                                    </div> 
                                                </div>
                                            </div>

                                            <div className={classes.tablelistgroup}>
                                                <div className={classes.tablegroupA}>
                                                        Nhóm chức năng B
                                                </div>

                                                <div className={classes.tablegroup___checkbox}>
                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Tất cả</p>
                                                    </div> 

                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Chức năng x</p>
                                                    </div> 

                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Chức năng y</p>
                                                    </div> 

                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Chức năng z</p>
                                                    </div> 
                                                </div>
                                            </div>


                                            <div className={classes.tablelistgroup}>
                                                <div className={classes.tablegroupA}>
                                                        Nhóm chức năng C
                                                </div>

                                                <div className={classes.tablegroup___checkbox}>
                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Tất cả</p>
                                                    </div> 

                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Chức năng x</p>
                                                    </div> 

                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Chức năng y</p>
                                                    </div> 

                                                    <div className={classes.tablegroup___item}>
                                                        <input type="checkbox"/> 
                                                        <p className={classes.tablegroup___title}>Chức năng z</p>
                                                    </div> 
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>


                            </div>

                            <div className={classes.contaniner__button}>
                                <div className={classes.contaniner__cancel}>
                                    <Link to="/dashboard/RoleManagement"><button>Hủy bỏ</button></Link>
                                </div>
                                <div className={classes.contaniner__addrole}>
                                    <button>Thêm dịch vụ</button>
                                </div>
                             </div>
                    </div>

                    

                </div>
            </div>
        </div>
    )

}

export default  AddRole;