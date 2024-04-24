import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Nav() {
  return (
      <nav>
        {/* Don't use <a></a> as it reloads the page. Use NavLink*/}
        {/* <a href="/routerhome"><li>Home</li></a> */}

        <div className="row" style={{backgroundColor:'lightblue', padding:'5px '}}>
          <div className="col">
            <NavLink to="/routerhome" className={(e)=>{return e.isActive?"red":"black"}}><li>Home</li></NavLink>
          </div>
          <div className="col">
            <NavLink to="/routerabout" className={(e)=>{return e.isActive?"red":"black"}}><li>About</li></NavLink>
          </div>
          <div className="col">
            <NavLink to="/routerlogin" className={(e)=>{return e.isActive?"red":"black"}}><li>Login</li></NavLink>
          </div>

          {/* <p>For going to user component which is dynamically routed, you need to pass username also. e.g. http://localhost:5173/routeruser/deepak </p> */}
          <div className="col">
            <NavLink to="/routeruser" className={(e)=>{return e.isActive?"red":"black"}}><li>User</li></NavLink>
          </div>
        </div>

      </nav>
  )
}
