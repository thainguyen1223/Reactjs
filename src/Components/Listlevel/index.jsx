import classes from './Listlevel.module.css'
import React from 'react'
import Listitem from '../Listitem'
import Level from '../Level'

function Listlevel() {
    return(
        <div className={classes.listlevel}>
                <Listitem/>
            <div className={classes.listlevelright}>
                <Level/>
            </div>
        </div>
    )
}


export default Listlevel;
