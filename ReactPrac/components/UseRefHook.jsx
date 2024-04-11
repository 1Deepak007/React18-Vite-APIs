import React, { useState, useRef, useEffect } from 'react'

// Ref is used the value is not used anywhere in DOM & we want to change it and persist it across rerenders.
export default function UseRefHook() { 
    const [count, setCount] = useState(0);
    // let a = 0                // Normal variable
    const a = useRef(0)         // Refrence variable

    const BtnRef = useRef()
    useEffect(()=>{
        // below normal vari don't work as it's value will not persist on component rerendering. That's why we use useRef.
        // a = a+1; setCount(a);

        a.current = a.current + 1;
        console.log(`Rendering & the value of 'a' is ${a.current}`);

        BtnRef.current.style.backgroundColor = "red";
    })

    //---------------------------------------------------

    let ref = useRef(0);
    function handleClick(){
        ref.current = ref.current + 1;
        alert(`You Clicked ${ref.current} times`);
    }



    return (
        <div className='container'>
            <h2 className='text-center text-decoration-underline'>UseRefHook</h2>
            <p>The useRef Hook is a built-in React Hook that can be used to persist values between re-renders. It takes an initial value of any type as an argument and returns an object with a single current property. The value of the ref object remains the same between re-renders. Updating the value of the ref object doesn't trigger a re-render.</p>

            <p>{count}</p>
            <button ref={BtnRef} onClick={()=>setCount((count)=>(count+1)) }>Click Me!</button>

        
            <hr />


            <p>This value will only update in DOM when component re-renders.   <b>{ref.current}</b></p>
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}
