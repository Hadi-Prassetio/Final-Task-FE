import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import NavUser from "../components/NavUser";

export default function Cart() {
  return (
    <div>
      {" "}
      <div>
        <NavUser />
        <div className='mt-5'>
          <Container>
            <div className='ms-5 mt-3'>
              <h1 style={{ color: "#613D2B" }}>My Cart</h1>
              <Row>
                <p className='mt-5' style={{ color: "#613D2B" }}>
                  Review Your Order
                </p>
                <Col md={8}>
                  <hr />

                  <hr />
                </Col>
                <Col md={4}>
                  <hr />
                  <Col className='d-flex justify-content-between'>
                    <p>Sub Total</p>
                    <p>Rp.50.000</p>
                  </Col>
                  <Col className='d-flex justify-content-between'>
                    <p>Qty</p>
                    <p>50</p>
                  </Col>
                  <hr />
                  <Col className='d-flex justify-content-between'>
                    <p>Total</p>
                    <p>Rp.50.000</p>
                  </Col>
                  <button
                    type='button'
                    className='pt-2 pb-2'
                    style={{
                      width: "100%",
                      color: "white",
                      backgroundColor: "#613D2B",
                      borderColor: "#613D2B",
                      borderRadius: "5px",
                    }}>
                    Pay
                  </button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div
          className='modal fade'
          id='thanks-for-order'
          tabindex='-1'
          role='dialog'
          aria-labelledby='exampleModalCenterTitle'
          aria-hidden='true'></div>
      </div>
    </div>
  );
}
