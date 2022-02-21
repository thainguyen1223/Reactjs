import classes from "./Listdevice.module.css"
import Levelgoto from "../image/gotoright.svg";
import Bellactive from "../Bellactive";
import fi_search from"../image/fi_search.svg"
import Dropdown from 'react-dropdown';
function Listdevice(){
    const optionsdevice = [
        'Tất cả', 'Hoạt động', 'Ngưng hoạt động'
      ];
      const sumitdevice =(e)=>{
        console.log(e.value)
    }
    const defaultOptiondevice = optionsdevice [0];
    const optionsconnet = [
        'Tất cả', 'Kết nối', 'Mất kết nối','Khám tai mũi họng'
      ];  

      const sumitconnet =(e)=>{
        console.log(e.value)
    }
    const defaultOptionconnet = optionsconnet [0];
    return(
        <div className={classes.device}>
              <div className={classes.info}>
                <div className={classes.infolist}>
                    <p className={classes.title}>
                        Thiết bị 
                    </p>
                    
                    <img src={Levelgoto} alt="levelgoto" className={classes.levelgoto}></img>
            
                    <p className={classes.detaillist}>
                        Danh sách thiết bị 
                    </p>

                </div>
                <div className={classes.bell}>
                    <Bellactive/>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.listtitle}>
                    Danh sách thiết bị
                </div>

                <div className={classes.levellistdrow}>
                    <div className={classes.listitemdrow}>
                        <div className={classes.levelitem}>
                            <div className={classes.levelname}>Trạng thái hoạt động</div>
                                <div className={classes.leveldrow}>
                                    <Dropdown options={ optionsdevice} 
                                       
                                       onChange={(e)=>sumitdevice(e)} 
                                       value={defaultOptiondevice} placeholder="Select an option" />
                                        
                                </div>
                        </div>

                        <div className={classes.levelitem}>
                            <div className={classes.levelname}>Trạng thái hoạt động</div>
                                <div className={classes.leveldrow}>
                                    <Dropdown options={ optionsconnet} 
                                       
                                       onChange={(e)=>sumitconnet(e)} 
                                       value={defaultOptionconnet} placeholder="Select an option" />
                                        
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listdevice;