import React from "react";
import "./Navbarcss.css";
import { Navbar, FormControl, Nav, } from "react-bootstrap";

const Navbarc = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>
          {" "}
          <img
            src="Assests/Lapy.jpg"
            alt="Brand Logo"
            width="100px"
            height="100px"
          />
          Bhayya
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="Navbarc">Home</Nav.Link>
          <Nav.Link className="Navbarc">About</Nav.Link>
          <Nav.Link className="Navbarc">Contact</Nav.Link>
          <Nav.Link className="Navbarc">Services</Nav.Link>
          <Nav.Link className="Navbarc">Products</Nav.Link>
        </Nav>
        <div style={{marginLeft:"35rem"}}>
          <FormControl style={{ width: "20rem" }}  />
        </div>
        {/* <Button>Search</Button> */}
      </Navbar>
    </div>
  );
};

export default Navbarc;


 

