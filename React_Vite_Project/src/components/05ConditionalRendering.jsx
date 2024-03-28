import React from 'react'
import { useState } from 'react'
import CondRnd from './05CondRnd'

export default function ConditionalRendering() {

  const [loggedIn, setloggedIn] = useState(false)
  const handleLogin=()=>{
    setloggedIn(!loggedIn);
  }

  const [nwlgIn, setnwlgIn] = useState(2)

  return (
    <>
      <h2 className='text-center text-decoration-underline'>Conditional Rendering</h2>

      {/* if else */}
      <div className='text-center'>
        {loggedIn ? <h6>Welcome Deepak</h6> : <h6>Welcome Guest</h6>}
        <button onClick={handleLogin}>{loggedIn ? 'Logout' : 'Login'}</button>
      </div>
      
      <hr />

      {/* if elif else */}
      <div className="text-center">
        {nwlgIn == 1 ? <h6>Hello User 1</h6> : nwlgIn == 2 ? <h6>Hello User 2</h6> : <h6>Hello Guest</h6>}
      </div>

      <hr />

      <CondRnd />

    </>
  )
}
