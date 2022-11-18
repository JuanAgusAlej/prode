import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LoginPages from './pages/Login/LoginPages.jsx';
import ConfirmRegister from './pages/ConfirmRegister/ConfirmRegister.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<LoginPages />} />
        <Route path='/confirmation/:uid' index element={<ConfirmRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
