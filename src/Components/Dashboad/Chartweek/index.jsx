import classes from "./Chartweek.module.css"
import  drowdown from "../image/drowdown.svg"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts';
  import {useState} from "react";


function Chartweek(){
  const [open, setOpen] = useState(false);
  const data= [
    {
      name: '1',
      value:2700,
    
    },
    {
      name: '2',
      value: 3500,
      
    },
    {
      name: '3',
      value: 5800,
      
    },
    {
      name: '4',
      value: 4221,
     
    },
   
    
  ];
      
    
      return (    
        <div className={classes.dashboadlisst}>
            <div className={classes.monthchart}>    
                <div className={classes.monthleft}>
                    <div className={classes.monthtitle}>
                        <span className={classes.charttitle} >Bảng thống kê theo ngày</span>
                    </div>
                    <div className={classes.monthtime}>
                        <span className={classes.charttime}>Tháng 11/2021</span>
                    </div>
                </div>
                <div className={classes.monthright}>
      <span className={classes.chartitem}>Xem theo </span>
      <div className={classes.chartlist}>
        <div className={classes.chartday}
           onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
          <p>Ngày</p>
          </div>
            <img className={classes.drowdown} src={drowdown} alt="drowdown"></img>
            { open &&     <div className={classes.listdrow}>
              <div className={classes.chartmonth}>Tháng</div>
              <div className={classes.chartweek}>Tuần</div>
            </div>    
}
      </div>
      
</div>
      
            </div>
          <div className={classes.chartmonth}>
            <ResponsiveContainer width="100%" aspect={ 8 / 3.5}>
                  <AreaChart
                  width={500}
                  height={600}
                  data={data}
                  margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                  }}
                  >
                  <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#CEDDFF" stopOpacity={1}/>
                          <stop offset="95%" stopColor="#CEDDFF" stopOpacity={0}/>
                      </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#8884d8" fill="url(#colorUv)" />
                  </AreaChart>
          </ResponsiveContainer>
            </div>

        </div>
      )
    

}

export default Chartweek;
  