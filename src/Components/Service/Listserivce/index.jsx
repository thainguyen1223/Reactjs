import classes from './Listserivce.module.css'
import Bellactive from "../../Bellactive";
import {Link} from 'react-router-dom';
import Levelgoto from "../../image/gotoright.svg";
import {useState} from 'react'
function Listserivce(){

    const [codeService , setCodeService] = useState('201')
    const [nameService , setNameService] = useState('Khám tim mạch')
    const [desService , setDesService] = useState('')

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
                            
                            <div className={classes.serviceCode}>
                                <div className={classes.serviceCodetitle}>
                                    Tên dịch vụ: <span>*</span>
                                </div>
                                <div className={classes.serviceCodeinput}>
                                    <input type="text" value={nameService} onChange={ e=> setNameService(e.target.value)}  />
                                </div>
                            </div>       
                        </div>
                        <div className={classes.serviceCode}>
                                <div className={classes.serviceCodetitle}>
                                    Mô tả: <span>*</span>
                                </div>
                                <div className={classes.serviceCodeinput}>
                                    <textarea rows={4} cols={50} placeholder="Mô tả dịch vụ" value={desService} onChange={ e=> setDesService(e.target.value)}></textarea>
                                </div>
                        </div>
                    </div>

                    <div className={classes.contaniner__rules}>
                        <div className={classes.contaniner__rules__title}>
                                Quy tắc cấp số
                        </div>
                        <div className={classes.contaniner__checkbox}>
                            <div className={classes.contaniner__checkbox__items}>
                                <div className={classes.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Tăng tự động từ:</span>
                                </div> 
                                <div className={classes.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Prefix:</span>
                                </div>   
                                <div className={classes.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Surfix:</span>
                                </div>   
                                <div className={classes.contaniner__checkbox__item}>
                                    <input type="checkbox"/> 
                                    <span>Reset mỗi ngày</span>
                                </div>   
                            </div>
                                <div className={classes.contaniner__input__items}>
                                <div className={classes.contaniner__input__item}>
                                    <input type="text" value='0001'  onChange={ e=>'value'}/>
                                    <span>đến</span>
                                    <input type="text" value='9999' onChange={ e=>'value'}/>
                                </div>
                                <div className={classes.contaniner__input__item}>
                                    <input type="text" value='0001'  onChange={ e=>'value'}/>                               
                                </div>
                                
                                <div className={classes.contaniner__input__item}>
                                    <input type="text" value='0001'  onChange={ e=>'value'}/>                               
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={classes.contaniner__more}>
                        <div className={classes.contaniner__more__title}>
                            <p className={classes.star}>*</p> <span className={classes.contaniner__more__require}>Là trường thông tin bắt buộc</span> 
                        </div>
                    </div>

                </div>
                <div className={classes.contaniner__button}>
                    <div className={classes.contaniner__cancel}>
                    <Link to="/service"><button>Hủy bỏ</button></Link>
                    </div>
                    <div className={classes.contaniner__addservice}>
                        <button>Thêm dịch vụ</button>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Listserivce;