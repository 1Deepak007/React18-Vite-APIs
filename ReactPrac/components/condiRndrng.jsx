import React, { useState } from 'react'

export default function CondiRndrng() {

    const [loggedIn, setloggedIn] = useState(false);
    //---------------------------------------------------

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState('');
    const [gender, setGender] = useState('');

    const student = {}

    const handleForm = (e) => {
        e.preventDefault();
        if (name == email == contact == address == location == gender == null || "") {
            console.log(student);
            return alert("All fields are required!");
        }
        else {
            student['stuname'] = name;
            student['stuemail'] = email;
            student['contactno'] = contact;
            student['address'] = address;
            student['location'] = location;
            student['gender'] = gender;

            console.log(student);
            // document.write(`Name => ${name}. <br/>Email => ${email}. <br/>Contact => ${contact}. <br/>Address => ${address}. <br/>Location => ${location}. <br/>Gender => ${gender}.`)

            document.getElementById('message').innerText = `Name => ${name}. Email => ${email}. Contact => ${contact}. Address => ${address}. Location => ${location}. Gender => ${gender}.`
        }
    }

    const handleRadioButton = (e) => {
        setGender(e.target.value)
    }

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }



    return (
        <>
            <div className='container'>
                <h2 className='text-center text-decoration-underline'>Conditional Rendering</h2>

                <h4>{loggedIn ? 'Welcome user' : 'Please Login'}</h4>
                <button onClick={() => setloggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>

                <hr />

                {
                    loggedIn ?
                        <form action="handleForm" style={{ border: "2px solid red", padding: "10px" }}>
                            <h4 className='text-decoration-underline'>Students  Information </h4>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="name">Student's Name  </label>
                                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} required /><br />
                                </div>
                                <div className="col">
                                    <label htmlFor="eml">Student's Email  </label>
                                    <input type="email" name='email' id="eml" onChange={(e) => setEmail(e.target.value)} required /><br />
                                </div>
                                <div className="col">
                                    <label htmlFor="eml">Student's Contact  </label>
                                    <input type="tel" name='contact' id="eml" onChange={(e) => setContact(e.target.value)} required /><br />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col">
                                    <label htmlFor="add">Student's Address  </label>
                                    <input type="text" name='address' id="add" onChange={(e) => setAddress(e.target.value)} required /><br />
                                </div>
                                <div className="col">
                                    <label htmlFor="location">Student's Location</label>  &nbsp;
                                    <select id="location" name="location" onChange={handleLocation} >
                                        <option value=''>select location</option>
                                        <option value="Bangalor">Bangalore</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Chenai">Chennai</option>
                                    </select>
                                    <p>Selected location : {location}</p>
                                </div>


                                <div className="col">
                                    <label htmlFor="eml">Student's Gender :  &nbsp;</label>
                                    <input type="radio" value="male" onChange={handleRadioButton} />
                                    <label htmlFor="gender" >Male </label>       &nbsp;
                                    <input type="radio" value="female" onChange={handleRadioButton} />
                                    <label htmlFor="gender" >Female </label>
                                    <br />
                                </div>
                            </div>

                            <button type='submit' onClick={handleForm}>Submit</button>
                        </form>



                        : null
                }
                <p id="message"></p>                <hr />
            </div>

        </>
    )
}
