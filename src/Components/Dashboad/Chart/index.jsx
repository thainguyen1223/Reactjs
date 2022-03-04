import classes from './Chart.module.css'
import  dashboadgreen from "../../image/dashboadgreen.png"
import  dashboadblue from "../../image/dashboadblue.png"
import  dashboadred  from "../../image/dashboadred.png"
import  dashboadorange from "../../image/dashboadorange.png"
import  goup from "../../image/goup.svg"
import  godown from "../../image/godown.svg"


function Chart(){
    return(
        <div className={classes.dashboadlist}>
            <div className={classes.dashboadmiddle}>
                <div className={classes.dashboadtitle}>
                    Dashboard
                </div>
                <div className={classes.levelchart}>
                    Biểu đồ cấp số
                </div>     
            <div className={classes.chart}>
                <div className={classes.dashboaditem}>
                    <div className={classes.itemtop}>
                        <img src={dashboadblue} alt="dashboadblue" className={dashboadblue}></img>
                        <p className={classes.itemtitle} >Số thứ tự đã cấp</p>
                    </div>
                    <div className={classes.itembottom}>
                        <h2 className={classes.itemnumber}>4.221</h2>
                        <div className={classes.itemnprecentup}>
                            <div className={classes.goup}>
                            <img src={goup} alt="goup" ></img>
                            </div>
                            <div className={classes.precent}>32.41%</div>
                        </div>
                    </div>
                </div>

                <div className={classes.dashboaditem}>
                    <div className={classes.itemtop}>
                        <img src={dashboadgreen} alt="dashboadgreen" className={dashboadgreen}></img>
                        <p className={classes.itemtitle}>Số thứ tự đã sử dụng</p>
                    </div>
                    <div className={classes.itembottom}>
                        <h2 className={classes.itemnumber}>3.721</h2>
                        <div className={classes.itemnprecentdown}>
                            <div className={classes.goup}>
                            <img src={godown} alt="godown" ></img>
                            </div>
                            <div className={classes.precent}>32.41%</div>
                        </div>
                    </div>
                </div>


                <div className={classes.dashboaditem}>
                    <div className={classes.itemtop}>
                        <img src={dashboadorange} alt="dashboadorange" className={dashboadorange}></img>
                        <p className={classes.itemtitle} >Số thứ tự đang chờ</p>
                    </div>
                    <div className={classes.itembottom}>
                        <h2 className={classes.itemnumber}>468</h2>
                        <div className={classes.itemnprecentup}>
                            <div className={classes.goup}>
                            <img src={goup} alt="goup" ></img>
                            </div>
                            <div className={classes.precent}>56,41%</div>
                        </div>
                    </div>
                </div>


                <div className={classes.dashboaditem}>
                    <div className={classes.itemtop}>
                        <img src={dashboadred} alt="dashboadred" className={dashboadred}></img>
                        <p className={classes.itemtitle} >Số thứ tự đã bỏ qua</p>
                    </div>
                    <div className={classes.itembottom}>
                        <h2 className={classes.itemnumber}>32</h2>
                        <div className={classes.itemnprecentdown}>
                            <div className={classes.goup}>
                            <img src={godown} alt="godown" ></img>
                            </div>
                            <div className={classes.precent}>22,41%</div>
                        </div>
                    </div>
                </div>

            </div>     
                
        </div>
                   
        </div>
    )
}

export default Chart;