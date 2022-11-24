/* eslint-disable comma-dangle */
/* eslint-disable radix */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MatchCardProde from '../../components/MatchCardProde/MatchCardProde.jsx';
import NavFixtureProde from '../../components/NavFixtureProde/NavFixtureProde.jsx';
import './prodePage.css';
import { getMatches } from '../../service/matches';
import { postPrediction } from '../../service/predictions';

const ProdePage = () => {
  const [goalsA, setGoalsA] = useState(0);
  const [goalsB, setGoalsB] = useState(0);
  const [matches, setMatches] = useState([]);
  const [contentButton, setContentButton] = useState('Predict');
  const tournament = useSelector(state => state.tournament.tournament);
  const user = useSelector(state => state.user.userData);

  const handleGoals = e => {
    if (e.target.parentNode.id === 'buttonGoalsA') {
      if (e.target.textContent === '+') setGoalsA(prev => prev + 1);
      else if (goalsA > 0) setGoalsA(prev => prev - 1);
    } else if (e.target.parentNode.id === 'buttonGoalsB') {
      if (e.target.textContent === '+') setGoalsB(prev => prev + 1);
      else if (goalsB > 0) setGoalsB(prev => prev - 1);
    }
  };

  const handlePrediction = (goallsA, goallsB, matchId) => {
    postPrediction(goallsA, goallsB, matchId).then(() => setContentButton('Edit Prediction'));
  };

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
    <>
      <NavFixtureProde />
      {matches.length
        ? matches.map(match => (
            <MatchCardProde
              handleGoals={handleGoals}
              handlePrediction={handlePrediction}
              teamA={match.teamAId.shortName}
              goalsA={goalsA}
              setGoalsA={setGoalsA}
              teamB={match.teamBId.shortName}
              goalsB={goalsB}
              setGoalsB={setGoalsB}
              date={match.date}
              matchId={match._id}
              user={user}
              contentButton={contentButton}
              setContentButton={setContentButton}
              key={match._id}
            />
        ))
        : null}
    </>
  );
};

export default ProdePage;
