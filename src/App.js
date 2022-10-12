import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register';
import Home from './Home';
import DashBoard from './DashBoard';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/dashboard' element={<DashBoard/>}></Route>
    </Routes>
  );
}

export default App;
