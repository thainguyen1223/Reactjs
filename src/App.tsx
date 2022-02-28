import React from 'react';
import './App.css';
import Dashboad from './Components/Dashboad';
import Login from "./Components/Login/Login";
import Wrongpass from "./Components/Login/Wrongpass";
import Forgotpass  from "./Components/Login/Forgotpass";
import Resetpass  from "./Components/Login/Resetpass";
import Account  from "./Components/Login/Account";
import Listlevel from './Components/Listlevel'
import {Routes , Route , Link , } from 'react-router-dom'
import Addlevel from './Components/Addlevel';
import Information  from './Components/Information';
import Numberlevel from './Components/Numberlevel';
import AccountManagement from './Components/AccountManagement';
import Moreaccount from './Components/Moreaccount';
import Updateaccount from './Components/Updateaccount';
import Diarywork from './Components/Diarywork';
import Service from './Components/Service';
import Device from './Components/Device';
import Adddevice from './Components/Adddevice';
import Addservice from './Components/Addservice';
import Detailservice from './Components/Detailservice';
import Report from './Components/Report'
import RoleManagement from './Components/RoleManagement'
import AddRole from './Components/AddRole'
import Detaildevice from './Components/Detaildevice';
import Updatedevice from './Components/Updatedevice'
import {useEffect,useState} from 'react'
function App() {

  
 

  return (

    <div className="App">
         
         <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/wrong' element={<Wrongpass/>}/>
          <Route path='/wrong/forgot' element={<Forgotpass/>}/>
          <Route path='/wrong/forgot/reset' element={<Resetpass/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/dashboard' element={<Dashboad/>}/>
          <Route path='/level' element={<Listlevel/>}/>
          <Route path='/level/add-level' element={<Addlevel/>}/>
          <Route path='/level/add-level/level' element={<Listlevel/>}/>
          <Route path='/level/service' element={< Information/>}/>
          <Route path='/level/numberlevel' element={< Numberlevel/>}/>
          <Route path='/level/numberlevel/level' element={< Listlevel/>}/>
          <Route path='/dashboard/AccountManagement' element={<AccountManagement/>}/>
          <Route path='/dashboard/AccountManagement/Moreaccount' element={<Moreaccount/>}/>
          <Route path='/dashboard/AccountManagement/Updateaccount' element={<Updateaccount/>}/>
          <Route path='/dashboard/Diarywork' element={<Diarywork/>}/>
          <Route path='/Device' element={<Device/>}/>
          <Route path='/Device/add-device' element={<Adddevice/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/report' element={<Report/>}/>
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
