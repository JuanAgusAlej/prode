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
  const [contentButton, setContentButton] = useState('Predict');
  const tournament = useSelector(state => state.tournament.tournament);
  const user = useSelector(state => state.user.userData);

  useEffect(() => {
    if (tournament) {
      getMatches(tournament._id).then(data => {
        const dataFiltered = data.filter(match => {
          const matchDate = new Date(`${match.date}`);
          const now = new Date();
          if (matchDate.getTime() - 7200000 > now.getTime()) return true;
          else return false;
        });
        setMatches(dataFiltered);
      });
    }
  }, [tournament]);

  return (
    <div className='bodyPaging'>
      <NavFixtureProde />
      <div className='container'>
        {matches.length
          ? matches.map(match => (
              <MatchCardProde
                teamA={match.teamAId.shortName}
                teamB={match.teamBId.shortName}
                date={match.date}
                matchId={match._id}
                imgA={match.teamAId.logo}
                imgB={match.teamBId.logo}
                user={user}
                contentButton={contentButton}
                setContentButton={setContentButton}
                key={match._id}
              />
          ))
          : null}
      </div>
    </>
  );
};

export default ProdePage;
