import React, { useState } from 'react'

export default function Form() {

    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");
    function getFormData(e) {
        console.warn(name, tnc, interest)
        e.preventDefault()              // prevent default loading of form when submit form
    }



    // Form Validation
    const [user, setuser] = useState('')
    const [password, setpassword] = useState('')
    const [userErr, setuserErr] = useState(false)
    const [passErr, setpassErr] = useState(false);

    function loginHandle(e) {
        if (user.length < 3 || password.length < 3) {
            alert('Type correct values')
        } else {
            alert('all good')
        }
        e.preventDefault()
    }
    function userHandler(e) {
        // console.warn(e.target.value); console.warn(e.target.value.length)
        let item = e.target.value;
        if (item.length < 4) {
            // console.log('Invalid')
            setuserErr(true)
        }
        else {
            setuserErr(false)
        }
        setuser(item)
    }

    function passHandler(e) {
        let item = e.target.value;
        if (item.length < 4) {
            setpassErr(true)
        }
        else {
            setpassErr(false)
        }
        setpassword(item)
    }
    return (
        <>
            <h3 className='text-center'>Handle form in React</h3>
            <form onSubmit={getFormData}>

                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />     <br /><br />

                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select>                                   <br /><br />

                <input onChange={(e) => setTnc(e.target.checked)} type="checkbox" /><span> Accept terms and conditions</span> <br /><br />

                <button type='submit'>Submit</button>

                <p>check console for output</p>
            </form>

            
            
            <hr />



            <form onSubmit={loginHandle} className='text-center'>
                <h3>Basic Form Validation</h3>

                <input type="text" placeholder='User Id' onChange={userHandler} />     {userErr ? <span>User not valid</span> : ""}       &nbsp;

                <input type="password" placeholder='User Password' onChange={passHandler} /> {passErr ? <span>Password not valid</span> : ""}   &nbsp;

                <button className='btn btn-success text-center' type='submit'>Login</button>
            </form>
        </>
    )
}