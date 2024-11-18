import React from 'react'
import "./Admin1.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import {Routes , Route } from "react-router-dom"
import AddProducts from '../../components/AddProducts/AddProducts'
import ListProduct from '../../components/ListProduct/ListProduct'
import Dashboard from '../../components/Dashboard/Dashboard'

export default function Admin1() {
  return (
    <div className='admin'>
     <Sidebar/>
     <Routes>
     <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/addproduct' element={<AddProducts/>}/>
      <Route path='/listproduct' element={<ListProduct/>}/>
     </Routes>
    </div>
  )
}

