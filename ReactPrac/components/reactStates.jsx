import React from 'react'
import { useState } from 'react'

export default function ReactStates() {

    const [count, setcount] = useState(0);

    function myalert() {
        alert("Alert !!!!!!!!")
    }

    const [name, setname] = useState('');
    const onNameChange = (e) => { setname(e.target.value) }

    const displayname = () => {
        alert("Hii  " + name)
    }
    // OR
    // function displayname(){
    //     alert("Hiiii "+name)
    // }

    //============> Calculate Percentage
    const [hindi, setHindi] = useState(0);
    const [english, setEnglish] = useState(0);
    const [maths, setMaths] = useState(0);
    const [science, setScience] = useState(0);
    const [sst, setSst] = useState(0);
    const [percn, setpercn] = useState(null);

    const CalcPerc = () => {
        // console.log(hindi, english, maths, science, sst)
        let obtMarks = Number(hindi) + Number(english) + Number(maths) + Number(science) + Number(sst)
        let perc = obtMarks / 500 * 100
        setpercn(perc)
        console.log(perc)
    }

    //============> Calculator
    const [val, setVal] = useState('');


    return (
        <>
            <div className='container'>
                <h2 className='text-center text-decoration-underline'>React States</h2>

                <div className="row">
                    <div className="col-md-1"><button onClick={() => setcount(count - 1)}>-</button></div>
                    <div className="col-md-1"><h2>{count}</h2></div>
                    <div className="col-md-1"><button onClick={() => setcount(count + 1)}>+</button></div>
                </div>
                <button onClick={() => setcount(null)}>Clear</button>

                <hr />

                <button onClick={myalert}>Alert</button>

                <hr />

                <label htmlFor="nme">Name: </label>
                <input type="text" id='nme' value={name} onChange={onNameChange} />
                <button onClick={displayname}>Click Me</button>

                <hr />

                <h4>Calculate  Percentage  </h4> <span>{`Your percentage is ` + percn}</span> <br />
                <label htmlFor="eng"> English marks : </label>
                <input type='number' id='eng' onChange={(e) => { setEnglish(e.target.value) }}></input>
                <label htmlFor="hin"> Hindi marks : </label>
                <input type='number' id='hin' onChange={(e) => { setHindi(e.target.value) }}></input>
                <label htmlFor="mth"> Maths marks : </label>
                <input type='number' id='mth' onChange={(e) => { setMaths(e.target.value) }}></input>
                <label htmlFor="sci"> Science marks : </label>
                <input type='number' id='sci' onChange={(e) => { setScience(e.target.value) }}></input>
                <label htmlFor="ss"> SST marks : </label>
                <input type='number' id='ss' onChange={(e) => { setSst(e.target.value) }}></input>
                <button onClick={CalcPerc}>Calculate Percentage</button>

                <hr />
            </div>

            <div className="container">
                <h4>Calculator</h4>
                <div className="container bg-success py-2 my-3 text-center" >
                    <form action="">
                        <div className="row">
                            <div className="col">
                                <input type="text" value={val} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-2">
                                <input type="button" value="AC"  onClick={e=>setVal('')} className='mt-2 mx-2' />
                                <input type="button" value="Del" onClick={e=>setVal(val.slice(0,-1))} className='mt-2 mx-2' />
                                <input type="button" value="."   onClick={e=>setVal(val + e.target.value)} className='mt-2 mx-2' />
                                <input type="button" value="**"  onClick={e=>setVal(val + e.target.value)} className='mt-2 mx-2' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-2">
                                <input type="button" value="7" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-2 ' />
                                <input type="button" value="8" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-3' />
                                <input type="button" value="9" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-2' />
                                <input type="button" value="*" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-3 px-2 ' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-2">
                                <input type="button" value="4" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-2' />
                                <input type="button" value="5" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-3' />
                                <input type="button" value="6" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-2' />
                                <input type="button" value="+" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-3 ' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-2">
                                <input type="button" value="1" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-2' />
                                <input type="button" value="2" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-3' />
                                <input type="button" value="3" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-2' />
                                <input type="button" value="-" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-3 px-2' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-2">
                                <input type="button" value="00" onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-2' />
                                <input type="button" value="0"  onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-2' />
                                <input type="button" value="/"  onClick={e=>setVal(val + e.target.value)} className='mb-1 mx-2 px-2' />
                                <input type="button" value="="  onClick={e=>setVal(eval(val))} className='mb-1 mx-3' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
