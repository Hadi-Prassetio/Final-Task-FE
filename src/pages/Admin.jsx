import React, { useEffect, useState } from "react";
import NavAdmin from "../components/NavAdmin";
import { Container, Table } from "react-bootstrap";
import convertRupiah from "rupiah-format";
import { API } from "../config/api";
import ListUsers from "../components/modal/ListUsers";

export default function Admin() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const transactions = async () => {
      try {
        const response = await API.get("/transactions");
        setTransactions(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    transactions();
  }, [setTransactions]);

  return (
    <div>
      <NavAdmin />
      <div>
        <Container className='mt-5'>
          <div className='d-flex justify-content-between '>
            <h1 className='mb-5' style={{ color: "#613D2B" }}>
              Income Transaction
            </h1>
            <ListUsers />
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                {/* <th>Address</th> */}
                <th>Id Transaction</th>
                <th>Total Transaction</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.user.fullname}</td>
                  {/* <td>{item?.user.profile?.address}</td> */}
                  <td>{item?.id}</td>
                  <td>{convertRupiah.convert(item?.total)}</td>
                  <td>{item?.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
}
