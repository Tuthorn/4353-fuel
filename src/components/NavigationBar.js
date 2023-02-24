import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="Landing">FuelQuoter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Register">Sign Up</Nav.Link>
            <Nav.Link href="FuelHistory">FuelHistory</Nav.Link>
            <Nav.Link href="Dashboard">Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;