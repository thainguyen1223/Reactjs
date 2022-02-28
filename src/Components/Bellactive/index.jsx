import classes from "./Bellactive.module.css"
import bell from "../image/bell.png"
import bellActive from "../image/bellActive.png"
import {useState} from "react"
import avata from "../image/avata.svg"
function Bellactive(){
    const [isShow, setIsShow] = useState(false);
    return(
    <div className={classes.bellactive}>
        <p 
                    onMouseEnter={()=>setIsShow(true)} 
                    > <img src ={isShow ? bellActive : bell} ali="bell" className={classes.bell}></img> 
        </p>

           { isShow &&    <div className={classes.notify}
            
            onMouseLeave={()=>setIsShow(false)}>
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

                        <div className={classes.notifylink}>
                            <a href="#"> 
                                <p className={classes.notifyname}>Người dùng: Nguyễn Thị Trúc Anh</p>
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
        <div className={classes.dashboadavata}>
            <img src={avata} alt="avata" ></img>
        </div>
         <div className={classes.dashboaditemtitle}>
            <p className={classes.dashboaditemtop}>Xin chào </p>
            <p className={classes.dashboaditembottom}>Lê Quỳnh Ái Vân </p>
        </div>               
    </div>
    )
}

export default Bellactive;