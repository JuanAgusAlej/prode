/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable no-restricted-globals */
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
import TutorialDesktop from './pages/TutorialDesktop/TutorialDesktop.jsx';
import { getUserLocation } from './service/userApi';
import Leaderboard from './pages/Leaderboard/Leaderboard.jsx';
import Prizes from './pages/Prizes/Prizes.jsx';
import PrizesDesktop from './pages/PrizesDesktop/PrizesDesktop.jsx';
import Page404 from './pages/404/Page404.jsx';
import Page404Desktop from './pages/404Desktop/Page404Desktop.jsx';
import AdminPages from './pages/Admin/AdminPages.jsx';
import ProfilePagesDesktop from './pages/ProfileDesktop/ProfilePagesDesktop.jsx';
import ProfileEditorPagesDesktop from './pages/ProfileDesktop/ProfileEditorDesktop/ProfileEditorPagesDesktop.jsx';
import Metrics from './components/Metrics/Metrics';
import { healthCheck } from './service/healthCheck';

function App() {
  const [size, setSize] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [refreshNotification, setRefreshNotification] = useState('');
  const { t } = useTranslation();

  const onNotification = ({ data: payload }) => {
    if (payload.data.type === 'NEW_POINTS') {
      toast.success(
        <div>
          <b>{payload.data.match}</b>
          <br />
          {t('notificationNewPoints', { points: payload.data.points })}
        </div>
      );
      setRefreshNotification(Math.random());
    }
  };

  useEffect(() => {
    healthCheck();
    const healthInterval = setInterval(() => {
      healthCheck();
    }, 300000);

    if (screen.width > 1023) {
      setSize('desktop');
    }

    getUserLocation()
      .then((res) => res.data)
      .then(({ country }) => setUserCountry(country));

    navigator.serviceWorker.addEventListener('message', onNotification);

    return () => {
      navigator.serviceWorker.removeEventListener('message', onNotification);
      clearInterval(healthInterval);
    };
  }, []);

  if (!['AR', 'BR', 'US'].includes(userCountry) && userCountry !== '') {
    return '<h2>Sorry, our app is not available in your country<h2>';
  }

  if (size === 'desktop') {
    return (
      <BrowserRouter>
        <ToastContainer />
        <Metrics />
        <Routes>
          <Route path="/profile/:id" index element={<ProfilePagesDesktop />} />
          <Route
            path="/profile/:id/edit"
            index
            element={<ProfileEditorPagesDesktop />}
          />
          <Route path="/" index element={<LoginPages />} />
          <Route
            path="/home"
            index
            element={<HomeDesktop refreshNotification={refreshNotification} />}
          />
          <Route path="/validation" index element={<ConfirmRegister />} />
          <Route path="/tutorial" index element={<TutorialDesktop />} />
          <Route path="/prizes" index element={<PrizesDesktop />} />
          <Route path="/admin" index element={<AdminPages />} />
          <Route path="/admin/users" index element={<AdminPages />} />
          <Route path="/admin/teams" index element={<AdminPages />} />
          <Route path="/admin/tournaments" index element={<AdminPages />} />
          <Route path="/admin/matchs" index element={<AdminPages />} />
          <Route path="*" index element={<Page404Desktop />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <ToastContainer />
      <Metrics />
      <Navbar />
      <Routes>
        <Route path="/profile/:id" index element={<ProfilePages />} />
        <Route
          path="/profile/:id/edit"
          index
          element={<ProfileEditorPages />}
        />
        <Route path="/" index element={<LoginPages />} />
        <Route path="/home" index element={<HomePages />} />
        <Route path="/fixture/prode" element={<ProdePage />} />
        <Route path="/fixture" index element={<FixturePages />} />
        <Route path="/validation" index element={<ConfirmRegister />} />
        <Route path="/tutorial" index element={<Tutorial />} />
        <Route path="/leaderboard" index element={<Leaderboard />} />
        <Route path="/prizes" index element={<Prizes />} />
        <Route path="*" index element={<Page404 />} />
      </Routes>
      <MenuBar />
    </BrowserRouter>
  );
}

export default App;
