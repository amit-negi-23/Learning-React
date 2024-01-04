import React from 'react'
import { useState } from 'react'

export default function Contact() {
const [inputs, setInputs] = useState({})
function handleInput(event){
  let name = event.target.name
  let value = event.target.value

  setInputs({...inputs, [name]:value})
}
  function handleSubmit(event){
    event.preventDefault()
    console.log(inputs)
  }
  
  return (
    <div>
        <h1>Contact Page</h1>

        <div className='container'>
           <div className='row'>
            <div className='col-md-4'>
                  <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <input type='text' name='name' placeholder='Enter Name' onChange={handleInput} value={inputs.name} className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' name='email' placeholder='Enter Email' onChange={handleInput} value={inputs.email} className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' name='phone' placeholder='Enter Phone' onChange={handleInput} value={inputs.phone} className='form-control'/>
                        </div>
                        <button className='btn btn-dark'>Submit</button>
                  </form>
            </div>
            </div>          
        </div>
    </div>
  )
}
