import React from 'react'
import classes from './Page.module.css'
import goretro from "../image/goretro.svg"
import gonext from "../image/gonext.svg"
function Page() {

    return (
        <div className={classes.page }>
                <div className={classes.goretro}>
                    <img src={goretro} alt="goretro" />
                </div>
                <div className={classes.pageitem1}>1</div>
                <div className={classes.pageitem}>2</div>
                <div className={classes.pageitem}>3</div>
                <div className={classes.pageitem}>4</div>
                <div className={classes.pageitem}>5</div>
                <div className={classes.pageitem}>...</div>
                <div className={classes.pageitem}>10</div>
                <div className={classes.gonext}>
                    <img src={gonext} alt="" />
                </div>
        </div>
    )
}
export default Page;