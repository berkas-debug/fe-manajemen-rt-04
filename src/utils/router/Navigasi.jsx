import React from 'react'
import { 
    Route,
    BrowserRouter as Router,
    Routes
 } from 'react-router-dom'
import Login from '../../pages/auth/Login'
import Layouts from '../../pages/Layouts'
import Home from '../../pages/home/Home'
import NoPage from '../../components/NoPage'
import Wargabaru from '../../pages/auth/Wargabaru'
import Datawarga from '../../components/ketua/Datawarga'
import PrivateRoute from './PrivateRoute'

function Navigasi() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layouts/>}>
                <Route index element={<Login/>}/>
                <Route path='wargabaru' element={<Wargabaru/>}/>
                <Route path='dashboard' element={
                  <PrivateRoute>
                    <Home/>
                  </PrivateRoute>
                }/>
                <Route path='datawarga' element={
                  <PrivateRoute>
                    <Datawarga/>
                  </PrivateRoute>
                }/>
                <Route path='*' element={<NoPage/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default Navigasi