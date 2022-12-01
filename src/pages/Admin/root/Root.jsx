import React from 'react';
import HomeAdmin from '../../../components/Admin/Home/HomeAdmin.jsx';
import MatchAdmin from '../../../components/Admin/Match/MatchAdmin.jsx';
import TeamAdmin from '../../../components/Admin/TeamAdmin/TeamAdmin.jsx';
import TournamentAdmin from '../../../components/Admin/TournamentAdmin/TournamentAdmin.jsx';
import UserAdmin from '../../../components/Admin/UserAdmin/UserAdmin.jsx';
import Page404 from '../../404/Page404.jsx';

const Root = ({ pathname }) => {
  switch (pathname) {
    case '/admin/tournaments':
      return <TournamentAdmin />;

    case '/admin/users':
      return <UserAdmin />;

    case '/admin/teams':
      return <TeamAdmin />;

    case '/admin/matchs':
      return <MatchAdmin />;

    case '/admin':
      return <HomeAdmin />;
    default:
      return <Page404 />;
  }
};

export default Root;
