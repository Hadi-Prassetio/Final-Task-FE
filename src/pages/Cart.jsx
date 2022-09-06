import { React, useEffect, useState } from "react";
import { API } from "../config/api";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { Container, Col, Row } from "react-bootstrap";
import convertRupiah from "rupiah-format";
import NavUser from "../components/NavUser";
import Delete from "../assets/delete.png";

export default function Cart() {
  let navigate = useNavigate();
  const handleClickplus = async (qty, id, price) => {
    // Counter state is incremented
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const newQty = qty + 1;
    const newTotal = price * newQty;
    const req = JSON.stringify({
      qty: newQty,
      sub_amount: newTotal,
    });
    await API.patch(`/cart/${id}`, req, config);
    refetch();
  };

  const handleClickmin = async (id, qty, price, sub_amount) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log(sub_amount);
    console.log(price);
    // Counter state is decremented
    if (qty === 1) {
      return;
    }
    const newQty = qty - 1;
    const newTotal = sub_amount - price * newQty;
    console.log(newTotal);
    const req = JSON.stringify({
      qty: newQty,
      sub_amount: newTotal * newQty,
    });
    await API.patch(`/cart/${id}`, req, config);
    refetch();
  };

  // Get data transaction by ID
  let { data: transaction, refetch } = useQuery("transCache", async () => {
    const response = await API.get("/transaction-status");
    return response.data.data;
  });
  // const [transactions, setTransactions] = useState([]);
  // useEffect(() => {
  //   const transactions = async () => {
  //     try {
  //       const response = await API.get("/transaction-status");
  //       setTransactions(response.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   transactions();
  // }, [setTransactions]);

  let handleDelete = async (id) => {
    await API.delete(`cart/${id}`);
    refetch();
  };

  // total Payment
  let Total = transaction?.carts?.reduce((a, b) => {
    return a + b.sub_amount;
  }, 0);
  let TotalQTY = transaction?.carts?.reduce((a, b) => {
    return a + b.qty;
  }, 0);

  // pay Handler
  const form = {
    status: "success",
    total: Total,
  };

  const handleSubmit = useMutation(async (e) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    // Insert transaction data
    const body = JSON.stringify(form);

    const response = await API.patch("/transactionID", body, config);
    // navigate("/profile");

    console.log(response);
  });

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
                  {transaction?.carts.map((item, index) => (
                    <Row style={{ fontSize: 14 }}>
                      <Col md={8} className='d-flex'>
                        <div
                          style={{
                            width: 80,
                            height: 80,
                            marginRight: 13,
                            marginBottom: 29,
                          }}>
                          <img
                            src={
                              "http://localhost:5000/uploads/" +
                              item.product?.image
                            }
                            alt='img'
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div>
                          <p style={{ fontWeight: 900 }}>
                            {item?.product?.name}
                          </p>
                          <button
                            className='none'
                            onClick={() =>
                              handleClickmin(
                                item.id,
                                item.qty,
                                item.product.price,
                                item.sub_amount
                              )
                            }>
                            -
                          </button>
                          <p className='d-inline mx-2 none'>{item?.qty}</p>
                          <button
                            className='none'
                            onClick={() =>
                              handleClickplus(
                                item.qty,
                                item.id,
                                item.product.price
                              )
                            }>
                            +
                          </button>
                        </div>
                      </Col>
                      <Col
                        md={4}
                        className='justify-content-end'
                        style={{ textAlign: "end" }}>
                        <p>{convertRupiah.convert(item?.sub_amount)}</p>
                        <img
                          src={Delete}
                          alt='img'
                          style={{ cursor: "pointer", width: 16, height: 20 }}
                          onClick={() => handleDelete(item?.id)}
                        />
                      </Col>
                    </Row>
                  ))}
                  <hr />
                </Col>
                <Col md={4}>
                  <hr />
                  <Row>
                    <Col>
                      <p>Subtotal</p>
                      <p>QTY</p>
                    </Col>
                    <Col className='text-end'>
                      <p>{convertRupiah.convert(Total)}</p>
                      <p>{TotalQTY}</p>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <p>Total</p>
                    </Col>
                    <Col className='text-end'>
                      <p>{convertRupiah.convert(Total)}</p>
                    </Col>
                  </Row>
                  <button
                    style={{
                      width: "100%",
                      backgroundColor: "#613D2B",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                    className='submit'
                    type='submit'
                    onClick={(e) => handleSubmit.mutate(e)}>
                    {" "}
                    PAY
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
