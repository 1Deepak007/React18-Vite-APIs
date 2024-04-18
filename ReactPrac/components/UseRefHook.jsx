import React, { useState, useRef, useEffect, useDebugValue } from 'react';
import { Card, Button, Table } from 'react-bootstrap';

// useRef is used to persist values between re-renders.

// Ref is used the value is not used anywhere in DOM & we want to change it and persist it across rerenders.
export default function UseRefHook() {
    const [count, setCount] = useState(0);
    // let a = 0                // Normal variable
    const a = useRef(0)         // Refrence variable

    const BtnRef = useRef()
    useEffect(() => {
        // below normal vari don't work as it's value will not persist on component rerendering. That's why we use useRef.
        // a = a+1; setCount(a);

        a.current = a.current + 1;
        console.log(`Rendering & the value of 'a' is ${a.current}`);

        BtnRef.current.style.backgroundColor = "red";
    })

    //---------------------------------------------------

    let ref = useRef(0);
    function handleClick() {
        ref.current = ref.current + 1;
        alert(`You Clicked ${ref.current} times`);
    }

    //---------------------------------------------------

    // Fetching API
    const [data, setdata] = useState([]);
    const fetchData = async () => {
        // let ftch = await fetch('https://jsonplaceholder.typicode.com/posts')
        let ftch = await fetch('https://jsonplaceholder.typicode.com/users')
        let jsondata = await ftch.json();
        setdata(jsondata);
        console.log('JsonData');
        console.log(jsondata);
        setdata(jsondata);
    }
    useEffect(() => {
        fetchData();
    }, []);

    console.log('Data is : ');
    console.log(data);
    console.log(typeof (data));



    // var userData = {};
    // data.map((item) => {
    //     userData = {
    //         'id': item.id,
    //         'name': item.name,
    //         'email': item.email,
    //         'username': item.username,
    //         'phone': item.phone,
    //         'address': item.address.street + "," + item.address.suite + "" + item.address.city + ", ZipCode : " + item.address.zipcode
    //         // 'address': item.address
    //     }
    // })
    // console.log('----------------');
    // console.log(userData);





    return (
        <div className='container'>
            <h2 className='text-center text-decoration-underline'>UseRefHook</h2>
            <ul>
                <li>The useRef Hook is a built-in React Hook that can be used to persist values between re-renders.</li>
                <li>It takes an initial value of any type as an argument and returns an object with a single current property.</li>
                <li>The value of the ref object remains the same between re-renders. Updating the value of the ref object doesn't trigger a re-render.</li>
                <li>Can use to frtch APIs.</li>
            </ul>

            <hr />


            <h5>Without useRef Hook</h5>
            <p>{count}</p>
            <button ref={BtnRef} onClick={() => setCount((count) => (count + 1))}>Click Me!</button>


            <hr />

            <h5>With useRef Hook</h5>
            <p>This value will only update in DOM when component re-renders.</p>
            <p><b>{ref.current}</b></p>
            <button onClick={handleClick}>Click Here</button>

            <hr />

            <h5>Fetching API</h5>
            <div className="cards" style={{ border: '5px solid red' }}>
                {data.map((item) => {
                    return <div key={item.id} className='card'>

                        <span>ID : {item.id}, Name : {item.name}, Username : {item.username}, Email : {item.email}, Address : {item.address.street + "," + item.address.suit + "," + item.address.city + "," + item.address.zipcode}</span>
                    </div>
                })}
            </div>              <hr />

            <div className="container py-4" style = {{backgroundColor:"lightblue"}}>
                <h4 className='text-center'>Fetching API</h4>

                {data.map((card) => {
                    return <div key={card.id} className='card'>
                        <h2>{card.name}</h2>
                        <div className="row">
                            <div className="col"><p>Name : {card.username}</p></div>
                            <div className="col"><p>UserID : {card.id}</p></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Email : {card.email}</p>
                            </div>
                            <div className="col">
                                <p>Address : {card.address.street + "," + card.address.suit + "," + card.address.city + "," + card.address.zipcode}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>


            <hr />






        </div>
    )
}