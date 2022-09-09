import React from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import Logo from "../assets/Icon.png";
import AuthModal from "./modal/AuthModal";

export default function NavAuth() {
  return (
    <Navbar
      bg='light'
      className='d-flex justify-content-between sticky-top'
      style={{ boxShadow: "0px 5px 5px #888888" }}>
      <Container className='d-flex justify-content-beetween'>
        <Navbar.Brand>
          <img src={Logo} />
        </Navbar.Brand>
        <div>
          <AuthModal />
        </div>
      </Container>
    </Navbar>
  );
}
