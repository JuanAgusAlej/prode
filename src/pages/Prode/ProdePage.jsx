import React, { useState } from 'react';
import MatchCardProde from '../../components/MatchCardProde/MatchCardProde.jsx';
import NavFixtureProde from '../../components/NavFixtureProde/NavFixtureProde.jsx';
import './prodePage.css';

const ProdePage = () => {
  const [goalsA, setGoalsA] = useState(0);
  const [goalsB, setGoalsB] = useState(0);

  const handleGoals = e => {
    if (e.target.parentNode.id === 'buttonGoalsA') {
      if (e.target.textContent === '+') setGoalsA(prev => prev + 1);
      else if (goalsA > 0) setGoalsA(prev => prev - 1);
    } else if (e.target.parentNode.id === 'buttonGoalsB') {
      if (e.target.textContent === '+') setGoalsB(prev => prev + 1);
      else if (goalsB > 0) setGoalsB(prev => prev - 1);
    }
  };
  return (
    <>
      <NavFixtureProde />
      <MatchCardProde handleGoals={handleGoals} teamA={'ARG'} goalsA={goalsA} teamB={'ARG'} goalsB={goalsB} />
    </>
  );
};

export default ProdePage;
