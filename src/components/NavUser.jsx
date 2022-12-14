import React, { useContext } from "react";
import { Navbar, Container, Dropdown, Col, Row } from "react-bootstrap";
import Logo from "../assets/Icon.png";
import User from "../assets/user.png";
import Profile from "../assets/profile.png";
import LogOut from "../assets/logout.png";
import Cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";
import { Usercontext } from "../context/userContext";

export default function NavUser() {
  const navigate = useNavigate();

  const [state, dispatch] = useContext(Usercontext);

  const handleLogout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  const movetoHome = () => {
    navigate("/");
  };
  const movetoCart = () => {
    navigate("/cart");
  };
  const movetoProfile = () => {
    navigate("/profile");
  };
  return (
    <Navbar
      bg='light'
      className='d-flex justify-content-between sticky-top'
      style={{ boxShadow: "0px 5px 5px #888888" }}>
      <Container className='d-flex justify-content-beetween'>
        <div>
          <img src={Logo} onClick={movetoHome} />
        </div>
        <div>
          <Row>
            <Col>
              <img
                src={Cart}
                alt=''
                className='me-3'
                style={{ width: "35px", marginTop: "15px" }}
                onClick={movetoCart}
              />
            </Col>
            <Col>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    variant='none'
                    id='dropdown-basic'
                    style={{ border: "none" }}>
                    <img
                      src={User}
                      alt=''
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <img src={Profile} alt='' />
                      <span onClick={movetoProfile}> Profile</span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item>
                      <img src={LogOut} alt='' />{" "}
                      <span onClick={handleLogout}>Log Out</span>
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
