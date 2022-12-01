/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';

const TeamList = ({ team, addTeam }) => {
  const [active, setActive] = useState(false);

  const addTour = () => {
    setActive(!active);
    addTeam(team._id);
  };

  return (
    <li
      className="cols-1 ms-3"
      style={{ maxWidth: 50 }}
      onClick={() => addTour()}>
      <a
        className={
          active
            ? 'btn btn-outline-primary p-1 mx-2 active'
            : 'btn btn-outline-primary p-1 mx-2'
        }
        style={{ border: 0 }}>
        <img src={team.logo} style={{ maxWidth: 50 }}></img>
        <p>{team.shortName}</p>
      </a>
    </li>
  );
};

export default TeamList;
