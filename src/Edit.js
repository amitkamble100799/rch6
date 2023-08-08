import React,{useContext} from 'react'
import Storedata from './Store'
import { useNavigate,useLocation} from 'react-router-dom'

import './App.css'

const Edit = () => {
    const Navi=useNavigate()
    const ContextData=useContext(Storedata)
    const indexVal=useLocation().state.data;
    const updateObj={
        Name:ContextData.stuname[indexVal].Name,
        Age:ContextData.stuname[indexVal].Age,
        course:ContextData.stuname[indexVal].course,
        Batch:ContextData.stuname[indexVal].Batch
    }
    const Handle=(e)=>{
   updateObj[e.target.name]=e.target.value;
    }
    const Click=()=>{
        ContextData.stuname[indexVal]=updateObj;
Navi('/Student')
    }
    const Click1=()=>{
   
Navi('/Student')
  }
  return (
    <div>
    <h1>Edit Student</h1>
    <div className='minp'>
      <div>
    <div className='nm1'>
    <label>Name :</label>
    <input type='text' id='name' placeholder={ContextData.stuname[indexVal].Name} name='Name' onChange={Handle} />
    </div>
    <div className='nm1'>
    <label>Age :</label>
    <input type='text' id='Age' placeholder={ContextData.stuname[indexVal].Age} name='Age' onChange={Handle} />
    </div>
    </div>
    <div>
    <div className='nm1'>
    <label>course :</label>
    <input type='text' id='course' placeholder={ContextData.stuname[indexVal].course} name='course' onChange={Handle} />
    </div>
    <div className='nm1'>
    <label>Batch :</label>
    <input type='text' id='Batch' placeholder={ContextData.stuname[indexVal].Batch} name='Batch' onChange={Handle} />
    </div>
    </div>
    </div>
    <div className='btn'>
    <button className='btn1' onClick={Click1}>Cancel</button>
  <button className='btn2' onClick={Click}>Submit</button>
  </div>
  
</div>
  )
}

export default Edit