import classes from "./Detailservice.module.css"
import Listitem from '../Listitem'
import Bellactive from "../Bellactive";
import React, { useState,useEffect } from "react";
import levelgoto from "../image/gotoright.svg";
import DatePicker from "react-datepicker";
import Dropdown from 'react-dropdown';
function Detailservice(){
    return(
        <div className={classes.listservice}>
            <Listitem/>
        <div className={classes.listlevelright}>
            <div className={classes.service}>
                <div className={classes.serviceinfo}>
                    <div className={classes.serviceinfolist}>
                        <p className={classes.servicetitle}>
                            Dịch vụ
                        </p>
                            <img src={levelgoto} alt="levelgoto" className={classes.servicegoto}></img>
                    
                        <p className={classes.servicetitle }>
                            Danh sách dịch vụ
                        </p>
                        <img src={levelgoto} alt="levelgoto" className={classes.servicegoto}></img>
                            <p className={classes.servicelist }>
                            Chi tiết
                            </p>
                    </div>
                    <div className={classes.bell}>
                        <Bellactive/>
                    </div>
                </div>
                <div className={classes.detailtitle}>
                     Quản lý dịch vụ
                </div>
                <div className={classes.detail__container}>
                    <div className={classes.detail__container__items}>
                        <div className={classes.detail__item}>
                            <div className={classes.detail__title}>
                                Thông tin dịch vụ
                            </div>
                            <div className={classes.detail__items}>
                                <div className={classes.title}>Mã dịch vụ: </div>
                                <div className={classes.titlelist}>201</div>
                            </div>
                            <div className={classes.detail__items}>
                                <div className={classes.title}>Tên dịch vụ: </div>
                                <div className={classes.titlelist}>Chuyên các bệnh lý về tim</div>
                            </div>
                            <div className={classes.detail__items}>
                                <div className={classes.title}>Mô tả:</div>
                                <div className={classes.titlelist}>Chuyên các bệnh lý về tim</div>
                            </div>
                        </div>

                        <div className={classes.detail__item}>
                            <div className={classes.detail__title} style={{marginTop:"13px"}}>
                                Quy tắc cấp số
                            </div>
                            <div className={classes.detail__items}>
                                <div className={classes.title}>Tăng tự động:  </div>
                                <div className={classes.items__inputs}>
                                    <input type="text" onChange={ e=>'value'} value='0001' />
                                    <span className={classes.next}>đến</span> 
                                    <input type="text" onChange={ e=>'value'}  value='9999'  />
                                </div>
                            </div>
                            <div className={classes.detail__items}>
                                <div className={classes.title}>Prefix:</div>
                                <div className={classes.items__inputs}> 
                                    <input type="text" className='prefix'  value='0001' onChange={ e=>'value'} />
                                </div>
                            </div>
                            <div className={classes.detail__items1}>
                                Reset mỗi ngày
                            </div>
                            <div className={classes.example}>
                                Ví dụ: 201-2001
                            </div>
                        </div>
                    </div>

                    <div className={classes.detail__container__table}>
                        <div className={classes.servicedropdown}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Detailservice;   