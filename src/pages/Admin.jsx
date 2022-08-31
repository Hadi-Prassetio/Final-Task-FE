import React from "react";
import NavAdmin from "../components/NavAdmin";
import { Container, Table } from "react-bootstrap";

export default function Admin() {
  return (
    <div>
      <NavAdmin />
      <div>
        <Container className='mt-5'>
          <div>
            <h1 className='mb-5' style={{ color: "#613D2B" }}>
              Income Transaction
            </h1>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Post Code</th>
                <th>Product Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Rojali</td>
                <td>Logue Town</td>
                <td>54302</td>
                <td>One Piece Bean</td>
                <td>Success</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
}
