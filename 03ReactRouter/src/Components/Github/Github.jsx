import React from 'react'
import { useEffect } from 'react'

export default function Github() {

    // Calling API to get github followers when component loads using useEffect. It runs when comp. loads
    useEffect(()=>{
        fetch('https://api.github.com/users/1Deepak007')
    },[])

  return (
    <>
        <div className="container">
            <h2>Github Followers</h2>
        </div> 
    </>
  )
}

