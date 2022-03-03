import classes from "./Listnumber.module.css"
import alta from "../../image/alta.png"
import logo_level from "../../image/logo_level.png"    
function Listnumber(){
    return(
    <div className={classes.dashboadleft}>
          <img src ={alta} alt='alta ' className={classes.alta} ></img> 
          <div className={classes.list}>  
            <ul>
                <li className={classes.listtitle}>
                    <div className={classes.listitem } >
                        <img src={logo_level} alt='logo_level'/>
                        <a className={classes.listheight} href="">Cấp số</a>  
                    </div>
                </li>
            </ul>
            </div>
        </div>
  
    )
}

export default Listnumber;


