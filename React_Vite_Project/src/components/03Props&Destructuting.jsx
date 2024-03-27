import React from 'react'

export default function Props(props) {

  let nums = [10,20,30,40,50];

  let fruits = [
    {name: "Apple", color:"Red",emoji:"🍎"},
    {name: "Banana", color:"Yellow", emoji:"🍌"},
    {name: "Orange", color:"Orange", emoji: "🍊"},
    {name: "Cherry", color:"Red", emoji:"🍒"},
    {name: "Kiwi", color:"Green", emoji: "🥝"}
  ]

  return (
    <>
        <h3  className='text-center text-decoration-underline '>Props With Components</h3>
        <p>Agent Name is : {props.agentname}</p>
        <p>Agent Code is : {props.secretCode}</p>

        <hr/>

        <h5 className='text-decoration-underline'>Object Destructuring</h5>
        <div className="container">
            <h5>Student's Detail</h5>
            {/* note we can't change value of props. Props are immuteable */}
            <p>Student's Name : {props.name}</p>
            <p>Student's Age : {props.age}</p>
            <p>Student's Address : {props.other.address}</p>
            <p>Student's Phone No. : {props.other.mobile}</p>
        </div>

        <hr/>

        <h5 className='text-decoration-underline'>Function as a prop</h5>
        <p>Sum of array is : {props.calcsum(nums)}</p>

        <h5>Map with array</h5>
        {nums.map(  (num) => <li key={num}>{num}</li>  )}

        <h5>Map with array of object</h5>
        <ul>
          {fruits.map((fruit)=><li>{fruit.name} {fruit.emoji} {fruit.color}</li>)}
        </ul>
        

    </>
  )
}
