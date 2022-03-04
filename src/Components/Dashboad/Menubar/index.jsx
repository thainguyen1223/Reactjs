import {useState} from "react";
import classes from "./Menubar.module.css"
import Bellactive from "../../Bellactive";
import pencentblue from "../../image/pencentblue.png"
import pencentgreen from "../../image/pencentgreen.png"
import pencentorange from "../../image/pencentorange.png"
import device_orange from "../../image/device_orange.svg" 
import service_blue from "../../image/service_blue.svg"
import level_green from "../../image/level_green.svg"
import DatePicker from 'sassy-datepicker';
function Menubar(){
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
            <div className={classes.bell}>
                <Bellactive/>
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
                                <div className={classes.rowleft} style={{color:"orange"}} >.</div>
                                <div className={classes.rowmiddle} >Đang hoạt động</div>
                                <div className={classes.rowright} >3.799</div>
                            </div>

                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"black"}}>.</div>
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
                                    <p className={classes.listtitlebottom} style={{color:"blue"}}>Dịch vụ</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.listdeviceright}>
                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"blue"}}>.</div>
                                <div className={classes.rowmiddle} >Đang hoạt động</div>
                                <div className={classes.rowright} >210</div>
                            </div>

                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"black"}}>.</div>
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
                                    <p className={classes.listtitlebottom} style={{color:"green"}}>Cấp số</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.listdeviceright}>
                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"green"}}>.</div>
                                <div className={classes.rowmiddle} >Đã sử dụng  </div>
                                <div className={classes.rowright} >3.721</div>
                            </div>

                            <div className={classes.listdevicertop}>
                                <div className={classes.rowleft} style={{color:"pink"}}>.</div>
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