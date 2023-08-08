import React, { useContext } from 'react'
import Storedata from './Store'
import { Link,useNavigate} from 'react-router-dom'
import './App.css'

const Student = () => {
    const contextData=useContext(Storedata)
    const Navi=useNavigate();

  return (
    <div>
          <div> <h1 id='h2'>Student Details
          <button className='sp' onClick={()=>Navi('/newstudent')}>Add new student</button>
          </h1></div>
  
        
             <table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Batch</th>
    <th>Course</th>
    <th>Change</th>
  </tr>

  {
     contextData.stuname.map((item,index)=>{
            return(
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Batch}</td>
                <td>{item.course}</td>
                <td><Link state={{data:index}} to='/Edit'>Edit</Link></td>
             </tr>
           )
          })
        }
        </table>
    </div>
  )
}

export default Student