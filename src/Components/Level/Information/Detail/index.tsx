import classes from './Detail.module.css'
import Bellactive from "../../../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../../../image/gotoright.svg";
import blue from '../../../image/blue.svg'
import black from "../../../image/black.svg"
import red from '../../../image/red.svg'
import back from "../../../image/back.svg"
import {fetchData} from '../../../../redux/DatAlta/DataAltaActions'
import {connect} from 'react-redux';
import {useEffect} from 'react';
function Detail({dataTable,fetchData}:any){
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
      const dataNumberLevel = dataTable.dataSend
    return(
        <div className={classes.detail}>
            <div className={classes.info}>
                <div className={classes.infolist}>
                    <p className={classes.title}>
                        Thiết bị 
                    </p>
                    
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
            
                    <p className={classes.title}>
                        Danh sách cấp số
                    </p>
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
                    <p className={classes.detaillist }>
                        Chi tiết 
                    </p>
                </div>
                <div className={classes.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.listtitle}>
                    Quản lý cấp số
                </div>
                <div className={classes.newitem}>
                    <div className={classes.informationlevel}>
                        Thông tin cấp số
                    </div>
                   
                    <div className={classes.listitem}>
                        <div className={classes.id}>Họ tên:</div>
                        <div className={classes.name}>{dataNumberLevel.name}</div>
                        <div className={classes.adress}>Nguồn cấp:</div>
                        <div className={classes.source}>{dataNumberLevel.sourse}</div>

                        <div className={classes.id}>Tên dịch vụ:</div>
                        <div className={classes.name}>{dataNumberLevel.service}</div>
                        <div className={classes.adress}>Trạng thái:</div>
                        <div className={classes.source}>
                            {dataNumberLevel.status == 'Đang chờ' && <ServiceWaitPoint/>}
                              {dataNumberLevel.status == 'Đã sử dụng' && <ServiceUsedPoint/>}
                              {dataNumberLevel.status == 'Bỏ qua' && <ServiceUnactivePoint/>}</div>

                        <div className={classes.id}>Số thứ tự:</div>
                        <div className={classes.name}>{dataNumberLevel.STT}</div>
                        <div className={classes.adress}>Số điện thoại:</div>
                        <div className={classes.source}>0948523623</div>

                        <div className={classes.id}>Thời gian cấp:</div>
                        <div className={classes.name}>{dataNumberLevel.time1}</div>
                        <div className={classes.adress}>Địa chỉ Email:</div>
                        <div className={classes.source}>nguyendung@gmail.com</div>

                        <div className={classes.id}>Hạn sử dụng:</div>
                        <div className={classes.name}>{dataNumberLevel.time2}</div>
                    </div>

                   
                </div> 
               <Link to ="/level/">
                 <div className={classes.add}>
                        <div className={classes.addback}>
                                <img src={back} alt="" />  
                        </div>
                        <span className={classes.backtitle}>quay lại</span>
                </div>
                </Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Detail)