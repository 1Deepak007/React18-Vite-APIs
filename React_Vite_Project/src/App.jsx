import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigationbar from './components/Navbar';
import ButtonClick from './components/01ButtonClick&States';
import NestedComponent from './components/02NestedComponent'
import Props from './components/03Props&Destructuting';
import Form from './components/04Form';
import ConditionalRendering from './components/05ConditionalRendering';
import Hooks from './components/06Hooks';
import Hooks1 from './components/07Hooks1';
import CustomHook from './components/08CustomHook';

function App() {

  function sum(args){
    let total = 0;
    for(let i=0; i<args.length; i++){
      total += args[i];
    }
    return total
  }

  const [newCount, setnewCount] = useState(0);
  const [newData, setnewData] = useState('Deepak');

  let myobj = {'a':'apple','b':'ball', 'c':'cat', 'd':'dog', 'e':'elephant'}


  return (
    <>
      <BrowserRouter>
       <Navigationbar />                      <div className='mx-2'>
        <Routes>
          <Route path="/" element={<ButtonClick />} />
          <Route path="/nestedcomponent" element={<NestedComponent />} />
          <Route path="/props" element={<Props secretCode="4987284jkjnsc" agentname="Agent Vinood" name='Ishita Gautam' age='19' other={{ address: 'Lucknow', mobile: '1000' }} calcsum = {sum} myobj={myobj}/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/conditionalRendering" element={<ConditionalRendering />} />
          <Route path="/hooks" element={<Hooks nwCount={newCount} nwData={newData}/>} />
          <Route path="/hooks1" element={<Hooks1/>} />
          <Route path="/CustomHook" element={<CustomHook/>} />
          <Route path="/ReactRouter" element={<ReactRouter/>} />
          {/* <Route path="/" element={</>} /> */}
        </Routes>                             </div>
      </BrowserRouter>
    </>
  )
}

export default App
