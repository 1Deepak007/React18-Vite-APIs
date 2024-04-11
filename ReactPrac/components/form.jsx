import React from 'react'
import { useState } from 'react';

export default function Form() {

    const[name,setName] = useState(null);
    const[email, setEmail] = useState("");
    const[location, setLocation]=useState(null);
    const[gender, setGender] = useState(null);
    const[phone,setPhone] = useState(null);

    function FormSubmittion(e){
        e.preventDefault();
        if(!name || !email || !location || !gender){
            return alert('All fields are required');
        }
        else{
            alert(`Hello ${name}. Email is ${email}. Location is ${location}. Gender is ${gender}. Phone number is ${phone}.`)
        }
    }

  return (
    <div className="container my-4" style={{background:'lightpink', border:'5px solid blue'}}>
        <h2 className='text-center text-decoration-underline'>React Form</h2>
        <form onSubmit={FormSubmittion}>
            <div className="row">
                <div className="col">
                    <label htmlFor="name" >Name </label>   &nbsp;  
                    <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}/><br/>
                </div>
                <div className="col">
                    <label htmlFor="email">Email </label>   &nbsp; 
                    <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}/><br/>
                </div>
            </div>

            <div className="row my-3">
                <div className="col">
                    <label htmlFor="location">Location</label>   &nbsp;
                    <select id="location" name="location"  onChange={(e)=>setLocation(e.target.value)}>
                        <option value="">Select Location</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Chenai">Chennai</option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="gender">Gender</label>          &nbsp;&nbsp;
                    Male <input type="radio" name='gen' value='male' onChange={(e)=>setGender(e.target.value)} />
                    Female <input type="radio" name='gen' value='female' onChange={(e)=>setGender(e.target.value)} />
                </div>
            </div>

            <div className="row my-3">
                <div className="col">
                    <label htmlFor="phone">Phone</label>            &nbsp;&nbsp;
                    <input type="tel" minLength={10} maxLength={10} onChange={(e)=>setPhone(e.target.value)} />    
                </div>
            </div>
            <button type="submit" className="btn btn-primary mx-auto d-block mb-2">Submit</button>
        </form>
    </div>
  )
}
