import classes from './Diaryuser.module.css'
import Bellactive from "../../Bellactive";
import diarygoto from "../../image/gotoright.svg";
import goright from "../../image/goright.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fi_search from"../../image/fi_search.svg"
import {useState, useEffect} from 'react';
import Page from "../../Page";
import {fetchData} from '../../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';
function Diaryuser({dataTable,fetchData }:any){
    useEffect(() => {
        fetchData();
      }, []);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [search , setSearch] = useState('')
    const dataUserDiary = dataTable.dataUserDiary
    return(
        <div className={classes.diary}>
            <div className={classes.diaryinfo}>
                <div className={classes.diaryinfolist}>
                    <p className={classes.diarytitle}>
                        Cài đặt hệ thống
                    </p>
                        <img src={diarygoto} alt="diarygoto" className={classes.diarygoto}></img>
                
                    <p className={classes.diarylist }>
                        Nhật ký hoạt động
                    </p>
                </div>
                <div className={classes.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={classes.diarycontainer}>
                <div className={classes.diarylistdrow}>
                    <div className={classes.diaryitem}>
                        <div className={classes.diaryname}>Chọn thời gian</div>
                            <div className={classes.diarydrowcalendar}>
                                {/* <img src={calendar} alt=''></img> */}
                                <DatePicker 
                            
                                selected={startDate} onChange={(date) => setStartDate(date)} />
                                <img src={goright} alt="goright" className={classes.goright}></img>    
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                    </div>
                    <div className={classes.diaryitem}>
                        <div className={classes.diaryname}>Từ khoá</div>
                            <div className={classes.diarydrow}>
                            <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                            <div className={classes.fi_search}>
                                <img src={fi_search} alt="" />
                            </div>
                            </div>
                    </div>
                </div>
            
            
                <div className={classes.tablelistitem}>
                    <div className={classes.diarytable}>
                        <div className={classes.diaryitemname} style={{width:"266px"}}>
                            <p className={classes.diaryitemnametitle}> Tên đăng nhập </p>    
                        </div>
                        <div className={classes.diaryitemname} style={{width:"240px"}}>
                            <p className={classes.diaryitemnametitle}> Thời gian tác động </p>    
                        </div>
                        <div className={classes.diaryitemname} style={{width:"216px"}}>
                            <p className={classes.diaryitemnametitle}> IP thực hiện </p>    
                        </div>
                        <div className={classes.diaryitemname} style={{width:"400px"}}>
                            <p className={classes.diaryitemnametitle}> Thao tác thực hiện </p>    
                        </div>
                    </div>
                    {
                        dataUserDiary.map ( (item:any,index:any)=>
                    <div className={classes.diarytablelist} key={index}>
                        <div className={classes.diaryitemnameid} style={{width:"266px"}}>
                            <p className={classes.diaryitemnametitleid}> {item.name} </p>    
                        </div>
                        <div className={classes.diaryitemname} style={{width:"240px"}}>
                            <p className={classes.diaryitemnametitleid}>{item.time}</p>    
                        </div>
                        <div className={classes.diaryitemname} style={{width:"216px"}}>
                            <p className={classes.diaryitemnametitleid}> {item.id} </p>    
                        </div>
                        <div className={classes.diaryitemname} style={{width:"400px"}}>
                        <p className={classes.diaryitemnametitleid}> {item.update} </p>    
                        </div>
                    </div>
                    )}

                </div>

                     
           
            
            
            
            
            </div>

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
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Diaryuser)
  
