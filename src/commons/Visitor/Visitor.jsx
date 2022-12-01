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
            win === 'WON_B' || win === 'PENDING' || win === 'DRAW'
              ? 'd-flex col-5 visitor'
              : 'd-flex col-5 visitor lose'
          }>
          <p className="mx-2 my-2 gol">{gol}</p>
          <img src={team.logo} alt="" width="40" height="34" />
          <p className="me-2 my-2 teamName">{team.shortName}</p>
        </div>
      ) : (
        <div
          className={
            win === 'WON_A' || win === 'PENDING' || win === 'DRAW'
              ? 'd-flex col-5 visitor'
              : 'd-flex col-5 visitor lose'
          }>
          <p className="ms-2 my-2 teamName">{team.shortName}</p>
          <img src={team.logo} alt="" width="40" height="34" />
          <p className="mx-2 my-2 gol">{gol}</p>
        </div>
      )}
    </>
  );
};

export default Visitor;
