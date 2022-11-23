/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import MatchCardProde from '../../components/MatchCardProde/MatchCardProde.jsx';
import NavFixtureProde from '../../components/NavFixtureProde/NavFixtureProde.jsx';
import './prodePage.css';
import { getMatches } from '../../service/matches';

const ProdePage = () => {
  const [goalsA, setGoalsA] = useState(0);
  const [goalsB, setGoalsB] = useState(0);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches().then(data => {
      setMatches(data);
      console.log(data);
    });
  }, []);

  const handleGoals = e => {
    if (e.target.parentNode.id === 'buttonGoalsA') {
      if (e.target.textContent === '+') setGoalsA(prev => prev + 1);
      else if (goalsA > 0) setGoalsA(prev => prev - 1);
    } else if (e.target.parentNode.id === 'buttonGoalsB') {
      if (e.target.textContent === '+') setGoalsB(prev => prev + 1);
      else if (goalsB > 0) setGoalsB(prev => prev - 1);
    }
  };
  const handlePrediction = () => {};
  return (
    <>
      <NavFixtureProde />
      {matches.length ? matches.map(match => (
        <MatchCardProde
          handleGoals={handleGoals}
          handlePrediction={handlePrediction}
          teamA={match.teamAId.shortName}
          goalsA={match.goalsA}
          teamB={match.teamBId.shortName}
          goalsB={match.goalsB}
          date={match.date}
          key={match._id}
        />
      )) : null}
    </>
  );
};

export default ProdePage;
