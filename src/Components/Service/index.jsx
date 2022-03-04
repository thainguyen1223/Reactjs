import classes from './Service.module.css'

import Listitemservice from './Listitemservice'
function Service(){
    return(
        <div className={classes.listservice}>

        <div className={classes.listlevelright}>
            <Listitemservice/>
            </div>
        </div>
    )
}

export default Service;