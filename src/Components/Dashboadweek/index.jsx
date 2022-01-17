import classes from './Dashboadweek.module.css'
import React from 'react'
import Listitem from '../Listitem'
import Menubar from '../Menubar'
import Chart from '../Chart'
import Chartweek from '../Chartweek'
export default function Dashboadweek() {
    return(
        <div className={classes.dashboad}>
            <Listitem/>
         <div className={classes.dashboadmiddle}>
             <Chart/>
             <Chartweek/>
             </div>   
            <Menubar/>
        </div>
    )
}



