import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";


import ReactStates from '../components/reactStates';
import Props_destrtrng from '../components/props&destrtrng';

function App() {

  const sum = (n1,n2,n3,n4,n5) =>{
    return n1 + n2+ n3 + n4 + n5;
  }

  let ary = [101,102,103,104,105]
  
  let myobj = {'a':'apple','b':'ball', 'c':'cat', 'd':'dog', 'e':'elephant'}

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<ReactStates />} />
          <Route path="/props&destructuring" element= {<Props_destrtrng name="Deepak Gautam" location="Pune" summation={sum} myary={ary} myobj={myobj}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
