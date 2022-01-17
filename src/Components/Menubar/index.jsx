import {useState} from "react";

import classes from "./Menubar.module.css"
import bell from "../image/bell.png"
import bellActive from "../image/bellActive.png"
import avata from "../image/avata.svg"
import pencentblue from "../image/pencentblue.png"
import pencentgreen from "../image/pencentgreen.png"
import pencentorange from "../image/pencentorange.png"
import device_orange from "../image/device_orange.svg" 
import service_blue from "../image/service_blue.svg"
import level_green from "../image/level_green.svg"
import DatePicker from 'sassy-datepicker';
function Menubar(){
    const [isShow, setIsShow] = useState(false);
        const [date, setDate] = useState(new Date());
    const onChange = newDate => {
        console.log(`New date selected - ${newDate.toString()}`);
        setDate(newDate);
      };
      window.process = {
        env: {
          NODE_ENV: 'development',
       },
     };

    return(
        
        <div className={classes.dashboadright}>
                <div className={classes.dashboadtop}>
                    <div className={classes.dashboadbell}>
                    <p 
                         onMouseEnter={()=>setIsShow(true)} 
                        > <img src ={isShow ? bellActive : bell} ali="bell" className={classes.bell}></img> 
                        </p>
                        { isShow &&  <div className={classes.notify} onMouseLeave={()=>setIsShow(false)}>
                             <header className={classes.notifyheader}>
                                <p className={classes.notifytitle}>Thông báo </p>
                            </header>
                                <div className={classes.notifylist}>
                                <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Nguyễn Thị Thùy Dung</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>


                               <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Nguyễn Thiên Chinh</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>

                               <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Võ Thị Kim Liên</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>


                               <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Hoàng Nguyễn Quốc Huy</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>

                               <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Võ Ngọc Lan Anh</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>

                               <div className={classes.notifylink}>
                                   <a href="#"> 
                                       <p className={classes.notifyname}>Người dùng: Nguyễn Thị Trúc Anh</p>
                                       <p className={classes.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                   </a>
                               </div>

                                </div>
                            </div>
}
                    </div>
                    <div className={classes.dashboadavata}>
                        <img src={avata} alt="avata" ></img>
                    </div>
                    <div className={classes.dashboaditemtitle}>
                        <p className={classes.dashboaditemtop}>Xin chào </p>
                        <p className={classes.dashboaditembottom}>Lê Quỳnh Ái Vân </p>
                    </div>
                </div>
           
                <p className={classes.title}>Tổng quan</p>            

                <div className={classes.listcolurm}>
                    <div className={classes.listdevice}>
                        <div className={classes.listdeviceleft}>
                            <img src={pencentorange} alt="pencentorange" className={classes.pencentorange}></img>
                            <div className={classes.listdevicemiddle}>
                                <p className={classes.number}>4.221</p>
                                <div className={classes.listdevicebottom}>
                                    <img src={device_orange} alt="device_orange" className={classes.pencentimg}></img>
                                    <p className={classes.listtitlebottom}>Thiết bị</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.listdeviceright}>
                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"#FFD130"}} >.</div>
                                <div className={classes.rowmiddle} >Đang hoạt động</div>
                                <div className={classes.rowright} >3.799</div>
                            </div>

                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"#7E7D88;"}}>.</div>
                                <div className={classes.rowmiddle} >Ngưng hoạt động</div>
                                <div className={classes.rowright} >422</div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className={classes.listdevice}>
                        <div className={classes.listdeviceleft}>
                            <img src={pencentblue} alt="pencentblue" className={classes.pencentblue}></img>
                            <div className={classes.listdevicemiddle}>
                                <p className={classes.number}>276</p>
                                <div className={classes.listdevicebottom}>
                                    <img src={service_blue} alt="service_blue" className={classes.pencentimg}></img>
                                    <p className={classes.listtitlebottom} style={{color:"#4277FF"}}>Dịch vụ</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.listdeviceright}>
                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"#4277FF;"}}>.</div>
                                <div className={classes.rowmiddle} >Đang hoạt động</div>
                                <div className={classes.rowright} >210</div>
                            </div>

                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"#7E7D88;"}}>.</div>
                                <div className={classes.rowmiddle} >Ngưng hoạt động</div>
                                <div className={classes.rowright} >66</div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className={classes.listdevice}>
                        <div className={classes.listdeviceleft}>
                            <img src={pencentgreen} alt="pencentgreen" className={classes.pencentgreen}></img>
                            <div className={classes.listdevicemiddle}>
                                <p className={classes.number}>4.221</p>
                                <div className={classes.listdevicebottom}>
                                    <img src={level_green} alt="level_green" className={classes.pencentimg}></img>
                                    <p className={classes.listtitlebottom} style={{color:"#35C75A"}}>Cấp số</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.listdeviceright}>
                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"#35C75A;"}}>.</div>
                                <div className={classes.rowmiddle} >Đã sử dụng  </div>
                                <div className={classes.rowright} >3.721</div>
                            </div>

                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"#7E7D88;"}}>.</div>
                                <div className={classes.rowmiddle} >Đang chờ</div>
                                <div className={classes.rowright} >486</div>
                            </div>

                            
                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"#F178B6"}}>.</div>
                                <div className={classes.rowmiddle} >Bỏ qua</div>
                                <div className={classes.rowright} >32</div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className={classes.calendar}>
                <DatePicker className="Datapicker" onChange={onChange} selected={date} />
            </div>
        </div>
    )

}

export default Menubar;