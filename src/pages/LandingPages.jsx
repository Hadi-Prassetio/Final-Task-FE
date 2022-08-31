import React from "react";
import NavAuth from "../components/NavAuth";
import { Container, Card, Col, Row } from "react-bootstrap";
import Landing from "../assets/Jumbotron.png";
import Products from "../datadummies/Products.jsx";
import convertRupiah from "rupiah-format";
import { useNavigate } from "react-router-dom";

export default function LandingPages() {
  const navigate = useNavigate();
  const movetoDetail = (id) => {
    navigate("/product/" + id);
  };

  return (
    <div>
      <NavAuth />
      <Container>
        <div>
          <img src={Landing} alt='' className='mt-5' />
        </div>
        <Row className='mt-5 mb-5'>
          {Products.map((item, index) => {
            return (
              <Col sm={3}>
                <div>
                  <Card
                    key={index}
                    style={{
                      width: "15rem",
                      backgroundColor: "#F6E6DA",
                      color: "#613D2B",
                      cursor: "pointer",
                    }}
                    onClick={() => movetoDetail(index)}>
                    <Card.Img variant='top' src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <p>{convertRupiah.convert(item.price)}</p>
                      <p>stock: {item.stock}</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
