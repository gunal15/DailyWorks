import React, { useState } from 'react';
import './Registration.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const navigate = useNavigate();

  const login = () => {
    const payload = users.find(
      (user) => user.email === email && user.password === password
    );
    if (payload) {
      dispatch({
        type: 'LOGIN',
        payload,
      });
      alert('Successfully Logged In');
      navigate('/data');
    } else {
      alert('Wrong Credentials!!!');
    }
  };
  return (
    <div>
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="button" className='submit' value="Login" onClick={login} />
          <div> Dont have an account? <Link to="/">Register</Link></div>
        </form>
      </div>
    </div>
  );
};

export default Login;

