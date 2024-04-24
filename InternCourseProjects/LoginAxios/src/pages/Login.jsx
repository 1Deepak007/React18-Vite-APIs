import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default function Login() {

    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');

    // const axios = require('axios');
    
    const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const res = await axios.get(apiUrl
            //     , {
            //     username: username,
            //     password: password
            // }
            );
            
            console.log(res);


            if(res.data.status === 'success'){
                alert('Login Successful');
            }
            else{
                alert('Login Failed');
                console.log('Error : ',error);
            }

        }
        catch(error){
            console.log("error")
        }
    }


    return (

        //   <label htmlFor="username">Username</label>
        //   <input type="text" name="username"  id='username'/>


        <div style={{  background: 'linear-gradient(to right, #134E5E, #71B280)', height:'100vh', color:'white', paddingTop:'5%', paddingRight:'30%', paddingLeft:'30%'}}>
        <form onSubmit={handleSubmit} className='container'>
            <h1 className='text-center text-decoration-underline'>Login</h1>

            <label htmlFor="username" className='my-3'>Username</label>
            <input type="text" value={username} id='username' onChange={(e)=> setUsername(e.target.value)} required className='form-control'/>



            <label htmlFor="password" className='my-3'>Password</label>
            <input type="text" value={password} id='password' onChange={(e)=> setPassword(e.target.value)} required className='form-control'/>

            <Button variant="success" type="submit" className='my-3'>
                Login
            </Button>
        </form>
        </div>
    )
}
