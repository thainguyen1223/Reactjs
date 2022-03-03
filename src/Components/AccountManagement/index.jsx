import classes from './AccountManagement.module.css'
import Listitem from '../Listitem';
import Listaccount from './Listaccount';
function AccountManagement(){
    return(
        <div className={classes.listaccount}>
            <Listitem/>
        <div className={classes.listlevelright}>
           <Listaccount/>
            </div>
        </div>
    )   
}

export default AccountManagement;