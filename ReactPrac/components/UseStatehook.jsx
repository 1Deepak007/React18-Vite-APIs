import React from 'react'
import { useState, useEffect } from 'react'

export default function UseStatehook() {
    //useState Hook
    const [name, setName] = useState('');
    // const handleName = (e) => {    setName(e.target.value)    }
    const displayName = () => {
        document.getElementById('dispname').innerHTML = `Your name is ${name}`;
        console.log(name)
    }

    return (
        <div style={{ background: '#61ff00', height:'100vh' }}>
            <h2 className="text-center text-decoration-underline ">Hooks</h2>
            <div className="container">
                <h3 style={{ background: 'linear-gradient(to right, #f0f2f0, #000c40)' }}>useState</h3>
                Enter Name :
                <input type="text" onChange={(e) => setName(e.target.value)} />                         &nbsp;&nbsp;
                <button onClick={displayName} className='btn btn-primary'>Set Name</button>                 &nbsp;&nbsp;
                <p id='dispname'></p>
            </div>
        </div>
    )
}
