import classes from './Moreaccount.module.css'
import Listitem from '../Listitem';
import Accountinformation from '../AccountManagement/Accountinformation'
function Moreaccount(){
    return(
        <div className={classes.listaccount}>
            <Listitem/>
        <div className={classes.listlevelright}>
            <Accountinformation/>
            </div>
        </div>
    )   
}

export default Moreaccount;