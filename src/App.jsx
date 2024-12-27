import React from 'react'
import { Signup } from './Components/Signup/Signup'
import {Login} from './Components/Login/Login'
import 'bootstrap'
// import 'bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/bootstrap-icons.css';
import './App.css'
// import { Button } from './Components/Button/Button';


export const App = () => {
  return (
    <div>
      <Signup/>
 <Login/>

    </div>
  )
}
