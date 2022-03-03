import classes from './Updateaccount.module.css'
import Listitem from '../../Listitem';
import Update from '../Update';
function Updateaccount(){
    return(
        <div className={classes.listaccount}>
        <Listitem/>
            <div className={classes.listlevelright}>
                <Update/>
            </div>
        </div>
    )
}

export default Updateaccount;