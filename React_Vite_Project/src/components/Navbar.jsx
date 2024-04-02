// import React from 'react'
// // import { Link } from 'react-router-dom';

// export const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg bg-dark">
//             <div className="container-fluid">
//                 <a className="navbar-brand text-light" href="/">REACT</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                 Content
//                             </a>
//                             <ul className="dropdown-menu">
//                                 <li><a className="dropdown-item" href="/">Button</a></li>
//                                 <li><a className="dropdown-item" href="/nestedcomponent">Nested Components</a></li>
//                                 <li><a className="dropdown-item" href="/props">Props</a></li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigationbar() {
  return (
    //   bg-body-tertiary
    <Navbar expand="lg" className="text-light bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-light">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#link" className="text-light">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="text-light">
              <NavDropdown.Item href="/">Buttons & I/P Box Value</NavDropdown.Item>
              <NavDropdown.Item href="/nestedcomponent">Nested Components</NavDropdown.Item>
              <NavDropdown.Item href="/props">Props</NavDropdown.Item>
              <NavDropdown.Item href="/form">Form</NavDropdown.Item>
              <NavDropdown.Item href="/conditionalRendering">Conditional Rendering</NavDropdown.Item>
              <NavDropdown.Item href="/hooks">Hooks(useState/useEffect)</NavDropdown.Item>
              <NavDropdown.Item href="/hooks1">HooksMore(useEffect,useRef,useCallback)</NavDropdown.Item>
              <NavDropdown.Item href="/CustomHook">Custom Hook(currency converter)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;