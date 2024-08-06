// src/pages/Register.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateFormValues, setFormErrors } from '../component/store/slices/formSlice';
import './Register.css';

const Register = () => {
  const dispatch = useDispatch();
  const { formValues, formErrors } = useSelector((state) => state.form);
  const [touched, setTouched] = useState({});

  const validateEmail = () => {
    const { email } = formValues;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    dispatch(setFormErrors({ email: !isValid }));
  };

  const validateUsername = () => {
    const { username } = formValues;
    const isValid = /^[^\s]+$/.test(username);
    dispatch(setFormErrors({ username: !isValid }));
  };

  const validatePassword = () => {
    const { password } = formValues;
    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    dispatch(setFormErrors({ password: !isValid }));
  };

  const validateConfirmPassword = () => {
    const { password, confirmPassword } = formValues;
    dispatch(setFormErrors({ confirmPassword: password !== confirmPassword }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormValues({ [name]: value }));
    
   
    setTouched(prev => ({ ...prev, [name]: true }));

    switch (name) {
      case "email":
        validateEmail();
        break;
      case "username":
        validateUsername();
        break;
      case "password":
        validatePassword();
        break;
      case "confirmPassword":
        validateConfirmPassword();
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formErrors).every(error => !error)) {
      console.log("Form submitted successfully");
    } else {
      console.log("Form failed to submit");
    }
  };

  useEffect(() => {

    if (Object.keys(touched).length > 0) {
      validateEmail();
      validateUsername();
      validatePassword();
      validateConfirmPassword();
    }
  }, [formValues]);

  return (
    <div className='register-container'>
      <h2 className='register-title'>Register Page</h2>
      <Form className='register-form' onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email address</Form.Label>
          <Form.Control
            type='email'
            id='email'
            name='email'
            required
            value={formValues.email}
            onChange={handleChange}
            isInvalid={touched.email && formErrors.email}
          />
          <Form.Control.Feedback type='invalid'>
            Invalid email format
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='name'>Name</Form.Label>
          <Form.Control
            type='text'
            id='name'
            name='name'
            required
            value={formValues.name}
            onChange={handleChange}
            isInvalid={touched.name && formErrors.name}
          />
          <Form.Control.Feedback type='invalid'>
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            id='username'
            name='username'
            required
            value={formValues.username}
            onChange={handleChange}
            isInvalid={touched.username && formErrors.username}
          />
          <Form.Control.Feedback type='invalid'>
            Username cannot contain spaces
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            id='password'
            name='password'
            required
            value={formValues.password}
            onChange={handleChange}
            isInvalid={touched.password && formErrors.password}
          />
          <Form.Control.Feedback type='invalid'>
            Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one digit, and one special character
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='confirmPassword'>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            required
            value={formValues.confirmPassword}
            onChange={handleChange}
            isInvalid={touched.confirmPassword && formErrors.confirmPassword}
          />
          <Form.Control.Feedback type='invalid'>
            Passwords must match
          </Form.Control.Feedback>
        </Form.Group>

        <Button type='submit' variant='primary'>Register</Button>
      </Form>
    </div>
  );
};

export default Register;
