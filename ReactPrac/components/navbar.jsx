import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-light'>Home</Nav.Link>
            <NavDropdown title="Main Content" id="basic-nav-dropdown" className='text-light'>
              <NavDropdown.Item href="/">React States</NavDropdown.Item>
              <NavDropdown.Item href="/props&destructuring">Props & Destructuring</NavDropdown.Item>
              <NavDropdown.Item href="/form">Form</NavDropdown.Item>
              <NavDropdown.Item href="/conditionalRendering">Conditional Rendering</NavDropdown.Item>
              <NavDropdown.Item href="/CondiRend">Conditional Rendering More</NavDropdown.Item>
              <NavDropdown.Item href="/UseStatehook">UseStatehook</NavDropdown.Item>
              <NavDropdown.Item href="/UseEffectHook">UseEffectHook</NavDropdown.Item>
              <NavDropdown.Item href="/UseRefHook">UseRefHook & API call</NavDropdown.Item>
              <NavDropdown.Item href="/ReactRouter">React Router</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mini Projects" id="basic-nav-dropdown" className='text-light'>
              <NavDropdown.Item href="/todos">Todos List</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;