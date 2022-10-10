import React, { useState, useEffect } from "react";
import { Modal, Table } from "react-bootstrap";
import { API } from "../../config/api";

export default function ListUsers() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const users = async () => {
      try {
        const response = await API.get("/users");
        setUsers(response.data.data);
      } catch (error) {}
    };
    users();
  }, [setUsers]);

  return (
    <div>
      <button
        className='mb-5 pt-2 pb-2'
        type='submit'
        style={{
          width: "100%",
          borderRadius: "5px",
          backgroundColor: "#613D2B",
          color: "white",
          borderColor: "#613D2B",
        }}
        onClick={handleShow}>
        List Users
      </button>

      <Modal show={show} onHide={handleClose}>
        <div className='m-4'>
          <Modal.Title>
            <h1 className='mb-4'>User</h1>
          </Modal.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Email</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.email}</td>
                  <td>{item?.fullname}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Modal>
    </div>
  );
}
