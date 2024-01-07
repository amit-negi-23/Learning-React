import React, { useEffect, useState } from 'react'

export default function SelectOption() {

    const[users, setUsers] = useState([])
    const[userId , setUserId] = useState(0)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        fetch('https://dummyjson.com/users').then(res=>res.json()).then(data=>setUsers(data.users))
        // return ()=>{
        //     console.log('unmount')
        // }
    },[])

    //1. componentDidMount
    //2. componentDidUpdate
    //3. componentWillUnmount   
    
    useEffect(()=>{
        if(userId!=0)
        fetch('https://dummyjson.com/users/'+userId).then(res=>res.json()).then(data=>setUser(data))
    },[userId])

    function changeUser(event){
        setUserId(event.target.value)
    }

  return (
    <div>
        <div className='w-25'>
            <select className='form-control form-select' value={userId}  onChange={changeUser}>
                <option value={''}>Select User</option>
                {(users.length!=0)?users.map((item)=><option key={item.id} value={item.id}>{item.firstName+' '+item.lastName}</option>):''}
            </select>
        {console.log(userId)}
        </div>
        {(user!=null)?<div className='w-50 border p-4 rounded mt-5'>
                    <h4 className='mb-0'>User Details</h4>
                    <img src={user.image} width={100}/>
                    <p className='mb-0'><strong>Full Name:</strong>{user.firstName + ' '+user.lastName}</p>
                    <p className='mb-0'><strong>Email:</strong>{user.email}</p>
                    <p className='mb-0'><strong>Tel:</strong>{user.phone}</p>
                    <p className='mb-0'><strong>Gender:</strong>{user.gender}</p>
                    <p className='mb-0'><strong>Age:</strong>{user.age}</p>
                    <p className='mb-0'><strong>Username:</strong>{user.username}</p>
                    <p className='mb-0'><strong>Password:</strong>{user.password}</p>
                    <p className='mb-0'><strong>Address:</strong>{user.address.sddress + ' '+user.address.city}</p>
        </div>:''}
    </div>
  )
}
