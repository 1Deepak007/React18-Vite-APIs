import React, { useEffect, useState, useRef, useCallback } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Hooks1() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.warn(`You clicked ${count} times. useEffect called.`);
    });


    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    };

    //-----------------------------------------------------------------------
    const[length, setlen] = useState(0);
    const[isNum, setisNum]  = useState(false);
    const[isChar, setisChar] = useState(false);
    const[password, setpassword] = useState("");
    const passGentor = useCallback(()=>{
        let pass = ""; let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
        if(isNum)str+="1234567890";
        if(isChar)str+= "!@#$%^&*()_+{}|[]:;<>?,./~` ";
        for (let i=0;i<=length;i++){
            let char = Math.floor(Math.random()*str.length+1);
            pass += str.charAt(char);
        }
        setpassword(pass);
    },[length,isNum,isChar])
    useEffect(() => {passGentor()},[length, isNum, isChar,  passGentor]);

    const passwordRef = useRef(null);
    const copyPassToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0, length);        //select a range of value    e.g.(1,10) select 10 values
        window.navigator.clipboard.writeText(password);
    },[password]);
    

    return (
        <>
            <h2 className='text-center'>useEffect,useRef,useCallback</h2>

            <h3>UseEffect</h3> <p> is a hook in React used to perform side effects in function components. It runs after every render, including the first render. It can be used to perform tasks like data fetching, subscriptions, or manually changing the DOM in React components.</p>
            <p>Clicked {count} times.</p>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>
            <hr /> 

            <h3>UseRef</h3> <p> returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focus the input field</button>
            <hr />

            <h3>Callbacks</h3> <p>in React are used to pass functions down to child components. They allow child components to communicate with their parent components by invoking functions passed as props.</p>
            <hr />


            <div className="container">
                <h2 className='text-center text-decoration-underline'>Password Generator</h2>
                <InputGroup className="mb-2">
                    <input type="text" value={password} useRef={passwordRef} placeholder="Generate password" readOnly className='form-control'/>     
                    <Button onClick={copyPassToClipboard} variant="outline-secondary" id="button-addon2" className='btn btn-success text-light'> Copy Password</Button>      <br />
                </InputGroup>
                <label htmlFor='passlen'>Length {length} <input type='range' min={6} max={100} onChange={(e)=>{setlen(e.target.value)}} /> </label>     &nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="isNumber">Number <input defaultChecked={isNum} onChange={()=>{setisNum((prev)=>!prev)}} type='checkbox' id="isNumber" /></label>                                           &nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="isCharacter">Character <input defaultChecked={isChar} type='checkbox' onChange={()=>{setisChar((prev)=>!prev)}} id="isCharacter" /></label>
                <hr />
            </div>
        </>
    )
}
