import React from 'react'
import { useState, useEffect } from 'react'

export default function UseStatehook() {

    const [name, setName] = useState('');
    // const handleName = (e) => {    setName(e.target.value)    }
    const displayName = () => {
        document.getElementById('dispname').innerHTML = `Your name is ${name}`;
        console.log(name)
    }
    //-----------------------------------------------------------

    const [count,setcount] = useState(0);

    const [num, setNum] = useState(0);
    function radomNumber(){
        let n = Math.floor(Math.random() * 100);
        setNum(n);
    }

    //-----------------------------------------------------------

    const[pass,setPass] = useState(null);
    const charSet = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    const numchar = "!@#$%^&*<>?/|1234567890";
    function generatePass(){
        let randPass = "";  
        for (let i = 1; i <= 5; i++) {
            randPass += (charSet.charAt(Math.floor(Math.random() * charSet.length)) 
            + numchar.charAt(Math.floor(Math.random() * numchar.length))) ;
        }
        setPass(randPass);
    }
    //-----------------------------------------------------------

    const[todo,setTodo] = useState(null);
    const[items,setitem] = useState([]);
    const setTask=(e)=>{
        setTodo(e.target.value)
    }
    const addItems=()=>{
        // setitem([...items, 'Item ${items.length + 1}']);
        setitem([...items, todo]);
    }

    return (
        <div style={{ background: 'lightblue', height:'100vh' }} className='py-3'>
            <div className="container">
                <h3 style={{ background: 'linear-gradient(to right, #f0f2f0, #000c40)' }}>useState</h3>
                <ul>
                    <li>useState hook in React is used to add state variables to functional components.</li>
                    <li> It allows you to declare a state variable and provide a function to update it, all within a functional component.</li>
                </ul>
                Enter Name :
                <input type="text" onChange={(e) => setName(e.target.value)} />                         &nbsp;&nbsp;
                <button onClick={displayName} className='btn btn-primary'>Set Name</button>                 &nbsp;&nbsp;
                <p id='dispname'></p>           <hr />
            </div>

            <div className="container">
                <h3>{count}</h3>
                <button onClick={()=>setcount(count-1)}>Count -</button>
                <button onClick={()=>setcount(0)}>Reset</button>
                <button onClick={()=>setcount(count+1)}>Count +</button>        <hr />
            </div>

            <div className="container">
                <h3>{num}</h3>
                <button onClick={radomNumber}>Generate Random Number</button>   <hr />
            </div>

            <div className='container'>
                <h3>{pass}</h3>
                <button onClick={generatePass}>Generate Password</button>       <hr />
            </div>

            <div className="container">
                <h2>TODO's List</h2>
                <input type="text" onChange={setTask} placeholder='write todo here' />
                <ul>
                    {items.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button onClick={addItems}>Add Item</button>                    <hr />
            </div>
            
            <div className="container">

            </div>
        </div>
    )
}
