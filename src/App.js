import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import HomePage from './Components/HomePage';

const App = () => {
  return (
    <div>
      <Routes>
       <Route path="/login" element={<Login />} />
        <Route path="/" element={<Registration />} />
        <Route path="/data" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
