import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { Link, RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {ReactDom} from 'react';
import Layout from './Components/Layout'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/Aboutus'
import ContactUs from './Components/Contact/ContactUs'
import User from './Components/User';
import Github, { githubInfoLoader } from './Components/Github/Github';


// ROUTING
// const router = createBrowserRouter([
//     { 
//         path: '/',
//         element: <Layout />, 
//         children: [
//             {path:"/",element:<Home />},
//             {path:"about",element:<About />},
//             {path:"contact",element:<ContactUs />}
//         ]
//     },
// ]);

// OR 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<ContactUs/>}/>
      {/* sending id and receiving on User.jsx */}
      <Route path="user/:userid" element={<User/>}/>
      {/* Loader : we can make API calls from loader. As we bring cursour on Github button it wl strt ftchng data from API.  */}
      {/* <Route path="github" loader={({request})=>fetch()} element={<Github/>}/> */}
      <Route path="github" 
             loader={githubInfoLoader} 
             element={<Github/>}/>
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

