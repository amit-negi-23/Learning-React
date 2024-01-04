import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const {id, userxname} = useParams()
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4 className='card-title'>{userxname}</h4> {/* This is just for example */}
                            <h4 className='card-title'>{id}</h4>
                            <p className='card-text'>Some example text. Some example text</p>
                            <a href="#" className='card-link'>Card link</a>
                            <a href="#" className='card-link'>Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
