import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Layousts/Navbar';
import Footer from '../components/Layousts/Footer';

function Layouts() {
  return (
    <div>
        <Navbar/>
        <div className='spasi1'></div>
        <Outlet/>
        {/* <div className='spasi2'></div> */}
        
    </div>
  )
}

export default Layouts;