import React from 'react'
import { useState, useEffect } from 'react';

export default function UseEffectHook() {
    // useEffect Hook - used for giving side-effects when component renders like (datafetching from db, calling APIs etc.). 

    //Case 1: this useEffect run when component mounts/1st render
    useEffect(() => {
        alert('Welcome To useEffect Hook'); // this will run 2 times cuz strict mode is onn
    }, [])

    //Case 2: run on every count (value) change
    const [count, setCount] = useState(0);
    useEffect(() => {
        alert('Count updated..!');
    }, [count])

    //Case 3: run on every render
    useEffect(() => {
        alert("I will run on every render")
    })

    return (
        <div style={{ background: '#61ff00', height: '100vh' }}>
            <h3 style={{ background: 'linear-gradient(to right, #E9E4F0, #a17fe0, #5d26c1)' }}>useEffect</h3>
            <h2 className='text-center text-decoration-underline'>useEffect</h2>
            <ul>
                <li>useEffect runs on every render.</li>
                <li>The useEffect hook is used to handle the side effects of a component.</li>
                <li>The useEffect Hook allows you to perform side effects in your components.</li>
                <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li>
                <li>useEffect accepts two arguments. The second argument is optional.
                    useEffect (function, dependency);
                </li>
                <li>We can use  multiple UseEffects</li>
            </ul>

            <div className="container pb-2" style={{ backgroundColor: 'white' }} >
                <p>{count}</p>
                <button onClick={(e) => setCount(count + 1)}>Click Me!</button>
            </div>

            <div className="container py-2 mb-2" style={{ backgroundColor: 'lightcoral' }}>
                <h2>hi</h2>

            </div>
        </div>
    )
}
