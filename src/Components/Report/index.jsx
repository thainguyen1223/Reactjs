import classes from './Report.css'
import Listitem from '../Listitem'
import Listreport from '../Listreport'
function Report(){
    return(
        <div className='listlevel'>
            <Listitem/>
            <div className='listlevelright'>
                <Listreport/>
            </div>
        </div>
    )
}

export default Report;