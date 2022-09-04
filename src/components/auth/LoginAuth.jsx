import React, { useState, useContext } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Usercontext } from "../../context/userContext";
import { API } from "../../config/api";

function LoginAuth() {
  const [state, dispatch] = useContext(Usercontext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const [message, setMessage] = useState(null);

  const Navigate = useNavigate();

  console.log(state);

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

      // Data body

      // Configuration
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const Body = JSON.stringify(form);

      // Insert data for login process
      const response = await API.post("/login", Body, config);

      console.log(response.data.data);

      // Checking process
      if (response?.status == 200) {
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        // Status check
        if (response.data.data.status == "admin") {
          Navigate("/admin");
        } else {
          Navigate("/");
        }
        const alert = (
          <Alert variant='success' className='py-1'>
            Login success
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant='danger' className='py-1'>
          Login failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  console.log(state.isLogin);

  return (
    <div>
      {message && message}
      <Form onSubmit={(e) => handleSubmit.mutate(e)}>
        <Form.Group className='mb-3'>
          <Form.Control
            type='email'
            id='email'
            placeholder='Email'
            name='email'
            value={email}
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
            value={password}
            onChange={handleChange}
            style={{ borderColor: "#613D2B" }}
            autoFocus
          />
        </Form.Group>

        <Button
          type='submit'
          style={{ width: "100%", backgroundColor: "#613D2B" }}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginAuth;
