import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginAuth from "../auth/LoginAuth";
import RegisterAuth from "../auth/RegisterAuth";

export default function AuthModal() {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  function SwitchLogin() {
    setShow(false);
    setShowRegister(true);
  }
  function SwitchRegister() {
    setShowRegister(false);
    setShow(true);
  }

  return (
    <>
      <Button
        className='me-3'
        style={{
          color: "#613D2B",
          backgroundColor: "white",
          borderColor: "#613D2B",
          padding: "5px 25px",
        }}
        onClick={handleShow}>
        Login
      </Button>
      <Button
        style={{
          color: "white",
          backgroundColor: "#613D2B",
          borderColor: "#613D2B",
          padding: "5px 25px",
        }}
        onClick={handleShowRegister}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className='m-4'>
          <Modal.Title>
            <h1 className='mb-4'>Login</h1>
          </Modal.Title>
          <LoginAuth />

          <p className='mt-4' style={{ color: "black" }}>
            Don't have an account ? click{" "}
            <a onClick={SwitchLogin} style={{ cursor: "pointer" }}>
              <b>Here</b>
            </a>
          </p>
        </div>
      </Modal>

      <Modal show={showRegister} onHide={handleCloseRegister}>
        <div className='m-4'>
          <Modal.Title>
            <h1 className='mb-4'>Register</h1>
          </Modal.Title>
          <RegisterAuth />

          <p className='mt-4' style={{ color: "black" }}>
            Already have an account? click{" "}
            <a onClick={SwitchRegister} style={{ cursor: "pointer" }}>
              <b>Here</b>
            </a>
          </p>
        </div>
      </Modal>
    </>
  );
}
