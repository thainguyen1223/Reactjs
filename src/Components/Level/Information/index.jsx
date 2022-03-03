import classes from "./Information.module.css"
import Listitem from "../../Listitem"
import Level from "../../Level";
import Detail from "../Information/Detail"
import {Link} from 'react-router-dom';
function Information() {
    return(
        
        <div className={classes.addinformation}>
            <Listitem/>
            <div className={classes.listlevelright}>
            <Detail/>
            </div>
        </div>
    )
}


export default Information;