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
import AccountManagement from './Components/AccountManagement'
import Moreaccount from './Components/Moreaccount'
import Updateaccount from './Components/Updateaccount'
function App() {
  return (
    <div className="App">
         <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/wrong' element={<Wrongpass/>}/>
          <Route path='/forgot' element={<Forgotpass/>}/>
          <Route path='/reset' element={<Resetpass/>}/>
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
    </Routes>
    </div>
  );
}

export default App;
