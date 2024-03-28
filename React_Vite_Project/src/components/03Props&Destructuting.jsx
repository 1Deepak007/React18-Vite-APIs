import React from 'react'
import Students from './03Students';

export default function Props(props) {

  let nums = [10, 20, 30, 40, 50];

  let fruits = [
    { name: "Apple", color: "Red", emoji: "🍎" },
    { name: "Banana", color: "Yellow", emoji: "🍌" },
    { name: "Orange", color: "Orange", emoji: "🍊" },
    { name: "Cherry", color: "Red", emoji: "🍒" },
    { name: "Kiwi", color: "Green", emoji: "🥝" }
  ]

  let allstudents = [
    { "name": "Alice", "phone": "123-456-7890", "address": "123 Main Street, Anytown, CA 12345" },
    { "name": "Bob", "phone": "987-654-3210", "address": "456 Elm Street, Anytown, CA 12345" },
    { "name": "Carol", "phone": "555-555-5555", "address": "789 Oak Street, Anytown, CA 12345" },
    { "name": "Dave", "phone": "333-333-3333", "address": "1011 Maple Street, Anytown, CA 12345" },
    { "name": "Eve", "phone": "222-222-2222", "address": "1213 Pine Street, Anytown, CA 12345" },
    { "name": "Frank", "phone": "111-111-1111", "address": "1415 Birch Street, Anytown, CA 12345" },
    { "name": "Grace", "phone": "000-000-0000", "address": "1617 Cedar Street, Anytown, CA 12345" },
    { "name": "Henry", "phone": "999-999-9999", "address": "1819 Elm Street, Anytown, CA 12345" },
    { "name": "Ida", "phone": "888-888-8888", "address": "2021 Oak Street, Anytown, CA 12345" },
    { "name": "Jack", "phone": "777-777-7777", "address": "2223 Maple Street, Anytown, CA 12345" }
  ]

  return (
    <>
      <h3 className='text-center text-decoration-underline '>Props With Components</h3>
      <p>Agent Name is : {props.agentname}</p>
      <p>Agent Code is : {props.secretCode}</p>

      <hr />

      <h5 className='text-decoration-underline'>Object Destructuring</h5>
      <div className="container">
        <h5>Student's Detail</h5>
        {/* note we can't change value of props. Props are immuteable */}
        <p>Student's Name : {props.name}</p>
        <p>Student's Age : {props.age}</p>
        <p>Student's Address : {props.other.address}</p>
        <p>Student's Phone No. : {props.other.mobile}</p>
      </div>

      <hr />

      <h5 className='text-decoration-underline'>Function as a prop</h5>
      <p>Sum of array is : {props.calcsum(nums)}</p>

      <h5>Map with array</h5>
      {nums.map((num) => <li key={num}>{num}</li>)}

      <h5>Map with array of object</h5>
      <ul>
        {fruits.map((fruit) => <li key={fruit.name}>{fruit.name} {fruit.emoji} {fruit.color}</li>)}
      </ul>


      <h5 className='text-decoration-underline'>Reusing Component</h5>
      <ul>
        {allstudents.map((student) => (
          <Students key={student.phone} name={student.name} phone={student.phone} address={student.address} />
        ))}
      </ul>


    </>
  )
}
