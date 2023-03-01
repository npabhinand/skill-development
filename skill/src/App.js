import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import {Rooms} from'./components/Rooms';
import {Login} from './components/Login';
import {Profile} from './components/Profile'
import {Ide} from './components/Ide'
import {Signup} from './components/Signup'

function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/ide" element={<Ide />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  )
}
export default App