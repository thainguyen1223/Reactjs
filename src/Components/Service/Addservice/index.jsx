import classes from'./Addservice.module.css'
import Listitem from '../../Listitem';
import Listserivce from '../Listserivce';
function Addservice(){
    return(
        <div className={classes.listserivce}>
                <Listitem/>
            <div className={classes.listlevelright}>
                <Listserivce/>
            </div>
        </div>
    )
}


export default Addservice;