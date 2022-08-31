import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Pin from "../assets/pin.png";
import { useState } from "react";
import NavAdmin from "../components/NavAdmin";
import Product1 from "../assets/product1.png";

function AddProduct() {
  return (
    <div>
      <NavAdmin />
      <div>
        <Container className='mt-5 mb-5'>
          <Row>
            <Col md={7} className=''>
              <h1 className='mb-5' style={{ color: "#613D2B" }}>
                Product
              </h1>
              <form>
                <Col>
                  <input
                    className='mb-5 pt-2 pb-2 ps-1'
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Name Product'
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      borderColor: "#613D2B",
                      backgroundColor: "#DCDCDC",
                    }}
                  />
                </Col>
                <Col>
                  <input
                    className='mb-5 pt-2 pb-2 ps-1'
                    type='text'
                    placeholder='Stock'
                    name='stock'
                    id='stock'
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      borderColor: "#613D2B",
                      backgroundColor: "#DCDCDC",
                    }}
                  />
                </Col>
                <Col>
                  <input
                    className='mb-5 pt-2 pb-2 ps-1'
                    type='text'
                    placeholder='Price'
                    name='price'
                    id='price'
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      borderColor: "#613D2B",
                      backgroundColor: "#DCDCDC",
                    }}
                  />
                </Col>
                <Col>
                  <textarea
                    className='mb-5 pt-2 pb-2 ps-1'
                    placeholder='Description'
                    name='description'
                    id='description'
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      border: "2px solid #613D2B",
                      backgroundColor: "#DCDCDC",
                    }}></textarea>
                </Col>
                <Col>
                  <label
                    className='mb-5 pt-2 pb-2 ps-1 pe-1 d-flex justify-content-between align-item-center'
                    htmlFor='image'
                    style={{
                      width: "50%",
                      borderRadius: "5px",
                      border: "2px solid #613D2B",
                      color: "#757575",
                      backgroundColor: "#DCDCDC",
                    }}>
                    File
                    <img src={Pin} alt='' />
                  </label>
                  <input
                    className='mb-5 pt-2 pb-2 ps-1'
                    type='file'
                    id='image'
                    placeholder='Photo Product'
                    name='image'
                    hidden
                  />
                </Col>
                <Col className='d-flex justify-content-center'>
                  <button
                    className='mb-5 pt-2 pb-2'
                    type='submit'
                    style={{
                      width: "60%",
                      borderRadius: "5px",
                      backgroundColor: "#613D2B",
                      color: "white",
                      borderColor: "#613D2B",
                    }}>
                    Add Product
                  </button>
                </Col>
              </form>
            </Col>
            <Col md={5}>
              <img
                src={Product1}
                style={{ width: "100%", borderRadius: "5px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AddProduct;
