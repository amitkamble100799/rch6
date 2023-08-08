import React,{useContext} from 'react'
import Storedata from './Store'
import { useNavigate } from 'react-router-dom';


const Add = () => {
    const contextData=useContext(Storedata);
    const newStu={
name:"",
age:"",
course:"",
batch:""
    }

    const Handle=(e)=>{
newStu[e.target.name]=e.target.value;
newStu[e.target.age]=e.target.value;
newStu[e.target.course]=e.target.value;
newStu[e.target.batch]=e.target.value;

    }
    const Navi=useNavigate()
    const Click=()=>{
      contextData.stuname.push(newStu)
        Navi('/Student')
    }
    const Click1=()=>{
        Navi('/Student')
    }
  return (
    <div>
    <h1>Add New Student</h1>
    <div className='minp'>
      <div>
    <div className='nm1'>
    <label>Name :</label>
    <input type='text' id='name' placeholder='Enter Your Name' name='Name' onChange={Handle} />
    </div>
    <div className='nm1'>
    <label>Age :</label>
    <input type='text' id='Age' placeholder='Enter Your Age' name='Age' onChange={Handle} />
    </div>
    </div>
    <div>
    <div className='nm1'>
    <label>course :</label>
    <input type='text' id='course' placeholder='Enter Your Course' name='course' onChange={Handle} />
    </div>
    <div className='nm1'>
    <label>Batch :</label>
    <input type='text' id='Batch' placeholder='Enter Your Batch' name='Batch' onChange={Handle} />
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

export default Add