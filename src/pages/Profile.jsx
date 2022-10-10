import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import NavUser from "../components/NavUser";
import User from "../assets/user.png";
import { Usercontext } from "../context/userContext";
import Transaction from "../components/Transaction";

export default function Profile() {
  const [user, setUser] = React.useContext(Usercontext);

  return (
    <div>
      <NavUser />
      <Container className='bodyProfile p-5 ps-5'>
        <Row className='ps-5'>
          <Col md={6} className='mt-3'>
            <h2 className='myprofile mb-4' style={{ color: "#613D2B" }}>
              My Profile
            </h2>
            <Row>
              <div>
                <Row>
                  <Col className='' sm={6}>
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                      }}
                      src={User}
                    />
                  </Col>
                  <Col sm={6}>
                    <div>
                      <h3 style={{ color: "#613D2B" }}>Full Name</h3>
                      <p>{user.user.fullname}</p>
                    </div>

                    <div className='mt-4'>
                      <h3 style={{ color: "#613D2B" }}>Email</h3>
                      <p>{user.user.email}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
          <Col md={6} className='mt-3'>
            <h2 className='mb-4' style={{ color: "#613D2B" }}>
              My Transaction
            </h2>
            <div>
              <Transaction />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
