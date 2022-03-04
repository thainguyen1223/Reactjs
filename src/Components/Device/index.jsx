import classes from "./Device.module.css"
import Listitem from '../Listitem'
import Listdevice from './Listdevice'
function Device(){
    return(
        <div className={classes.listlevel}>
              
            <div className={classes.listlevelright}>
                <Listdevice/>
            </div>
        </div>
    )
}

export default Device;