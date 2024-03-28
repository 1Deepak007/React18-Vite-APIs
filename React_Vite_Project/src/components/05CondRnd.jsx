import React from 'react'

export default function CondRnd() {
  const display = false;

  if(display){
    return (
        <>
        <h3>This is conditional rendering.</h3>
        </>
      )
  }
  else{
    return (
        <>
        <h3>Your component is rendred conditionally.</h3>
        </>
      )
  }
}
