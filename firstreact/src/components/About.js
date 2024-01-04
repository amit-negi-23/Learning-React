import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Feedback from './Feedback'
export default function About() {
const [form , setForm] =useState()

  function handleclick(){
      if(form!=undefined){
        setForm()
      }else{
        setForm(<Feedback/>)
      }

      // if(form===undefined){
      //   setForm(<Feedback/>)
      // }else{
      //   setForm()
      // }
  }
  return (

    <div>
        <h1>About Page</h1>
        <Link to="/contact">Contact</Link>

        <p>This is a paragraph</p>

        <button onClick={handleclick}>Feedback</button>

        <div>
          {form}
        </div>
    </div>
  )
}
