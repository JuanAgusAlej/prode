import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LoginPages from './pages/Login/LoginPages.jsx';
import HomePages from './pages/Home/HomePages.jsx';
import ConfirmRegister from './pages/ConfirmRegister/ConfirmRegister.jsx';
import Leaderboard from './pages/Leaderboard/Leaderboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<LoginPages />} />
        <Route path='/home' index element={<HomePages />} />
        <Route path='/' index element={<LoginPages />} />
        <Route path='/validation' index element={<ConfirmRegister />} />
        <Route path='/leaderboard' index element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
