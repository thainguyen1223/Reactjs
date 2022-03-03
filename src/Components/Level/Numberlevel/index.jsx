import classes from './Numberlevel.module.css'
import React from 'react'
import Levelnumber from './Levelnumber'
import Listnumber from '../Listnumber'
function Numberlevel() {
    return(
        <div className={classes.numberlist}>
                <Listnumber/>
            <div className={classes.listlevelright}>
                <Levelnumber/>
            </div>
        </div>
    )
}


export default Numberlevel;
