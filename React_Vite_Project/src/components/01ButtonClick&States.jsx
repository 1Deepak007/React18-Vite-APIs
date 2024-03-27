import React from 'react';
import { useState } from 'react';

export default function ButtonClick() {
    const [count, setCount] = useState(0)
    function ClkMe() {
        alert('On Click Event Occured');
      }
    let data = "Deepak Gautam"
    
    const[num,setnum] = useState(0);
    function updatenum(){setnum(num+1)}

    const[name, setName] = useState('Nobita');
    function updatename() {setName('Doremon')}


    const [value, setValue] = useState(null);
    function getData(val) {
        setValue(val.target.value)
    }
    const [ndata,setdata] = useState(null);
    const [prnt,setprnt] = useState(false);
    function getDta(valu) {
        setdata(valu.target.value)
        setprnt(false)       // to make all txt reset whn agn start tyipng
    }


    const [status, setstatus] = useState(true);



    return (
        <>
            <h4 className='text-decoration-underline'>ButtonClick</h4>
            <h6>{count}</h6>
            <button onClick={() => setCount((count) => count + 1)} className='btn btn-primary'>
                count is {count}
            </button>                                           &nbsp;

            {/* Simple Function */}
            <button onClick={ClkMe}>Click Me!</button>          &nbsp;

            {/* ARROW FUNCTION */}
            <button onClick={()=>alert('Arrow Function')}  className='btn btn-success'>Arrow Fxn</button>       &nbsp;  
            <button onClick={()=>alert('Hello '+data)}  className='btn btn-danger'>Hiiiii</button>
            <p>Using Variable : Hello {data}</p>        
            <hr />


            {/* Use State in functional component using hooks(useState) */}
            <h4 className='text-decoration-underline'>State with Functional Component</h4>

            <p>{num}</p>
            <button onClick={updatenum}>Update Number</button>   

            <p>{name}</p>
            <button onClick={updatename}>Update Name</button>  
            
            <hr />


            {/* Input Box */}
            <h4 className='text-decoration-underline'>Get Input Box Value</h4>
            <p>{value}</p>
            <input type="text" onChange={getData} />

            { prnt ?  <p>{ndata}</p> : null}
            <input type="text" onChange={getDta} />
            <button onClick={()=>setprnt(true)}>Print value</button>
        
            <hr />

            <h4 className='text-decoration-underline'>Hide/show or Toggle element/tag using buttons</h4>

            {   status ? <p>Toggle button</p> : null   }
            <button onClick={()=>setstatus(false)} className='btn btn-success'> Hide </button>      &nbsp;&nbsp;

            <button onClick={()=>setstatus(true)} className='btn btn-success'> Show </button>       &nbsp;&nbsp;            
            
            <button onClick={()=>setstatus(!status)} className='btn btn-success'> Toggle </button>  &nbsp;&nbsp;



        </>
    )
}
