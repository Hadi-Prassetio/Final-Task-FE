import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Table, Button } from "react-bootstrap";
import Product1 from "../assets/product1.png";
import convertRupiah from "rupiah-format";
import Products from "../datadummies/Products";

import NavAdmin from "../components/NavAdmin";

function ListProduct() {
  return (
    <div>
      <NavAdmin />
      <div className='m-5'>
        <Table striped hover size='lg' variant='light'>
          <thead>
            <tr>
              <th width='1%' className='text-center'>
                No
              </th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          {Products.map((item, index) => {
            return (
              <tbody>
                <tr>
                  <td className='align-middle text-center'>1</td>
                  <td className='align-middle'>
                    <img
                      src={item.image}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td className='align-middle'>{item.name}</td>

                  <td className='align-middle'>
                    {convertRupiah.convert(item.price)}
                  </td>
                  <td className='align-middle'>{item.stock}</td>
                  <td className='align-middle'></td>
                  <td className='align-middle'>
                    <Button
                      className='btn-sm btn-success me-2'
                      style={{ width: "135px" }}>
                      Edit
                    </Button>
                    <Button
                      className='btn-sm btn-danger'
                      style={{ width: "135px" }}>
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default ListProduct;
