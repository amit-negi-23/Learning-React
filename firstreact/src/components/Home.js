import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  const users = ["Amit","Rohit","Vikas","Pawan","Neha"];
  const list = users.map((item)=><li><Link to={"users/"+item}>{item}</Link></li>)

  const userx =[{name: "Rohit", id: 1},{name: "Rahul", id: 2},{name: "Vandna", id: 3}]
  const list2 = userx.map((item)=> <li><Link to={"userx/"+item.id+"/"+item.name}>{item.name}</Link></li>)
  return (
    <div>
        <div className='container'>
             <h1 className='display-4 fw-bold'>Home Page</h1>
             <ul>
                {list}
             </ul>
             <ul>
                {list2}
             </ul>
        </div>
    </div>
  )
}
