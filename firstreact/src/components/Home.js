import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  const users = ["Amit","Rohit","Vikas","Pawan","Neha"];
  const list = users.map((item)=><li><Link to={"users/"+item}>{item}</Link></li>)
  return (
    <div>
        <div className='container'>
             <h1 className='display-4 fw-bold'>Home Page</h1>
             <ul>
                {list}
             </ul>
        </div>
    </div>
  )
}
