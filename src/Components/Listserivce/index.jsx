import classes from './Listserivce.module.css'
import Bellactive from "../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../image/gotoright.svg";
import {useState} from 'react'
function Listserivce(){

    const [codeService , setCodeService] = useState()
    const [nameService , setNameService] = useState()
    const [desService , setDesService] = useState()
    return(
        <div className={classes.account}>
            <div className={classes.accountinfo}>
                <div className={classes.accountinfolist}>
                    <p className={classes.accounttitle}>
                        Thiết bị
                    </p>
                        <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
                
                    <p className={classes.accounttitle }>
                        Danh sách dịch vụ
                    </p>

                        <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>

                    <p className={classes.accountlist }>
                    Thêm dịch vụ
                    </p>
                </div>
                <div className={classes.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={classes.accountcontainer}>
                <div className={classes.accountlisttitle}>
                    Quản lý dịch vụ
                </div>
                <div className={classes.addaccount}>
                    <div className={classes.addaccounttitle}>
                        Thông tin dịch vụ
                    </div>

                    <div className={classes.contaniner__input}>
                        <div className={classes.contaniner__input1}>
                            <div className={classes.serviceCode}>
                                <div className={classes.serviceCodetitle}>
                                    Mã dịch vụ: <span>*</span>
                                </div>
                                <div className={classes.serviceCodeinput}>
                                    <input type="text" value={codeService} onChange={ e=> setCodeService(e.target.value)}  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listserivce;