import React from "react";
import { Col, Row } from "react-bootstrap";
import Barcode from "../assets/barcode.png";
import Logo from "../assets/Icon.png";
import Product1 from "../assets/product1.png";
import convertRupiah from "rupiah-format";

export default function Transaction() {
  return (
    <Row
      style={{
        backgroundColor: "rgb(190,190,190)",
        borderRadius: "10px",
      }}>
      <Col md={9}>
        <Row className='p-2'>
          <Col xs={4} md={4}>
            <img
              className='mt-3'
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
              src={Product1}
            />
          </Col>
          <Col xs={6} md={8}>
            <div>
              <h4 style={{ color: "#613D2B" }}>Kopi Rumusa</h4>
            </div>
            <div>
              <span>
                <b style={{ color: "#613D2B" }}>Monday</b>
              </span>
              <span>, 23 Agustus 2022</span>
            </div>
            <div className='mt-2'>
              <span>Price : </span>
              <span>Rp. 500.000 </span>
            </div>
            <div className='mt-2'>
              <span>Qty : </span>
              <span>2 </span>
            </div>
            <div className='mt-2'>
              <span>
                <b style={{ color: "#613D2B" }}>Sub Total: </b>
              </span>
              <span>Rp. 1.000.000</span>
            </div>
          </Col>
        </Row>
      </Col>
      <Col md={3}>
        <img
          style={{ width: "75%", height: "auto" }}
          className='ms-2'
          src={Logo}
        />
        <img
          className='mt-4'
          style={{ width: "100%", height: "auto" }}
          src={Barcode}
        />
        <p className='statusTransaction ms-2 mt-2'>On the Way</p>
      </Col>
    </Row>
  );
}
