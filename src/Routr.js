import React, { useState } from "react";
import {Route,Routes,BrowserRouter,NavLink} from 'react-router-dom'
import Cantact from './Cantact'
import Student from "./Student";
import Home from "./Home";
import Storedata from "./Store";
import Add from "./Add";
import Edit from "./Edit";
import './App.css'

function Routcmp(){
   const [Studentdata,Setstudentdata]=useState([
    { Name:"Amit", Age:23, Batch:"EA23", course:"MEARN"},
    { Name:"Akash", Age:23, Batch:"EA23",course:"MEARN"},
    { Name:"Akshay", Age:23, Batch:"EA23", course:"MEARN"},
    { Name:"Rohith", Age:23, Batch:"EA23", course:"MEARN"},
    { Name:"Ankit", Age:23, Batch:"EA23",course:"MEARN"}

])
return(
    <BrowserRouter>
    <div className="lnk">
    <NavLink className='l' to='/'>Home</NavLink>
     <NavLink className='l' to='/Student'>Student</NavLink>
     <NavLink className='l' to='/Cantact'>Cantact</NavLink>
    </div>
   
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Student" element={
            <Storedata.Provider value={{stuname:Studentdata, Updatestu:Setstudentdata}}>
                <Student/>
            </Storedata.Provider>
        }/>
        <Route path="/Cantact" element={<Cantact/>}/>
        <Route path="/newstudent"  element={
              <Storedata.Provider value={{stuname:Studentdata, Updatestu:Setstudentdata}}>
              <Add/>
          </Storedata.Provider>
        }/>
         <Route path="/Edit"  element={
              <Storedata.Provider value={{stuname:Studentdata, Updatestu:Setstudentdata}}>
              <Edit/>
          </Storedata.Provider>
        }/>
    </Routes>
    </BrowserRouter>
)
}
export default Routcmp