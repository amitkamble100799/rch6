import React from 'react'
import { Link } from 'react-router-dom'
const Lnk = () => {
  return (
    <div>
           <Link to='/'>Home</Link>
     <Link to='/Student'>Student</Link>
     <Link to='/Cantact'>Cantact</Link>
    </div>
  )
}

export default Lnk