import classes from "./Listdevice.module.css"
import Levelgoto from "../../image/gotoright.svg";
import Bellactive from "../../Bellactive";
import fi_search from"../../image/fi_search.svg"
import Dropdown from 'react-dropdown';
import '../../style/detailservice.css';
import '../../style/style.css';
import {useState, useEffect} from 'react';
import plus from "../../image/plus.svg";
import {Link} from 'react-router-dom';
import {fetchData} from '../../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';
import green from '../../image/green.svg'
import red from '../../image/red.svg'
import Page from "../../Page";
function Listdevice({dataTable,fetchData}:any){
    useEffect(() => {
        fetchData();
      }, []);
  
 

    const ServiceWaitPoint = ()=>{
        return (
                <><span className="red">
                  <img src={red}></img>
                  </span><span>Ngưng hoạt động</span>
                  
                  </>
                  
        )
    }  
    
    
    const ServiceUsedPoint1 = ()=>{
    return (
            <><span className="green">
                <img src={green} ></img>
                
              </span><span>Kết nối</span></>
    )
    }  
    
    const ServiceWaitPoint1 = ()=>{
        return (
                <><span className="red">
                  <img src={red}></img>
                  </span><span>Mất kết nối</span>
                  
                  </>
                  
        )
    }  
    
    
    const ServiceUsedPoint = ()=>{
    return (
            <><span className="green">
                <img src={green} ></img>
                
              </span><span>Hoạt động</span></>
    )
    }  
    
    

   

    const data = dataTable.dataEquiment
        
        
       
        


    const [dataEquiment,setDataEquiment] = useState(data)

const options = [
    'Tất cả', 'Hoạt động', 'Ngưng hoạt động'
  ];

  
const defaultOption = options[0];

const optionsConnect = [
'Tất cả', 'Kết nối', 'Mất kết nối'
];


    


    const handleDropdownValue = (e:any)=>{
        
            
            if(e.value=='Hoạt động'){
                    const filterdata = data.filter( (item:any) => item.status == 'Hoạt động')
                    setDataEquiment(filterdata)
            }else if(e.value=='Ngưng hoạt động') {
                    const filterdata = data.filter((item:any)=> item.status == 'Ngưng hoạt động')
                    setDataEquiment(filterdata)
            }
            else if(e.value=='Ngưng hoạt động') {
                    const filterdata = data.filter((item:any)=> item.status == 'Ngưng hoạt động')
                    setDataEquiment(filterdata)
            }
            else if(e.value=='Kết nối') {
                    const filterdata = data.filter((item:any)=> item.connet == 'Kết nối')
                    setDataEquiment(filterdata)
            }
         
            else{
                    setDataEquiment(data)
            }
             
       }
    
    
    const [showMore , setShowMore] = useState(false)

    const [search , setSeatch] = useState('')





    return(
        <div className={classes.device}>
              <div className={classes.info}>
                <div className={classes.infolist}>
                    <div className={classes.title}>
                        Thiết bị 
                    </div>
                    
                    <img src={Levelgoto} alt="levelgoto" className={classes.devicegoto}></img>
            
                    <div className={classes.detaillist}>
                        Danh sách thiết bị 
                    </div>

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
                                    <Dropdown options={ options} 
                                       
                                       onChange={(e)=>handleDropdownValue(e)} 
                                       value={defaultOption} placeholder="Select an option" />
                                        
                                </div>
                        </div>

                        <div className={classes.deviceitem}>
                            <div className={classes.devicename}>Trạng thái hoạt động</div>
                                <div className={classes.devicedrow}>
                                    <Dropdown options={optionsConnect} 
                                       
                                       onChange={(e)=>handleDropdownValue(e)} 
                                       value={defaultOption} placeholder="Select an option" />
                                        
                                </div>
                        </div>

                    </div>
                    <div className={classes.deviceitemseach}>
                            <div className={classes.devicename}>Từ khoá</div>
                            <div className={classes.searchinput}>
                                    <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSeatch(e.target.value)}/>
                                    <div className={classes.fi_search}>
                                    <img src={fi_search} alt="" />
                                    </div>
                            </div>
                        </div>
                </div>
            </div>

            <div className={classes.tablelistitem}>
                    <div className={classes.devicetable}>
                            <div className={classes.deviceitemname} style={{width:"103px"}}>
                                <div className={classes.deviceitemnametitle}> Mã thiết bị </div>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"99px"}}>
                                <div className={classes.deviceitemnametitle}> Tên thiết bị </div>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"138px"}}>
                                <div className={classes.deviceitemnametitle}> Địa chỉ IP </div>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"171px"}}>
                                <div className={classes.deviceitemnametitle}> Trạng thái hoạt động </div>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"145px"}}>
                                <div className={classes.deviceitemnametitle}> Trạng thái kết nối </div>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"268px"}}>
                                <div className={classes.deviceitemnametitle}> Dịch vụ sử dụng </div>    
                            </div>
                            <div className={classes.deviceitemname} style={{width:"82px"}}>
                                <div className={classes.deviceitemnametitle}>  </div>    
                            </div> 
                         
                                <div className={classes.deviceitemnametitle}>  </div>    
                    
                        </div>

                        {
                         dataEquiment.map ( (item:any,index:any)=>   
                         
                    <div className={classes.servicetablelist}key={index}>
                        <div className={classes.deviceitemname} style={{width:"103px"}}>
                            <div className={classes.deviceitemnametitleid}>{item.code} </div>    
                        </div>
                        <div className={classes.deviceitemname} style={{width:"99px"}}>
                            <div className={classes.deviceitemnametitleid}>{item.name}  </div>    
                        </div>
                        <div className={classes.deviceitemname} style={{width:"138px"}}>
                                
                             <div className={classes.deviceitemnametitleid}>{item.adress}  </div>  
                          
                        </div>
                        <div className={classes.deviceitemname} style={{width:"171px"}}>
                            <div className={`${classes.deviceitemnametitleid} ${classes.id}`}>
                                
                                {item.status=="Ngưng hoạt động"&&<ServiceWaitPoint/>}
                                {item.status=="Hoạt động"&&<ServiceUsedPoint/>}
                          </div>    
                        </div>
                        <div className={classes.deviceitemname} style={{width:"145px"}}>
                            <div className={`${classes.deviceitemnametitleid} ${classes.id}`}>
                                
                                {item.connet == 'Mất kết nối' && <ServiceWaitPoint1/>}
                              {item.connet == 'Kết nối' && <ServiceUsedPoint1/>}
                          
                          </div>    
                        </div>
                        <div className={classes.deviceitemname} style={{width:"268px"}}>
                                <div className={classes.deviceitemnametitleid}> 
                                        {item.node}
                                        {
                                            showMore && <div className={classes.but}> Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt,
                                            Khám tai mũi họng, Khám hô hấp, Khám tổng quát</div>
                                        }
                                            
                                        {
                                            !showMore && <><br /><div className={classes.button} onClick={() => setShowMore(!showMore)}> Xem thêm</div></>
                                        } 
                                            
                                            
                                                
                                                </div>  

                        </div>
                        <Link to ="/device/detaildevice">
                        <div className={classes.deviceitemname} style={{width:"82px"}}>
                            <div className={classes.deviceitemlistnew}> Chi tiết  </div>    
                        </div>
                        </Link>
                        <Link to ="/device/updatedevice">
                        <div className={classes.deviceitemname}style={{width:"91px"}} >
                            <div className={classes.deviceitemlistnew}>Cập nhật </div>    
                        </div>
                        </Link>
                    </div>

                    
                         )
                    }

            </div>

            <Link to= "/device/add-device">   
                <div className={classes.add}>
                        <div className={classes.adddevice}>
                                <img src={plus} alt="" />  
                        </div>
                        <div className={classes.devicetitlename}> Thêm thiết bị </div>
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
  
  
  
  
export default connect(mapStateToProps,mapDispatchToProps)(Listdevice)
  
