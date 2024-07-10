import './App.css';
// import SideBar from './Component/SideBar';
// import Data from './Component/Data';
import { useState } from 'react';
import Home from './Connections/Home';
import Signup from './Connections/Signup';
import Login from './Connections/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom"



function App() {

  return (
    <div className='div'>

      {/* <SideBar/>
      <Data/> */}
         <BrowserRouter>
         <Routes>
             <Route path="/" element={ <Home/>} />
             <Route path="/signup" element={ <Signup/>} />
             <Route path="/login" element={ <Login/>} />         
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
