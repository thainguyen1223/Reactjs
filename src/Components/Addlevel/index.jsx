import {useState} from 'react'
import classes from './Addlevel.module.css'
import {Link} from 'react-router-dom'
import Listitem from '../Listitem'
import NewLevel from '../Newlevel'
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