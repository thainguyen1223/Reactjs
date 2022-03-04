import classes from './Listitemservice.module.css'
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import levelgoto     from "../../image/gotoright.svg";
import Dropdown from 'react-dropdown';
import '../../style/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fi_search from"../../image/fi_search.svg"
import {useState ,useEffect} from 'react';
import goright from "../../image/goright.svg";
import red from '../../image/red.svg'
import green from '../../image/green.svg'
import Page from "../../Page";
import {fetchData} from '../../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';
import plus from "../../image/plus.svg";
function Listitemservice({dataTable,fetchData, }:any){
    useEffect(() => {
        fetchData();
      }, []);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [search , setSearch] = useState('')
    const ServiceWaitPoint = ()=>{
        return (
                <><span className="green">
                  <img src={green} alt="green"></img>
                  </span><span>Hoạt động</span></>
        )
    }  
    
    
    const ServiceUsedPoint = ()=>{
    return (
            <><span className="black">
                <img src={red} alt="green" ></img>
                
              </span><span>Ngưng hoạt động</span></>
    )
    }  
    const data = dataTable.dataService
        

        const [dataServiceTable  , setDataServiceTable] = useState(data)




    const options = [
        'Tất cả', 'Hoạt động', 'Ngưng hoạt động'
      ];

     
   const defaultOption = options[0];

  




        const handleDropdownValue = (e: any)=>{
            
                if(e.value=='Hoạt động'){
                        const filterdata = data.filter( (item:any)=> item.status == 'Hoạt động')
                        setDataServiceTable(filterdata)
                }else if(e.value=='Ngưng hoạt động') {
                        const filterdata = data.filter((item:any) => item.status == 'Ngưng hoạt động')
                        setDataServiceTable(filterdata)
                }
                
                else{
                        setDataServiceTable(data)
                }
                 
           }
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
                                    <Dropdown options={options}  
                                            onChange={(e)=>handleDropdownValue(e)} 
                                            value={defaultOption} placeholder="Select an option" />
                                </div>
                        </div>
                        <div className={classes.serviceitem}>
                            <div className={classes.servicenamee}>Chọn thời gian</div>
                                <div className={classes.servicedrowcalendar}>
                                    
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
                                <div className={classes.fi_search}>
                                    <img src={fi_search} alt="" />
                                </div>
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

          
                    {
                        dataServiceTable.map ( (item:any,index:any)=>   
                         
                    <div className={classes.servicetablelist} key={index}>
                        <div className={classes.serviceitemname} style={{width:"150px"}}>
                            <p className={classes.serviceitemnametitleid}>{item.code} </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"224px"}}>
                            <p className={classes.serviceitemnametitleid}>{item.name}  </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"230px"}}>
                            <p className={classes.serviceitemnametitleid}> {item.des}  </p>    
                        </div>
                        <div className={classes.serviceitemname} style={{width:"253px"}}>
                      
                        <p className={`${classes.levelitemnametitleid} ${classes.id}`}>  
                              {item.status == 'Hoạt động' && <ServiceWaitPoint/>}
                              {item.status == 'Ngưng hoạt động' && <ServiceUsedPoint/>}
                             
                          </p>    
                        </div>
                        <Link to ="./detailservice">
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <div className={classes.serviceitemlistnew}> Chi tiết  </div>    
                        </div>
                        </Link >
                        <Link to ="/listservice">
                        <div className={classes.serviceitemname} style={{width:"125px"}}>
                            <div className={classes.serviceitemlistnew}> Cập nhật </div>    
                        </div>
                        </Link>
                    </div>

                    
                         )
                    }
           
                        
              
             
            
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
  
  
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Listitemservice);
