
import Bellactive from "../../Bellactive";
import './Listreport.css'
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import Dropdown from 'react-dropdown';
import Page from "../../Page";
// import '../style./report.';
import goright from "../../image/goright.svg"
import reportgoto from "../../image/gotoright.svg";
import {useState, useEffect} from 'react';
import {fetchData} from '../../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';
import blue from '../../image/blue.svg'
import red from '../../image/red.svg'
import black from '../../image/black.svg'
import dow from '../../image/dow.svg'
function Listreport({dataTable,fetchData }:any){
    useEffect(() => {
        
        fetchData()
        
    
    
    },[])
    const [startDate, setStartDate] = useState<Date | null>(new Date());
   

    
    const data = dataTable.dataReport

    const [ dataReport , setDataReport] = useState(data)




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







    const options = [
        'Tất cả', '2040001', '2060001','2050002'
      ];

     
   const defaultOption = options[0];


   const optionsServiceName = [
        
      'Tất cả' , 'Khám tim mạch','Khám mắt','Khám tổng quát'

            
           
   ]
   const optionsTime = ['Tất cả' , '07:10  01/10/2021','07:15  01/10/2021','07:28  01/10/2021']
  
   const optionsState = ['Tất cả' , 'Đang chờ','Đã sử dụng','Bỏ qua']

   const optionsProduct = ['Tất cả' , 'Kiosk','Hệ thống']

   const handleDropdownValue = (e:any)=>{
            
    if(e.value == 'Khám tim mạch'){
        const filterdata = data.filter( (item:any )=> item.service == 'Khám tim mạch')
        setDataReport(filterdata)
    }else if(e.value == 'Khám mắt'){
        const filterdata = data.filter(  (item:any ) => item.service == 'Khám mắt')
        setDataReport(filterdata)
    }else if(e.value == 'Khám tổng quát'){
        const filterdata = data.filter(  (item:any ) => item.service == 'Khám tổng quát')
        setDataReport(filterdata)
    }else if(e.value == 'Đang chờ'){
        const filterdata = data.filter(  (item:any ) => item.stateFilter== 'Đang chờ')
        setDataReport(filterdata)
    }
    else if(e.value == 'Đã sử dụng'){
        const filterdata = data.filter(  (item:any ) => item.stateFilter== 'Đã sử dụng')
        setDataReport(filterdata)
    }
    else if(e.value == 'Bỏ qua'){
        const filterdata = data.filter( (item:any )=> item.stateFilter== 'Bỏ qua')
        setDataReport(filterdata)
    }
    else if(e.value == 'Kiosk'){
        const filterdata = data.filter(  (item:any )=> item.source== 'Kiosk')
        setDataReport(filterdata)
    }else if(e.value == 'Hệ thống'){
        const filterdata = data.filter(  (item:any )=> item.source== 'Hệ thống')
        setDataReport(filterdata)
    }


    else{
        setDataReport(data)
    }
    
     
}


    return(
        <div className='report'>
            <div className='reportinfo'>
                <div className='reportinfolist'>
                    <p className='reporttitle'>
                        Báo cáo
                    </p>
                    
                    <img src={reportgoto} alt="reportgoto" className='reportgoto'></img>
               
                    <p className='reportlist '>
                        Lập báo cáo
                    </p>
                    
                </div>
                <div className='bell'>
                    <Bellactive/>
                </div>
            </div>
            <div className='reportcontainer'>
                <div className='reportlisttitle'>
                    Chọn thời gian
                </div>  
                <div className='reportdrowcalendar'>
                    <DatePicker 
                    selected={startDate} onChange={(date) => setStartDate(date)} />
                    <img src={goright} alt="goright" className='goright'></img>    
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="new">
                <div className='reportcontainer'>
                    <div className='listreport'>
                        <div className='reportlistdrow'>
                            <div className="reportitem ">

                            <Dropdown options={options}             
                                onChange={(e)=>handleDropdownValue(e)} 
                                value={defaultOption} placeholder="Select an option" />

                                <span>Số thứ tự</span>
                            </div>

                                <div className=' reportitem  reportitem--report'>
                                <Dropdown options={optionsServiceName}        
                                    onChange={(e)=>handleDropdownValue(e)} 
                                    value={defaultOption} placeholder="Select an option" />
                                    
                                    <span>Tên dịch vụ</span>
                                </div>
                    

                        
                                <div className=' reportitem '>
                                <Dropdown options={optionsTime}        
                                    onChange={(e)=>handleDropdownValue(e)} 
                                    value={defaultOption} placeholder="Select an option" />
                                    
                                    <span>Thời gian cấp</span>
                                </div>
                        

                        
                                <div className=' reportitem '>
                                <Dropdown options={optionsState}        
                                    onChange={(e)=>handleDropdownValue(e)} 
                                    value={defaultOption} placeholder="Select an option" />
                                    
                                    <span>Tình trạng</span>
                                </div>
                        

                    
                                <div className=' reportitem  '>
                                <Dropdown options={optionsProduct}        
                                    onChange={(e)=>handleDropdownValue(e)} 
                                    value={defaultOption} placeholder="Select an option" />
                                    
                                    <span>Nguồn cấp</span>
                                </div>
                    
                        

                      
                        </div>
                        {
                        dataReport.map ( (item:any,index:any)=>
                        <div className='reporttablelist' key={index}>
                            <div className='reportitemnameid' style={{width:"217px"}}>
                                <p className="reportitemnametitleid">
                                         {item.id}  
                                </p>
                            </div>
                            <div className='reportitemnameid' style={{width:"218px"}}>
                                <p className="reportitemnametitleid">
                                         {item.name}    
                                </p>
                            </div>
                            <div className='reportitemnameid' style={{width:"216px"}}>
                                <p className="reportitemnametitleid">
                                         {item.time}    
                                </p>
                            </div>
                            <div className='reportitemnameid' style={{width:"218px"}}>
                                <p className="reportitemnametitle">
                                {item.status == 'Đang chờ' && <ServiceWaitPoint/>}
                                {item.status == 'Đã sử dụng' && <ServiceUsedPoint/>}
                                {item.status == 'Bỏ qua' && <ServiceUnactivePoint/>}
                                </p>
                            </div>
                            <div className='reportitemnameid' style={{width:"216px"}}>
                                <p className="reportitemnametitleid">
                                         {item.sourse}    
                                </p>
                            </div>
                        </div>
                        )}
               
                    </div>

              
                </div>
                <Link to=""> <div className="ServiceAdd">
                 <div className="ServiceAddIMG">
                         <img src={dow} alt="" />  
                </div>
                <div className="reporttitlename">Tải về</div>
                </div>
                </Link>
                </div>
                <div className='chosepape'>

                    <Page/>
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
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Listreport)
  
