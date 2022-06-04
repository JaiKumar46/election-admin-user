import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import AdminLogin from "./components/Admin/AdminLogin"

import Home from "./components/Home/Home"
import Dashboard1 from "./components/Admin/Dashboard1"
import AllUser from "./ADminCrud/pages/AddUser"
import EditUser from "./ADminCrud/pages/EditUser"
import CrudHome from  "./ADminCrud/pages/CrudHome"
import AddUser from "./ADminCrud/pages/AddUser"
import NotFound from "./ADminCrud/pages/NotFound"
import UserLogin from "./components/User/UserLogin"
import UserDashBoard from './components/User/UserDashBoard'
import Thank from "./Voting/Thank"

import Result from "./ADminCrud/pages/Result" 

const App = () => {
  return (
    <div>
        
      <BrowserRouter>
    
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/adminlogin' element={<AdminLogin/>} />
         
          <Route path="/admindashboard" element={<Dashboard1/>}/>
          <Route path="/CrudHome" element={<CrudHome/>} />
        <Route path="/admindashboard" element={<AllUser/>} />
        <Route path="/add"element={<AddUser/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
        <Route path='/NotFound' element={<NotFound/>} />
        <Route path="/userlogin" element={<UserLogin/>} />
        <Route path="/userdashboard" element={<UserDashBoard/>}/>
        <Route path='/thanku' element={<Thank/>} />
        <Route path='/result' element={<Result/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App