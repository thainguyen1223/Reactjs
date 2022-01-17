import React from 'react';
import './App.css';
import Dashboad from './Components/Dashboad';
import Login from "./Components/Login/Login";
import Wrongpass from "./Components/Login/Wrongpass";
import Forgotpass  from "./Components/Login/Forgotpass";
import Resetpass  from "./Components/Login/Resetpass";
import Account  from "./Components/Login/Account";
import Dashboadweek from './Components/Dashboadweek';
import {Routes , Route , Link , } from 'react-router-dom'
function App() {
  return (
    <div className="App">
         <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/wrong' element={<Wrongpass/>}/>
        <Route path='/forgot' element={<Forgotpass/>}/>
        <Route path='/reset' element={<Resetpass/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/Dashboad' element={<Dashboad/>}/>
        <Route path='/Dashboadweek' element={<Dashboadweek/>}/>
    </Routes>
    </div>
  );
}

export default App;
