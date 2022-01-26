import classes from './Service.module.css'
import Listitem from '../Listitem'
import Listitemservice from '../Listitemservice'
function Service(){
    return(
        <div className={classes.listservice}>
            <Listitem/>
        <div className={classes.listlevelright}>
            <Listitemservice/>
            </div>
        </div>
    )
}

export default Service;