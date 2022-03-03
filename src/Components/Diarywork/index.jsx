import classes from './Diarywork.module.css'
import Listitem from '../Listitem';
import Diaryuser from './Diaryuser';

function Diarywork(){
    return(
        <div className={classes.listaccount}>
            <Listitem/>
        <div className={classes.listlevelright}>
            <Diaryuser/>
            </div>
        </div>
    )   
}

export default Diarywork;