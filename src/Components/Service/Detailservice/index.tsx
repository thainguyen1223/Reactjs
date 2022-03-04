import classes from "./Detailservice.module.css"
import Listitem from '../../Listitem'
import Bellactive from "../../Bellactive";
import Page from "../../Page";
import { useState,useEffect } from "react";
import levelgoto from "../../image/gotoright.svg";
import DatePicker from "react-datepicker";
import Dropdown from 'react-dropdown';
import fi_search from"../../image/fi_search.svg"
import goright from "../../image/goright.svg"
import { connect } from "react-redux";
import '../../style/detailservice.css';
import green from "../../image/green.svg"
import blue from "../../image/blue.svg"
import black from "../../image/black.svg"
import {Link} from 'react-router-dom';
import edit from "../../image/Edit.svg"
import {fetchData} from '../../../redux/DatAlta/DataAltaActions'
import back1 from'../../image/back1.svg'
function Detailservice({dataTable,fetchData}:any){
    useEffect(() => {
        fetchData();
      }, []);
      const [startDate, setStartDate] = useState<Date | null>(new Date());
      const [search , setSearch] = useState('')
      const ServiceWaitPoint = ()=>{
        return (
                <><span className="green">
                  <img src={green} alt="green"></img>
                  </span><span>Đã hoàn thành</span></>
        )
    }  
   
    
        const ServiceUsedPoint = ()=>{
        return (
                <><span className="blue">
                    <img src={blue} alt="blue" ></img>
                    
                </span><span>Đang thực hiện</span></>
        )
        }  
        const ServiceUnactivePoint = ()=>{
            return (  <><span className="black">
              
              <img src={black} alt="black"></img>
              </span><span>Vắng</span></>
            
            ) 
      }
      const data= dataTable.dateServiceDetail
      const [dataServiceTable , setDataServiceTable] = useState(data)
  

      const options = [
        'Tất cả', 'Đã hoàn thành', 'Đang thực hiện','Vắng'
      ];
      
     
   const defaultOption = options[0];

  




        const handleDropdownValue = (e: any)=>{
            
                if(e.value=='Đã hoàn thành'){
                        const filterdata = data  .filter( (item:any)=> item.status == 'Đã hoàn thành')
                        setDataServiceTable(filterdata)
                }else if(e.value=='Đang thực hiện') {
                        const filterdata = data  .filter((item:any) =>item.status == 'Đang thực hiện')
                        setDataServiceTable(filterdata)
                }else if(e.value=='Vắng') {
                    const filterdata = data.filter((item:any) => item.status == 'Vắng')
                    setDataServiceTable(filterdata)
                    }
                
                else{
                    setDataServiceTable(data  )
                }
                 
           }
    return(
        <div className={classes.listservice}>
            <Listitem/>
        <div className={classes.listlevelright}>
            <div className={classes.service}>
                <div className={classes.serviceinfo}>
                    <div className={classes.serviceinfolist}>
                        <p className={classes.servicetitle}>
                            Dịch vụ
                        </p>
                            <img src={levelgoto} alt="levelgoto" className={classes.servicegoto}></img>
                    
                        <p className={classes.servicetitle }>
                            Danh sách dịch vụ
                        </p>
                        <img src={levelgoto} alt="levelgoto" className={classes.servicegoto}></img>
                            <p className={classes.servicelist }>
                            Chi tiết
                            </p>
                    </div>
                    <div className={classes.bell}>
                        <Bellactive/>
                    </div>
                </div>
                <div className={classes.detailtitle}>
                     Quản lý dịch vụ
                </div>
                <div className={classes.detail__container}>
                    <div className={classes.detail__container__items}>
                        <div className={classes.detail__item}>
                            <div className={classes.detail__title}>
                                Thông tin dịch vụ
                            </div>
                            <div className={classes.detail__items}>
                                <div className={classes.title}>Mã dịch vụ: </div>
                                <div className={classes.titlelist}>201</div>
                            </div>
                            <div className={classes.detail__items}>
                                <div className={classes.title}>Tên dịch vụ: </div>
                                <div className={classes.titlelist}>Chuyên các bệnh lý về tim</div>
                            </div>
                            <div className={classes.detail__items}>
                                <div className={classes.title}>Mô tả:</div>
                                <div className={classes.titlelist}>Chuyên các bệnh lý về tim</div>
                            </div>
                        </div>

                        <div className={classes.detail__item}>
                            <div className={classes.detail__title} style={{marginTop:"13px"}}>
                                Quy tắc cấp số
                            </div>
                            <div className={classes.detail__items}>
                                <div className={classes.title}>Tăng tự động:  </div>
                                <div className={classes.items__inputs}>
                                    <input type="text" onChange={ e=>'value'} value='0001' />
                                    <span className={classes.next}>đến</span> 
                                    <input type="text" onChange={ e=>'value'}  value='9999'  />
                                </div>
                            </div>
                            <div className={classes.detail__items}>
                                <div className={classes.title}>Prefix:</div>
                                <div className={classes.items__inputs}> 
                                    <input type="text" className='prefix'  value='0001' onChange={ e=>'value'} />
                                </div>
                            </div>
                            <div className={classes.detail__items1}>
                                Reset mỗi ngày
                            </div>
                            <div className={classes.example}>
                                Ví dụ: 201-2001
                            </div>
                        </div>
                    </div>

                    <div className={classes.detail__container__table}>
                    <div className={classes.servicedropdown}>
                            <div className={classes.levelitem}>
                                    <div className={classes.levelname}>Trạng thái</div>
                                    <div className={classes.leveldrow}>
                                    <Dropdown options={options} 
                                       
                                       onChange={(e)=>handleDropdownValue(e)} 
                                       value={defaultOption} placeholder="Select an option" />
                                        
                                    </div>
                            </div>

                            <div className={classes.levelitem}>
                                    <div className={classes.levelname}>Chọn thời gian</div>
                                    <div className={classes.leveldrowcalendar}>
                                  
                                    <DatePicker 
                                    selected={startDate} onChange={(date) => setStartDate(date)} />
                                        <img src={goright} alt="goright" className={classes.goright}></img>    
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                            </div>

                              <div className={classes.levelitemseach}></div>
                            
                            <div className={classes.levelitem}>
                                <div className={classes.levelname}>Từ khoá</div>
                                    <div className={classes.searchinput}>
                                        <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                                        <div className={classes.fi_search}>
                                        <img src={fi_search} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={classes.tablelistitem}>
                            <div className={classes.leveltable}>
                                <div className={classes.levelitemname} style={{width:"334px"}}>
                                    <p className={classes.levelitemnametitle}> Số thứ tự</p>    
                                </div>
                                <div className={classes.levelitemname} style={{width:"327px"}}>
                                    <p className={classes.levelitemnametitle}> Trạng thái </p>    
                                </div>
                            </div>
                            
                            {
                             dataServiceTable.map ( (item:any,index:any)=> 
                            <div className={classes.leveltablelist} key={index} >
                                 <div className={classes.serviceitemname} style={{width:"341px"}}>
                                        <p className={classes.serviceitemnametitleid}>{item.number} </p>    
                                 </div>
                                <div className={classes.levelitemnameid} style={{width:"333px"}}>
                                    <p className={`${classes.levelitemnametitleid} ${classes.id}`}>  
                                        {item.status == 'Đã hoàn thành' && <ServiceWaitPoint/>}
                                        {item.status == 'Vắng' && <ServiceUnactivePoint/>}
                                        {item.status == 'Đang thực hiện' && <ServiceUsedPoint/>}
                                    </p>       
                                </div>
                            </div>
                                          )}

                        </div>
                        <div className={classes.chosepape}>

                            <Page/>
                        </div> 
                        
                    </div>
                    <div className={classes.detail__container__update}>
                        <Link to="/listservice">
                             <div className={classes.eidt}>
                                    <div className="ServiceAddIMG">
                                            <img src={edit} alt="" />  
                                    </div>
                                    <div className={classes.add}>Cập nhập danh sách</div>
                                </div></Link> 

                              <Link to="/service">
                                    <div className={classes.back1}>
                                        <div className="ServiceAddIMG">
                                                <img src={back1} alt="" />  
                                        </div>
                                        <div className={classes.add}>Quay lại</div>
                                </div></Link> 

                    </div>
                    
                </div>
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
      
    }
  }
  
  
  
  
export default connect(mapStateToProps,mapDispatchToProps)(Detailservice);
