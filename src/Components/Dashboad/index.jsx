import classes from './Dashboad.module.css'
import React from 'react'
import Listitem from '../Listitem'
import Menubar from './Menubar'
import Chart from './Chart'
import Chartmonth from './Chartmonth'
export default function Dashboad() {
    return(
        <div className={classes.dashboad}>
            <Listitem/>
         <div className={classes.dashboadmiddle}>
             <Chart/>
             <Chartmonth/>
             </div>   
            <Menubar/>
        </div>
    )
}



