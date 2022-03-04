import classes from "./Level.module.css"
import Bellactive from "../Bellactive";
import {Link} from 'react-router-dom';
import ReactPaginate from "react-paginate";
import Levelgoto from "../image/gotoright.svg";
import {useState, useEffect} from 'react';
import Dropdown from 'react-dropdown';
import '../style/style.css';
import DatePicker from "react-datepicker";
import plus from "../image/plus.svg";
import "react-datepicker/dist/react-datepicker.css";
import goright from "../image/goright.svg"
import fi_search from"../image/fi_search.svg"
import Page from "../Page";
import blue from '../image/blue.svg'
import red from '../image/red.svg'
import black from '../image/black.svg'

import {fetchData,SENDDATA} from '../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';



function Level({dataTable,fetchData,SENDDATA }:any){

  useEffect(() => {
    fetchData();
  }, []);
  const ServiceWaitPoint = ()=>{
    return (
            <><span className="blue">
              <img src={blue}></img>
              </span><span>Đang chờ</span></>
    )
}  


const ServiceUsedPoint = ()=>{
return (
        <><span className="black">
            <img src={black} ></img>
            
          </span><span>Đã sử dụng</span></>
)
}  


const ServiceUnactivePoint = ()=>{
      return (  <><span className="red">
        
        <img src={red}></img>
        </span><span>Bỏ qua</span></>
      
      ) 
}

const dataNumberLevel = dataTable.dataNumberLevel
const [data,setData] = useState(dataNumberLevel)
    
const optionService = [
    'Tất cả', 'Khám sản - Phụ khoa', 'Khám răng hàm mặt','Khám tai mũi họng'
  ];

  const handleDropdownValue = (e:any)=>{


    if(e.value == "Đang chờ"){
        const filterdata =  dataNumberLevel.filter( (item:any) =>  item.status === "Đang chờ")
         setData(filterdata)
        
    }else if(e.value == "Đã sử dụng"){

        const filterdata =  dataNumberLevel.filter((item:any)  =>  item.status === "Đã sử dụng")
        setData(filterdata)
    }
    else if(e.value == "Bỏ qua"){

        const filterdata =  dataNumberLevel.filter((item:any)  =>  item.status === "Bỏ qua")
        setData(filterdata)
    }else if(e.value == "Khám răng hàm mặt"){

        const filterdata =  dataNumberLevel.filter((item:any)  =>  item.service === "Khám răng hàm mặt")
        setData(filterdata)
    }
    else if(e.value == "Khám tai mũi họng"){

        const filterdata =  dataNumberLevel.filter((item:any)  =>  item.service === "Khám tai mũi họng")
        setData(filterdata)
    }
    else if(e.value == "Khám sản - Phụ khoa"){

        const filterdata =  dataNumberLevel.filter((item:any)  =>  item.service === "Khám sản - Phụ khoa")
        setData(filterdata)
    }
    else if(e.value == "Kiosk"){

        const filterdata =  dataNumberLevel.filter((item:any)  =>  item.sourse === "Kiosk")
        setData(filterdata)
    }
    else if(e.value == "Hệ thống"){

        const filterdata =  dataNumberLevel.filter((item:any) =>  item.sourse === "Hệ thống")
        setData(filterdata)
    }
    
    else{
        setData(dataNumberLevel)
    }


    
    
    
    
     
}
const defaultOptionService = optionService[0];




const optionState = [
'Tất cả', 'Đang chờ', 'Đã sử dụng','Bỏ qua'
];

const optionSource = [
'Tất cả', 'Kiosk', 'Hệ thống'
];


    
let handleSend = (item:any)=>{
                

  SENDDATA(item)
  
  
  
}
  

    
    const [showMore , setShowMore] = useState(false)

    const [search , setSeatch] = useState('')

    const [startDate, setStartDate] = useState<Date | null>(new Date());




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
                                    <Dropdown options={optionService} 
                                       
                                       onChange={(e)=>handleDropdownValue(e)} 
                                       value={defaultOptionService} placeholder="Select an option" />
                                        
                                    </div>
                            </div>
                            <div className={classes.levelitem}>
                                    <div className={classes.levelname}>Tình trạng</div>
                                    <div className={classes.leveldrow}>
                                    <Dropdown options={optionState}   
                                                onChange={(e)=>handleDropdownValue(e)} 
                                                value={defaultOptionService} placeholder="Select an option" />
                                               
                                    </div>
                            </div>
                            <div className={classes.levelitem}>
                                    <div className={classes.levelname}>Nguồn cấp</div>
                                    <div className={classes.leveldrow}>
                                    <Dropdown options={optionSource} 
                                            onChange={(e)=>handleDropdownValue(e)} 
                                            value={defaultOptionService} placeholder="Select an option" />
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
                                    <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSeatch(e.target.value)}/>
                                    <div className={classes.fi_search}>
                                    <img src={fi_search} alt="" />
                                </div>
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

                        {
                            data.map ( (item:any,index:any)=>
                        <div className={classes.leveltablelist}key={index} >
                        <div className={classes.levelitemname} style={{width:"93px"}}>
                            <p className={classes.levelitemnametitleid}>{item.STT}</p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"162px"}}>
                            <p className={classes.levelitemnametitleid}>{item.name}</p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"171px"}}>
                            <p className={classes.levelitemnametitleid}>{item.service}</p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"161px"}}>
                            <p className={classes.levelitemnametitleid}> {item.time1} </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"174px"}}>
                            <p className={classes.levelitemnametitleid}> {item.time2} </p>    
                        </div>
                        <div className={classes.levelitemname} style={{width:"147px"}}>
                        <p className={`${classes.levelitemnametitleid} ${classes.id}`}>  
                              {item.status == 'Đang chờ' && <ServiceWaitPoint/>}
                              {item.status == 'Đã sử dụng' && <ServiceUsedPoint/>}
                              {item.status == 'Bỏ qua' && <ServiceUnactivePoint/>}
                          </p>
                        </div>
                        <div className={classes.levelitemname} style={{width:"120px"}}>
                            <p className={classes.levelitemnametitleid}>{item.sourse}</p>    
                        </div>
                     
                        <div  className={classes.levelitemlistnew}   onClick={()=> handleSend(item)} 
                        
                        > <Link to="/level/service">
                                    Chi tiết
                        </Link>   </div>
             
 
                        </div>
                  )}




                       
            
                    
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

const mapStateToProps = (state:any) =>{
  return {

    dataTable:state.dataAlta

   
      
      
      
  }
}

const mapDispatchToProps = (dispatch:any) =>{
  return {

          fetchData: ()=>  dispatch(fetchData()),
          SENDDATA: (data:any)=> dispatch(SENDDATA(data))
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Level)
