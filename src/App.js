/* eslint-disable comma-dangle */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useTranslation } from 'react-i18next';

import LoginPages from './pages/Login/LoginPages.jsx';
import ProfilePages from './pages/Profile/ProfilePages.jsx';
import ProfileEditorPages from './pages/Profile/ProfileEditor/ProfileEditorPages.jsx';
import HomePages from './pages/Home/HomePages.jsx';
import HomeDesktop from './pages/Home/HomeDesktop.jsx';
import FixturePages from './pages/Fixture/FixturePages.jsx';
import ConfirmRegister from './pages/ConfirmRegister/ConfirmRegister.jsx';
import ProdePage from './pages/Prode/ProdePage.jsx';
import MenuBar from './components/MenuBar/MenuBar.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Tutorial from './pages/Tutorial/Tutorial.jsx';
import { getUserLocation } from './service/userApi';
import SettingsPages from './pages/settings/SettingsPages.jsx';
import Leaderboard from './pages/Leaderboard/Leaderboard.jsx';
import Prizes from './pages/Prizes/Prizes.jsx';
import Page404 from './pages/404/Page404.jsx';
import { onMessageListener } from './service/firebase';

function App() {
  const [userCountry, setUserCountry] = useState('');
  const { t } = useTranslation();
  const [Home, setHome] = useState(null);

  useEffect(() => {
    getUserLocation()
      .then((res) => res.data)
      .then(({ country }) => setUserCountry(country));
  }, []);

  onMessageListener()
    .then((payload) => {
      console.log('New push ', payload);
      if (payload.data.type === 'NEW_POINTS') {
        toast.success(
          <div>
            <b>{payload.data.match}</b>
            <br />
            {t('notificationNewPoints', { points: payload.data.points })}
          </div>
        );
      }
    })
    .catch((err) => console.log('failed: ', err));

  if (!['AR', 'BR', 'US'].includes(userCountry) && userCountry !== '') {
    return '<h2>Sorry, our app is not available in your country<h2>';
  }

  return (
    <BrowserRouter>
      <ToastContainer />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/profile/:id" index element={<ProfilePages />} />
        <Route
          path="/profile/:id/edit"
          index
          element={<ProfileEditorPages />}
        />
        <Route path="/" index element={<LoginPages />} />
        <Route path="/home" index element={window.innerWidth >= 1000 ? <HomeDesktop /> : <HomePages />} />
        <Route path="/fixture/prode" element={<ProdePage />} />
        <Route path="/fixture" index element={<FixturePages />} />
        <Route path="/settings" index element={<SettingsPages />} />
        <Route path="/validation" index element={<ConfirmRegister />} />
        <Route path="/tutorial" index element={<Tutorial />} />
        <Route path="/leaderboard" index element={<Leaderboard />} />
        <Route path="/prizes" index element={<Prizes />} />
        <Route path="*" index element={<Page404 />} />
      </Routes>
      {/* <MenuBar /> */}
    </BrowserRouter>
  );
}

export default App;
