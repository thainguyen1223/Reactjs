import {useState} from "react";
import classes from "./Abc.module.css"
function Abc(){

  const [info, setInfo] = useState(false);
return(

 <div className={classes.monthright}>
      <span className={classes.chartitem}>Xem theo </span>
      <div className={classes.chartlist}>

        <div className={classes.chartday}
           onMouseEnter={()=>setInfo(true)} onMouseLeave={()=>setInfo(false)}>
          <p>Ngày</p>
          </div>
            {/* <img className={classes.drowdown} src={drowdown} alt="drowdown"></img> */}
            { info &&     <div className={classes.listdrow}>
              <div className={classes.chartmonth}>Tháng</div>
              <div className={classes.chartweek}>Tuần</div>
            </div>    
}
      </div>
      
</div>

)}

export default Abc;