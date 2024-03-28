import React from 'react'

export default function Students({name,phone,address}) {
  return (
    <>
        <ul>
            <li>Student's name : {name}, Contact : {phone}, Address : {address}</li>
        </ul>
    </>
  )
}
