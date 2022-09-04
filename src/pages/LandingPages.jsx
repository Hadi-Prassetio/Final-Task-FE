import React, { useState, useContext, useEffect } from "react";
import NavAuth from "../components/NavAuth";
import { Container, Card, Col, Row } from "react-bootstrap";
import Landing from "../assets/Jumbotron.png";
import convertRupiah from "rupiah-format";
import { useNavigate, Link } from "react-router-dom";
import { API } from "../config/api";
import { Usercontext } from "../context/userContext";
import NavUser from "../components/NavUser";

export default function LandingPages() {
  const [state, dispatch] = useContext(Usercontext);

  const [dataproduct, setDataproduct] = useState([]);

  useEffect(() => {
    const dataproduct = async () => {
      try {
        const response = await API.get("/products");
        setDataproduct(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataproduct();
  }, [setDataproduct]);

  const navigate = useNavigate();

  let subscribe = state.isLogin;
  console.log(subscribe);

  console.log(state);

  return (
    <div>
      {subscribe ? <NavUser /> : <NavAuth />}

      <Container>
        <div>
          <img src={Landing} alt='' className='mt-5' />
        </div>
        <Row className='mt-5 mb-5'>
          {dataproduct.map((item, index) => (
            <Col sm={3}>
              <div>
                <Card
                  key={index}
                  className='mt-4'
                  style={{
                    width: "15rem",
                  }}>
                  <Link
                    to={state.isLogin ? "/product/" + item.id : "/"}
                    className=' text-decoration-none'
                    style={{
                      backgroundColor: "#F6E6DA",
                      color: "#613D2B",
                      cursor: "pointer",
                    }}>
                    <Card.Img variant='top' src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <p>{convertRupiah.convert(item.price)}</p>
                      <p>stock: {item.stock}</p>
                    </Card.Body>
                  </Link>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
