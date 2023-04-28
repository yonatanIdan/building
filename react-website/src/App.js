import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/pages/navbar/Navbar';
import Home from './components/pages/home/Home';
import Lobi from './components/pages/lobi/Lobi';
import Login from './components/pages/login/Login';
// import Departments from './components/pages/departments/Departments';
import { PaymentsRoutes } from './components/routes/PaymentsRoutes';
// import Services from './components/pages/services/Services';
// import AboutUs from './components/pages/aboutUs/AboutUs';
import ErrorPage from './components/pages/errors/ErrorPage';
import ProtectedRoute from './components/routes/guard/ProtectedRoute';
import userJson from './json/userJson.json';

function App() {
  const [user, setUser] = useState(userJson.details.people[0])
  const isAllowed = (permission) => { return user.permissions.includes(permission) }
  console.log(user)
  return (
    <Router>
      <Navbar/>
      <button onClick={()=>{setUser(userJson.details.people[1])}} value="change user">change user</button>
      <Routes>
        <Route element={<ProtectedRoute isAllowed={isAllowed('admin')} />}>
          <Route exact path='/home' element={ < Home /> }  />
          <Route path='/payments/*' element={< PaymentsRoutes />} />
        {/* <Route exact path='/departments' element={< Departments />} /> */}
        {/* <Route exact path='/services' element={< Services />} /> */}
        {/* <Route exact path='/about-us' element={< AboutUs />} /> */}
        </Route>
        <Route exact path='/login' element={< Login />} />
        <Route exact path='/' element={< Lobi />} />
        {/* errors pages */}
        <Route exact path='/404' element={< ErrorPage type='404' message='לא נמצא הדף.'/>} />
        <Route exact path='/500' element={< ErrorPage type='500' message='בעיית שרת, נא לפנות למנהל האפליקציה.'/>} />
        <Route path='/*' element={< ErrorPage type='404' message='לא נמצא הדף.'/>} />
      </Routes>
    </Router>
  );
}

export default App;
