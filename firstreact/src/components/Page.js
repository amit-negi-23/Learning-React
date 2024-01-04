import React from 'react'
import { useParams } from 'react-router-dom'
export default function Page() {
  const {page}=useParams()
  return (
    <div>
        <h1>Dynamic Page</h1>
        <h2>{page}</h2>
    </div>
  )
}
