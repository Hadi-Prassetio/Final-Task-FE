import { React, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../datadummies/Products.jsx";
import NavUser from "../components/NavUser.jsx";
import { Container, Card, Col, Row } from "react-bootstrap";
import convertRupiah from "rupiah-format";

export default function DetailProduct() {
  const { id } = useParams();

  const [Detail] = useState(Products);

  const index = id;

  const response = Detail[index];

  return (
    <div>
      <NavUser />
      <Container className='m-5'>
        <Row>
          <Col sm={5}>
            <img src={response?.image} alt='' style={{ width: "90%" }} />
          </Col>
          <Col sm={7} className='mt-5'>
            <h1 style={{ color: "#613D2B" }}>{response?.name}</h1>
            <p style={{ color: "#974A4A" }}>stock: {response?.stock}</p>
            <p>{response?.detail}</p>
            <h4 className='text-end mt-4 mb-4' style={{ color: "#974A4A" }}>
              {convertRupiah.convert(response.price)}
            </h4>
            <button
              style={{
                width: "100%",
                backgroundColor: "#613D2B",
                color: "white",
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
              }}>
              Add Cart
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
