import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profilePages.css';
import { tokenValidated } from '../../service/userApi';
import Navbar from '../../components/Navbar/Navbar.jsx';
import MenuBar from '../../components/MenuBar/MenuBar.jsx';

const ProfilePages = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    tokenValidated().then((data) => {
      console.log(data);
      setUser(data);
    });
  }, []);

  const buttonHandler = (e) => {
    e.preventDefault();
    navigate(`/profile/${user.id}/edit`);
  };

  if (user === {}) {
    return (
      <div>
        <p>Cargando datos</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container1">
        <div className="imgProfileDiv">
          <img
            src={user.avatar}
            alt="icon placeholder"
            className="imgProfile"
          />
        </div>
        <div className="userNameDiv">
          <h1 className="userName">{user.name}</h1>
          <button onClick={buttonHandler}>
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
      </div>
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item abc">email: {user.email}</li>
          <li className="list-group-item abc">nombre: {user.alias}</li>
          <li className="list-group-item abc">region: {user.region}</li>
          <li className="list-group-item abc">puntos: {user.points}</li>
        </ul>
      </div>
      <MenuBar />
    </div>
  );
};

export default ProfilePages;
