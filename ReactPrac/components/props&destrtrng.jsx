import React from 'react'

// props(value,function,array) // destructing array
export default function Props_destrtrng(props) {

    // Receivings Function as prop
    let sum = props.summation(100, 200, 300, 400, 500)

    return (
        <>
            <h1 className='text-center text-decoration-underline '>Props & Destructuring</h1>

            <h4>Receivings Variables as prop</h4>
            <p>My name is {props.name} and I live in {props.location}.</p>

            <hr />

            <h4>Receivings Function as prop</h4>
            <p>Sum of numbers is : {sum}</p>

            <hr />

            <h4>Receivings Array as prop</h4>
            <p>Array Elements are: {props.myary.map((num)=><li key={num}>{num}</li>)}</p>

            <hr />

            <h4>Receiving Object as prop</h4>
            <p>{props.myobj.a}</p>
            <ul>
                {Object.entries(props.myobj).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>

        </>
    )
}
