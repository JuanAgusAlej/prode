import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LoginPages from './pages/Login/LoginPages.jsx';
import ProfilePages from './pages/Profile/ProfilePages.jsx';
import ProfileEditorPages from './pages/Profile/ProfileEditor/ProfileEditorPages.jsx';
import HomePages from './pages/Home/HomePages.jsx';
import FixturePages from './pages/Fixture/FixturePages.jsx';
import ConfirmRegister from './pages/ConfirmRegister/ConfirmRegister.jsx';
import ProdePage from './pages/Prode/ProdePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LoginPages />} />
        <Route path="/profile/:id" index element={<ProfilePages />} />
        <Route
          path="/profile/:id/edit"
          index
          element={<ProfileEditorPages />}
        />
        <Route path="/home" index element={<HomePages />} />
        <Route path="/prode" element={<ProdePage />} />
        <Route path="/fixtur" index element={<FixturePages />} />
        <Route path="/validation" index element={<ConfirmRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
