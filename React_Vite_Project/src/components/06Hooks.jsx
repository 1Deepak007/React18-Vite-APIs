import React, { useState, useEffect } from 'react';
// import PropsWthFxnlComp from './PropsWthFxnlComp';   

//name of all hooks starts with 'use'  like 'useState','useEffect' etc....   use keywork is reserved fro hooks.
export default function Hooks(props) {
  //useState -> hook
  const [data, setData] = useState('DefaultValue')

  //useEffect
  React.useEffect(() => {
    // alert('UseEffect');
  });


  //----> useEffect on state
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.warn('UseEffect count :', count)
  });


  //useEffect with condition
  const [newdata,setnewData] = useState('default data');
  const [newcount,setnewCount] = useState(100);

  useEffect(()=>{
      console.warn("<h3>Useeffect Called on data</h3>");
      // alert('State Updated');
  },[newdata]);     // <== passed data as argument so usEffect will run only on data not on count

  useEffect(()=>{
      console.log('UseEffect called on count. Count : '+newcount);
  },[newcount]);   // <== passed data as argument so usEffect will run only on count not on data

  
  //USEEFFECT WITH PROPS
    useEffect(()=>{
      alert("UseEffect running on both 'count' and 'data' ");
  },[props.nwdata,props.nwcount]);


  return (
    <div>
      <h2 className='text-center text-decoration-underline'>useState</h2>
      <h4>{data}</h4>
      <button onClick={() => setData("Hello World")}>Click Me.</button>

      <h2 className='text-center text-decoration-underline'>useEffect</h2>
      <ul>
        <li>useEffect runs on every render.</li>
        <li>The useEffect hook is used to handle the side effects of a component.</li>
        <li>The useEffect Hook allows you to perform side effects in your components.</li>
        <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li>
        <li>useEffect accepts two arguments. The second argument is optional.
          useEffect (function, dependency);
        </li>
        <li>We can use  multiple UseEffects</li>
      </ul>

      <h4>useEffect in Rect {newcount}</h4>
      <button onClick={() => setCount(newcount + 1)}>Update Counter</button>
      <hr />

      <h2 className='text-decoration-underline'>useEffect With Condition</h2>
      <h4>Count : {newcount}</h4>
            <h4>Data : {newdata}</h4>
            <button onClick={()=>setCount(newcount+1)}>Update Count</button>
            <button onClick={()=>setData('React')}>Update Data</button>



      <hr/>
      <h2 className='text-decoration-underline'>useEffect With Props</h2>
{/* USING useEffect with props */}
<h4>Props : {props.nwCount}</h4>    {/* props passed from App.js */}
            <h4>Props : {props.nwData}</h4>     {/* props passed from App.js */}



      <hr />
      <br /><br />
      <h4>Hooks : we can use some features of class component in functional component via Hooks.</h4>
      <h5> Hooks are functions that enable functional components to have state and lifecycle features, which were traditionally associated with class components.</h5>
      <h6>All name of all hooks starts with 'use'  like 'useState','useEffect','useContext','useReducer' etc....   use keywork is reserved fro hooks.</h6>
      <hr />
    </div>
  )
}

