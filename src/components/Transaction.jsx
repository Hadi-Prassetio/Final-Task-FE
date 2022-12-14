import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Barcode from "../assets/barcode.png";
import Logo from "../assets/Icon.png";
import convertRupiah from "rupiah-format";
import empty from "../assets/empty.png";
import { API } from "../config/api";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const transactions = async () => {
      try {
        const response = await API.get("/transaction1");
        setTransactions(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    transactions();
  }, [setTransactions]);

  console.log(transactions);
  return (
    <div>
      {transactions?.lenght != 0 ? (
        <div style={{ width: "600px", height: "300px", overflow: "scroll" }}>
          {transactions?.map((items, index) => (
            <Container
              className='p-4 overflow-auto rounded-4 mb-2 '
              style={{ backgroundColor: "#F6DADA" }}>
              <Row>
                {items?.carts?.map((cart, idx) => (
                  <Col md={8}>
                    <Row className='mb-3'>
                      <Col sm={4}>
                        <img
                          src={
                            "http://localhost:5000/uploads/" +
                            cart?.product?.image
                          }
                          alt=''
                          style={{ width: 100 }}
                        />
                      </Col>
                      <Col sm={8}>
                        <div>
                          <h5 style={{ color: "#613D2B" }}>
                            {cart?.product?.name}
                          </h5>
                          <p>Qty : {cart?.qty}</p>
                        </div>
                        <div className='mt-1' style={{ fontSize: 15 }}>
                          <p className='my-1'>
                            Price : {convertRupiah.convert(cart?.sub_amount)}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                ))}

                <Col md={4} className='text-center'>
                  <img className='w-50' src={Logo} alt='' />
                  <br />
                  <br />
                  <img src={Barcode} alt='' />
                  <div
                    className='text-center w-75 m-auto my-3 fw-semibold'
                    style={{
                      backgroundColor: "rgba(0, 209, 255, .3)",
                      color: "#00D1FF",
                    }}>
                    {items?.status}
                  </div>
                  <div className='text-center w-75 m-auto my-3 fw-normal'>
                    Subtotal: {convertRupiah.convert(items?.total)}
                  </div>
                </Col>
              </Row>
            </Container>
          ))}
        </div>
      ) : (
        <div className='text-center'>
          <img src={empty} className='img-fluid' style={{ width: "40%" }} />
          <div className='text-primer fw-bold'>
            No data Cart, let's Shopping
          </div>
        </div>
      )}
    </div>
  );
}
