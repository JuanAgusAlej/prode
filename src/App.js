import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import MenuBar from './components/MenuBar/MenuBar.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { getTournament } from './state/tournament';
import Tutorial from './pages/Tutorial/Tutorial.jsx';
import { getUser } from './state/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTournament());
    dispatch(getUser());
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/profile/:id" index element={<ProfilePages />} />
        <Route
          path="/profile/:id/edit"
          index
          element={<ProfileEditorPages />}
        />
        <Route path='/' index element={<LoginPages />} />
        <Route path='/home' index element={<HomePages />} />
        <Route path='/fixture/prode' element={<ProdePage />} />
        <Route path='/fixture' index element={<FixturePages />} />
        <Route path='/validation' index element={<ConfirmRegister />} />
        <Route path='/tutorial' index element={<Tutorial />} />
      </Routes>
      <MenuBar />
    </BrowserRouter>
  );
}

export default App;
