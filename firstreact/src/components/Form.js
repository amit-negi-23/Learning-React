import React from 'react'
import { useState } from 'react'
export default function Form(){
    const [name, setname] = useState('xyz')
    const [email, setEmail] =useState('xyz@gmail.com')

    function handleName(event){
        setname(event.target.value)
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }
    function displayCons(event){
            event.preventDefault()
            console.log(name,email)
    }
    return(
        <div className='container mt-4 '>
                <div className='row'>
                    <div className='col-md-6 p-3 border'>
                        <form onSubmit={displayCons}>
                            <input type='text' className='mb-2 w-50' name='name' placeholder='Enter name' onChange={handleName}/>
                            <br/>
                            <input type='text'className='mb-2 w-50' name='email' placeholder='Enter email' onChange={handleEmail}/>
                            <br/>
                            <button className='btn btn-primary btn-sm mt-2'>Submit</button>
                        </form>
                    </div>
                    <div className='col-md-6 border'>
                            <h2>{name}</h2>
                            <h2>{email}</h2>
                    </div>
                </div>
        </div>
    )
}