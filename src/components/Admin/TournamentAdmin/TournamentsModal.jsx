/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getTeamsAll } from '../../../service/teamsApi';
import { createdTournamentsApi } from '../../../service/tournamentApi';
import TeamList from './TeamList.jsx';
import './tournamentsModal.css';

const TournamentsModal = ({ isOpen, closeModal, update }) => {
  const MySwal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success py-0 ms-2',
      cancelButton: 'btn btn-danger py-0 ms-2',
    },
    buttonsStyling: false,
  });
  const [teams, setTeams] = useState({
    loading: true,
    data: [],
  });

  const [data, setData] = useState({
    name: '',
    region: 'AR',
    teamsId: [],
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const addTeam = (id) => {
    if (data.teamsId.find((team) => team === id)) {
      setData({
        ...data,
        teamsId: data.teamsId.filter((team) => team !== id),
      });
    } else {
      data.teamsId.push(id);
    }
  };
  const teamData = async () => {
    const team = await getTeamsAll();
    setTeams({
      loading: false,
      data: team,
    });
  };

  const createdTournament = async () => {
    const res = await createdTournamentsApi(data);
    console.log(res);
    MySwal.fire(
      'Creado',
      `Name: ${res.name} <br/>
    Region: ${res.region}
    <br/>
    Point Prediction: ${res.predictionResultPoints}
    <br/>
    Point Prediction Goals: ${res.predictionGoalsPoints}
    `,
      'success',
    ).then(update());
    closeModal();
  };

  useEffect(() => {
    teamData();
    setData({
      name: '',
      region: 'AR',
      teamsId: [],
    });
  }, []);

  console.log(data);
  return (
    <div className={` modal ${isOpen && 'is-open'}`}>
      <div>
        <div className="container text-end">
          <button
            type="button"
            style={{ width: 'auto', marginTop: 15 }}
            className="btn btn-success p-0 "
            onClick={createdTournament}>
            Created tournament
          </button>
          <div
            className="text-start"
            style={{ color: 'black', maxWidth: '50%' }}>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={data.name}
              className="form-control m-3"
              placeholder="name"
            />
            <select
              className="form-select m-3"
              onChange={handleChange}
              name="region"
              aria-label="Default select example">
              <option value="AR" selected={data.region === 'AR'}>
                Argentina
              </option>
              <option value="BR" selected={data.region === 'BR'}>
                Brazil
              </option>
              <option value="US" selected={data.region === 'US'}>
                Estados Unidos
              </option>
            </select>
          </div>
        </div>
        <ul className="container row list-unstyled">
          {teams.loading ? (
            <p>Loading</p>
          ) : (
            teams.data.map((team) => (
              <TeamList key={team._id} team={team} addTeam={addTeam} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TournamentsModal;
