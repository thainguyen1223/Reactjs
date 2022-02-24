import classes from "./Listdevice.module.css"
import Levelgoto from "../image/gotoright.svg";
import Bellactive from "../Bellactive";
import fi_search from"../image/fi_search.svg"
import Dropdown from 'react-dropdown';
import {useState, useEffect} from 'react';
import plus from "../image/plus.svg";
import {Link} from 'react-router-dom';
function Listdevice(){
    const [search , setSearch] = useState('')
    const optionsdevice = [
        'Tất cả', 'Hoạt động', 'Ngưng hoạt động'
      ];
      const sumitdevice =(e)=>{
        console.log(e.value)
    }
    const defaultOptiondevice = optionsdevice [0];
    const optionsconnet = [
        'Tất cả', 'Kết nối', 'Mất kết nối','Khám tai mũi họng'
      ];  

      const sumitconnet =(e)=>{
        console.log(e.value)
    }
    const defaultOptionconnet = optionsconnet [0];
    return(
        <div className={classes.device}>
              <div className={classes.info}>
                <div className={classes.infolist}>
                    <p className={classes.title}>
                        Thiết bị 
                    </p>
                    
                    <img src={Levelgoto} alt="levelgoto" className={classes.devicegoto}></img>
            
                    <p className={classes.detaillist}>
                        Danh sách thiết bị 
                    </p>

                </div>
                <div className={classes.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.listtitle}>
                    Danh sách thiết bị
                </div>

                <div className={classes.devicelistdrow}>
                    <div className={classes.listitemdrow}>
                        <div className={classes.deviceitem}>
                            <div className={classes.devicename}>Trạng thái hoạt động</div>
                                <div className={classes.devicedrow}>
                                    <Dropdown options={ optionsdevice} 
                                       
                                       onChange={(e)=>sumitdevice(e)} 
                                       value={defaultOptiondevice} placeholder="Select an option" />
                                        
                                </div>
                        </div>

                        <div className={classes.deviceitem}>
                            <div className={classes.devicename}>Trạng thái hoạt động</div>
                                <div className={classes.devicedrow}>
                                    <Dropdown options={ optionsconnet} 
                                       
                                       onChange={(e)=>sumitconnet(e)} 
                                       value={defaultOptionconnet} placeholder="Select an option" />
                                        
                                </div>
                        </div>

                    </div>
                    <div className={classes.deviceitemseach}>
                            <div className={classes.devicename}>Từ khoá</div>
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
                    <div className={classes.devicetable}>
                            <div className={classes.deviceitemname} style={{width:"103px"}}>
                                <p className={classes.deviceitemnametitle}> Mã thiết bị </p>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"99px"}}>
                                <p className={classes.deviceitemnametitle}> Tên thiết bị </p>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"138px"}}>
                                <p className={classes.deviceitemnametitle}> Địa chỉ IP </p>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"171px"}}>
                                <p className={classes.deviceitemnametitle}> Trạng thái hoạt động </p>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"145px"}}>
                                <p className={classes.deviceitemnametitle}> Trạng thái kết nối </p>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"268px"}}>
                                <p className={classes.deviceitemnametitle}> Dịch vụ sử dụng </p>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"82px"}}>
                                <p className={classes.deviceitemnametitle}>  </p>    
                            </div> 
                         
                                <p className={classes.deviceitemnametitle}>  </p>    
                    
                        </div>

            </div>

            <Link to= "/device/add-device">   
                <div className={classes.add}>
                        <div className={classes.adddevice}>
                                <img src={plus} alt="" />  
                        </div>
                        <p className={classes.devicetitlename}> Thêm thiết bị </p>
                </div>
            </Link>   
        </div>
    )
}

export default Listdevice;