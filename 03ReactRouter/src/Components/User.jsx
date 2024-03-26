import React from 'react'
import {useParams} from 'react-router-dom'

export default function User() {
    const {userid} = useParams();
  return (
    <div className='container text-center text-teal-300 bg-orange-400'>
        <h1>User</h1>
        <h4>{userid}</h4>
    </div>
  )
}