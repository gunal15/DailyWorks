import React, { useState } from 'react';
import './Registration.css';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const register = () => {
    if (name && email && password) {
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }

      dispatch({
        type: 'REGISTER',
        payload: {
          id: new Date().getTime(),
          name,
          email,
          password,
        },
      });
      alert('Registration Successful');
      navigate('/login');
    } else {
      alert('Please fill in all fields');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <div className="registration-container">
        <form className="registration-form">
          <h1>Signup</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input className="submit" type="button" value="Signup" onClick={register} />
          <div>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
