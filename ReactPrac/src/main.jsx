import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavigationBar from '../components/navbar.jsx'



import { createBrowserRouter } from "react-router-dom";

import RouterHome from "../components/ReactRouter/RouterHome";
import Login from "../components/ReactRouter/Login";
import About from "../components/ReactRouter/About";
import User from "../components/ReactRouter/User";


// REACTROUTER
const router = createBrowserRouter([
  {
      path: "/routerhome",
      element: <RouterHome />
  },
  {
      path: "/routerlogin",
      element: <Login />
  },
  {
      path: "/routerabout",
      element: <About />
  },
  {
      path: "/routeruser",
      element: <User />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationBar />
    <App />
  </React.StrictMode>,
)
