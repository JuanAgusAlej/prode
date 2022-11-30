import React from 'react';
import { Link } from 'react-router-dom';
import './siderbars.css';

const Siderbars = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark  navBarAdmin ">
      <ul className="nav  nav-pills flex-column mb-auto ">
        <li className="nav-item">
          <Link className="nav-link" to={'/admin'}>
            Home
          </Link>
        <li className="nav-item ">
          <Link className="nav-link " to={'/admin/users'}>
            Users
          </Link>
        </li>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/admin/teams'}>
            Team
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/admin/tournaments'}>
            Tournament
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/admin/matchs'}>
            Match
          </Link>
        </li>
      </ul>
      <div className="dropdown text-center">
        <Link className="nav-link" to={'/admin'}>
          <i className="bi bi-arrow-left text-white"></i>
        </Link>
      </div>
    </div>
  );
};

export default Siderbars;
