import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { API } from "../../config/api";

function RegisterAuth() {
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const Navigate = useNavigate();

  const { fullname, email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(form);

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/register", body, config);

      console.log(response);

      if (response.data.status === "success") {
        // const alert = (
        //   <Alert variant='success' className='py-1'>
        //     Register Success, Silakan Login
        //   </Alert>
        // );
        setMessage(alert);
        setForm({
          fullname: "",
          email: "",
          password: "",
        });
      } else {
        const alert = (
          <Alert variant='success' className='py-1'>
            Register Success, Silakan Login
          </Alert>
        );
        setMessage(alert);
      }
      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant='danger' className='py-1'>
          Failed Register
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <div>
      {message && message}
      <Form onSubmit={(e) => handleSubmit.mutate(e)}>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            id='fullName'
            placeholder='FullName'
            name='fullName'
            onChange={handleChange}
            style={{ borderColor: "#613D2B" }}
            autoFocus
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            type='email'
            id='email'
            placeholder='Email'
            name='email'
            onChange={handleChange}
            style={{ borderColor: "#613D2B" }}
            autoFocus
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            type='password'
            id='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            style={{ borderColor: "#613D2B" }}
            autoFocus
          />
        </Form.Group>

        <Button
          type='submit'
          style={{ width: "100%", backgroundColor: "#613D2B" }}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default RegisterAuth;
