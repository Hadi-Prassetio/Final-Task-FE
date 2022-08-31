import React from "react";
import { Navbar, Container, Dropdown, Col, Row } from "react-bootstrap";
import Logo from "../assets/Icon.png";
import User from "../assets/user.png";
import Add from "../assets/beans.png";
import LogOut from "../assets/logout.png";
import { useNavigate } from "react-router-dom";

export default function NavAdmin() {
  const Navigate = useNavigate();

  const movetoAddProduct = () => {
    Navigate("/add-product");
  };

  const movetoAdmin = () => {
    Navigate("/admin");
  };

  const movetoList = () => {
    Navigate("/list-products");
  };

  return (
    <Navbar
      bg='light'
      className='d-flex justify-content-beetween sticky-top'
      style={{ boxShadow: "0px 5px 5px #888888" }}>
      <Container className='d-flex justify-content-beetween'>
        <div>
          <img src={Logo} onClick={movetoAdmin} />
        </div>
        <div>
          <Row>
            <Col>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    variant='none'
                    id='dropdown-basic'
                    style={{ border: "none" }}>
                    <img
                      src={User}
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <img src={Add} alt='' onClick={movetoAddProduct} /> Add
                      Product
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item>
                      <img src={Add} alt='' onClick={movetoList} /> List Product
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item>
                      <img src={LogOut} alt='' /> Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Navbar>
  );
}
