import React from "react";
import { Button, Form } from "react-bootstrap";

function RegisterAuth() {
  return (
    <div>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            id='fullName'
            placeholder='FullName'
            name='fullName'
            // value={fullName}
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
            // value={email}
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
            // value={password}
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

export default RegisterAuth;
