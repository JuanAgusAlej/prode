/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardPartidos from '../../components/CardPartidos/CardPartidos.jsx';
import NavFixtureProde from '../../components/NavFixtureProde/NavFixtureProde.jsx';
import { getMatches } from '../../service/matches';

const FixturePages = () => {
  const [matchs, setMatchs] = useState([]);
  const { tournament } = useSelector((state) => state);
  const matchsGet = async () => {
    const data = await getMatches(tournament.tournament._id);
    console.log(data);
    setMatchs(data);
  };
  useEffect(() => {
    console.log(tournament);
    if (!tournament.isLoading) {
      matchsGet();
    }
  }, [tournament]);

  return (
    <div className="bodyPaging">
      <NavFixtureProde />
      {!tournament.isLoading ? (
        matchs?.map((match) => (
          <CardPartidos key={match._id} match={match} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default FixturePages;
