import React, { useContext } from "react";
import { userContext } from "../../App";
import Navbar from "react-bootstrap/Navbar";
import { Button, Form, FormControl, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [signInUser, setSignInUser] = useContext(userContext);

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/home">
          Fresh Vally
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/orders">
            Orders
          </Nav.Link>
          <Nav.Link as={Link} to="/admin">
            Admin
          </Nav.Link>
          <Nav.Link as={Link} to="/deals">
            Deals
          </Nav.Link>
        </Nav>
        <Button as={Link} to="login" variant="outline-light">
          {signInUser.f_name === undefined || null || ""
            ? "Login"
            : signInUser.f_name}
        </Button>
      </Navbar>
    </div>
  );
};

export default Header;
