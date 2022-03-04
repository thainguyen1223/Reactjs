
import './App.css';
import Dashboad from './Components/Dashboad';
import Login from "./Components/Login/Login";
import Wrongpass from "./Components/Login/Wrongpass";
import Forgotpass  from "./Components/Login/Forgotpass";
import Resetpass  from "./Components/Login/Resetpass";
import Account  from "./Components/Login/Account";
import Listlevel from './Components/Level/Listlevel'
import {Routes , Route } from 'react-router-dom';
import Addlevel from './Components/Level/Addlevel';
import Information  from './Components/Level/Information';
import Numberlevel from './Components/Level/Numberlevel';
import AccountManagement from './Components/AccountManagement';
import Moreaccount from './Components/Moreaccount';
import Updateaccount from './Components/AccountManagement/Updateaccount';
import Diarywork from './Components/Diarywork';
import Service from './Components/Service';
import Device from './Components/Device';
import Adddevice from './Components/Device/Adddevice';
import Addservice from './Components/Service/Addservice';
import Detailservice from './Components/Service/Detailservice';
import Report from './Components/Report';
import RoleManagement from './Components/RoleManagement';
import AddRole from './Components/RoleManagement/AddRole';
import Detaildevice from './Components/Device/Detaildevice';
import Updatedevice from './Components/Device/Updatedevice';
import Listitem from './Components/Listitem'
function App() {

  
 

  return (

    <div className="App"> 
         <Routes>
         <Route path='/' element={<Login/>}/>
          <Route path='/wrong' element={<Wrongpass/>}/>
          <Route path='/wrong/forgot' element={<Forgotpass/>}/>
          <Route path='/wrong/forgot/reset' element={<Resetpass/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/dashboard' element={<><Listitem/><Dashboad/></>}/>
          <Route path='/level' element={<><Listitem/><Listlevel/></>}/>
          <Route path='/level/add-level' element={<Addlevel/>}/>
          <Route path='/level/add-level/level' element={<Listlevel/>}/>
          <Route path='/level/service' element={< Information/>}/>
          <Route path='/level/numberlevel' element={< Numberlevel/>}/>
          <Route path='/level/numberlevel/level' element={< Listlevel/>}/>
          <Route path='/dashboard/AccountManagement' element={<AccountManagement/>}/>
          <Route path='/dashboard/AccountManagement/Moreaccount' element={<Moreaccount/>}/>
          <Route path='/dashboard/AccountManagement/Updateaccount' element={<Updateaccount/>}/>
          <Route path='/dashboard/Diarywork' element={<Diarywork/>}/>
          <Route path='/Device' element={<><Listitem/> <Device/></>}/>
          <Route path='/Device/add-device' element={<Adddevice/>}/>
          <Route path='/service' element={<><Listitem/> <Service/></>}/>
          <Route path='/report' element={<><Listitem/> <Report/></>}/>
          <Route path='/listservice' element={<Addservice/>}/>
          <Route path='/dashboard/RoleManagement' element={<RoleManagement/>}/>
          <Route path='/dashboard/RoleManagement/add-role-management' element={<AddRole/>}/>
          <Route path='/service/detailservice' element={<Detailservice/>}/>
          <Route path='/device/detaildevice' element={<Detaildevice/>}/>
          <Route path='/device/updatedevice' element={<Updatedevice/>}/>
    </Routes>
    </div>  


  );
}

export default App;
