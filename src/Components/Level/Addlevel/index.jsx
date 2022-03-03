
import classes from '../Addlevel/Addlevel.module.css'

import Listitem from '../../Listitem'
import NewLevel from './Newlevel'
function Addlevel()
{
    return(
        
        <div className={classes.addlevel}>
            <Listitem/>
            <div className={classes.listlevelright}>
                <NewLevel/>
            </div>
        </div>
    )
}

export default Addlevel;