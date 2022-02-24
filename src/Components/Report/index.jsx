import classes from './Report.module.css'
import Listitem from '../Listitem'
import Listreport from '../Listreport'
function Report(){
    return(
        <div className={classes.listlevel}>
            <Listitem/>
            <div className={classes.listlevelright}>
                <Listreport/>
            </div>
        </div>
    )
}

export default Report;