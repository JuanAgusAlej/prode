import React, { useState } from 'react';
import MatchCardProde from '../../components/MatchCardProde/MatchCardProde.jsx';
import './prodePage.css';

const ProdePage = () => {
  const [goalsA, setGoalsA] = useState('-');
  const [goalsB, setGoalsB] = useState('-');

  const handleGoals = e => {
    if (e.target.parentNode.id === 'buttonGoalsA') {
      if (e.target.textContent === '+') setGoalsA(prev => prev + 1);
      else setGoalsA(prev => prev - 1);
    } else if (e.target.parentNode.id === 'buttonGoalsB') {
      if (e.target.textContent === '+') setGoalsB(prev => prev + 1);
      else setGoalsB(prev => prev - 1);
    }
  };
  return (
    <>
      <MatchCardProde handleGoals={handleGoals} goalsA={goalsA} goalsB={goalsB} />
    </>
  );
};

export default ProdePage;
