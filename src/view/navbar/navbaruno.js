import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';


function Navbaruno() {

  function scrollToFooter() {
    const footer = document.querySelector("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">




          <Nav className="me-auto">
            <Nav.Link href="" >Home</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#pricing" onClick={scrollToFooter}>Footer</Nav.Link>


            <NavDropdown title="Mas " id="collapsible-nav-dropdown " className="dropnav">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>




          </Nav>



          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaruno;
