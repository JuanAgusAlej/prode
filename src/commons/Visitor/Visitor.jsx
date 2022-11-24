import React from 'react';
import './visitor.css';

const Visitor = ({
  gol, team, local, win,
}) => {
  return (
    <>
      {!local ? (
        <div
          className={
            win === 'WON_B' || win === 'PENDING'
              ? 'd-flex align-items-center '
              : 'd-flex align-items-center lose'
          }>
          <p className="mx-2 my-2">{gol}</p>
          <p className="me-2 my-2">{team.name}</p>
          <img src={team.logo} alt="" width="40" height="34" />
        </div>
      ) : (
        <div
          className={
            win === 'WON_A' || win === 'PENDING'
              ? 'd-flex align-items-center '
              : 'd-flex align-items-center lose'
          }>
          <img src={team.logo} alt="" width="40" height="34" />
          <p className="ms-2 my-2 ">{team.name}</p>
          <p className="mx-2 my-2">{gol}</p>
        </div>
      )}
    </>
  );
};

export default Visitor;
