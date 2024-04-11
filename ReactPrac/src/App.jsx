import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";


import ReactStates from '../components/reactStates';
import Props_destrtrng from '../components/props&destrtrng';
import Form from '../components/form';
import CondiRndrng from '../components/condiRndrng';
import CondiRend from  '../components/CondiRend_1';
import UseStatehook from '../components/UseStatehook';
import UseEffectHook from '../components/UseEffectHook';
import UseRefHook from '../components/UseRefHook';

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
          <Route path="/form" element={<Form/>} />
          <Route path="/conditionalRendering" element={<CondiRndrng/>} />
          <Route path="/CondiRend" element={<CondiRend/>} />
          <Route path="/UseStatehook" element={<UseStatehook/>} />
          <Route path="/UseEffectHook" element={<UseEffectHook/>} />
          <Route path="/UseRefHook" element={<UseRefHook/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
