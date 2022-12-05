/* eslint-disable nonblock-statement-body-position */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable radix */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MatchCardProde from '../../components/MatchCardProde/MatchCardProde.jsx';
import NavFixtureProde from '../../components/NavFixtureProde/NavFixtureProde.jsx';
import './prodePage.css';
import { getMatches } from '../../service/matches';

const ProdePage = () => {
  const [matches, setMatches] = useState([]);
  const tournament = useSelector((state) => state.tournament.tournament);
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    if (tournament) {
      getMatches(tournament._id).then((data) => {
        const dataFiltered = data.filter((match) => {
          const matchDate = new Date(`${match.date}`);
          const now = new Date();
          if (
            matchDate.getTime() - 7200000 > now.getTime() &&
            match.result === 'PENDING'
          ) {
            return true;
          } else {
            return false;
          }
        });
        setMatches(dataFiltered);
      });
    }
  }, [tournament]);

  return (
    <div className="bodyPaging">
      <NavFixtureProde />
      <div className="container">
        {matches.length
          ? matches.map((match) => (
              <MatchCardProde
                teamA={match.teamAId}
                teamB={match.teamBId}
                date={match.date}
                match={match}
                imgA={match.teamAId.logo}
                imgB={match.teamBId.logo}
                user={user}
                key={match._id}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default ProdePage;
