import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from "../../Images/flipkart-plus_8d85f4.png"
import { BsFillCartCheckFill } from "react-icons/bs";

export default function HeaderNav() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" className='logo'/>
        </Navbar.Brand>
        <div className="serachBarNav">
        <Form className="d-flex serachBarNav">
            <Form.Control
              type="search"
              placeholder="Search for products, brands and more"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="link" className="btnSearch">
              <svg width="20" height="20" viewBox="0 0 17 18" class="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fill-rule="evenodd"><path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
            </Button>
          </Form>
        </div>
        <Button variant="link" className="loginBtn">Login</Button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="spNav">Become a Seller</Nav.Link>
            <Nav.Link href="#action2" className="spNav">More</Nav.Link>
            <Button className="cartBtn"><BsFillCartCheckFill /> Cart</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
