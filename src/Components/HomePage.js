import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
  };

  return (
    <div className="App">
      <h1>User's Data</h1>
      {user ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default HomePage;
