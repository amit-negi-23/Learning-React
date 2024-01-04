import React from 'react'

export default function Feedback() {
  return (
    <div>
        <div className='w-25 mt-4 border p-3'>
            
            <form>
                    <div className='mb-3'>
                            <input type='text' placeholder='Enter name' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                            <input type='text' placeholder='Enter email' className='form-control'/>
                    </div>
                    <button className='btn btn-primary'>Send feedback</button>
            </form>

        </div>
    </div>
  )
}
