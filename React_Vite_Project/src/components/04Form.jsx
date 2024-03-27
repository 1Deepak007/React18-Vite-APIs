import React,{useState} from 'react'

export default function Form() {

    const[name,setName] = useState("");
    const[tnc,setTnc] = useState(false);
    const[interest,setInterest] = useState("");
    function getFormData(e){
        console.warn(name,tnc,interest)
        e.preventDefault()              // prevent default loading of form when submit form
    }    

  return (
    <>
        <h3 className='text-center'>Handle form in React</h3>
        <form onSubmit={getFormData}>

            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name'/>     <br /><br />
            
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select Option</option>
                <option>Marvel</option>
                <option>DC</option>
            </select>                                   <br /><br />
            
            <input onChange={(e)=>setTnc(e.target.checked)} type="checkbox" /><span> Accept terms and conditions</span> <br /><br />
            
            <button type='submit'>Submit</button>  
            
            <p>check console for output</p>
        </form>
        <hr />
    </>
  )
}