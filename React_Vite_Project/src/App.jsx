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

  return (
    <div className='mx-2'>
      <BrowserRouter>
       <Navigationbar />
        <Routes>
          <Route path="/" element={<ButtonClick />} />
          <Route path="/nestedcomponent" element={<NestedComponent />} />
          <Route path="/props" element={<Props secretCode="4987284jkjnsc" agentname="Agent Vinood" name='Ishita Gautam' age='19' other={{ address: 'Lucknow', mobile: '1000' }} calcsum = {sum} />} />
          <Route path="/form" element={<Form />} />
          <Route path="/conditionalRendering" element={<ConditionalRendering />} />
          <Route path="/hooks" element={<Hooks nwCount={newCount} nwData={newData}/>} />
          <Route path="/hooks1" element={<Hooks1/>} />
          {/* <Route path="/" element={</>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
