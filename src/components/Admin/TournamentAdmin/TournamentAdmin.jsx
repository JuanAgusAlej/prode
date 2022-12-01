import React from 'react';

const TournamentAdmin = () => {
  const termindo = true;
  const termindoDos = false;
  const edit = () => {
    console.log('edit');
  };
  return (
    <table className="table mt-5 text-center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Prediction Points</th>
          <th>Prediction Goals Points</th>
          <th>Region</th>
          <th>Prize</th>
          <th>Teams</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody className="justify-content-end">
        <tr>
          <td>
            Mark
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                marginLeft: 5,
                color: 'black',
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td className="col-1">
            5
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td className="col-1">
            8
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td>
            Otto
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td className="">
            <ul className="list-unstyled">
              <li>1-Casa</li>
              <li>2-Auto</li>
              <li>3-Viaje</li>
            </ul>
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td className="">
            <ul className="list-unstyled">
              <li>1-Casa</li>
              <li>2-Auto</li>
              <li>3-Viaje</li>
              <li>4-Casa</li>
              <li>5-Auto</li>
              <li>6-Viaje</li>
              <li>7-Casa</li>
              <li>8-Auto</li>
              <li>9-Viaje</li>
              <li>10-Casa</li>
              <li>11-Auto</li>
              <li>12-Viaje</li>
            </ul>
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td>{!termindo ? <p>En curso</p> : <p>Finalizado</p>}</td>
          <td className="col-2">
            {!termindo ? (
              <button
                type="button"
                className="btn btn-success m-0 p-0"
                style={{ fontSize: 16 }}
                onClick={() => edit()}>
                Finish
              </button>
            ) : (
              <></>
            )}
            <button
              type="button"
              className="btn btn-danger p-0"
              style={{ width: 50, fontSize: 20, marginLeft: 20 }}
              onClick={() => edit()}>
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            Mark
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                marginLeft: 5,
                color: 'black',
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td>
            5
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td>
            8
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td>
            Otto
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td className="">
            <ul className="list-unstyled">
              <li>1-Casa</li>
              <li>2-Auto</li>
              <li>3-Viaje</li>
            </ul>
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td className="">
            <ul className="list-unstyled">
              <li>1-Casa</li>
              <li>2-Auto</li>
              <li>3-Viaje</li>
              <li>4-Casa</li>
              <li>5-Auto</li>
              <li>6-Viaje</li>
              <li>7-Casa</li>
              <li>8-Auto</li>
              <li>9-Viaje</li>
              <li>10-Casa</li>
              <li>11-Auto</li>
              <li>12-Viaje</li>
            </ul>
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td>{!termindoDos ? <p>En curso</p> : <p>Finalizado</p>}</td>
          <td className="col-2">
            {!termindoDos ? (
              <button
                type="button"
                className="btn btn-success m-0 p-0"
                style={{ fontSize: 16 }}
                onClick={() => edit()}>
                Finish
              </button>
            ) : (
              <></>
            )}
            <button
              type="button"
              className="btn btn-danger p-0"
              style={{ width: 50, fontSize: 20, marginLeft: 20 }}
              onClick={() => edit()}>
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            Mark
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                marginLeft: 5,
                color: 'black',
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td>
            5
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td>
            8
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td>
            Otto
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td className="">
            <ul className="list-unstyled">
              <li>1-Casa</li>
              <li>2-Auto</li>
              <li>3-Viaje</li>
            </ul>
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td className="">
            <ul className="list-unstyled">
              <li>1-Casa</li>
              <li>2-Auto</li>
              <li>3-Viaje</li>
              <li>4-Casa</li>
              <li>5-Auto</li>
              <li>6-Viaje</li>
              <li>7-Casa</li>
              <li>8-Auto</li>
              <li>9-Viaje</li>
              <li>10-Casa</li>
              <li>11-Auto</li>
              <li>12-Viaje</li>
            </ul>
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td>{!termindoDos ? <p>En curso</p> : <p>Finalizado</p>}</td>
          <td className="col-2">
            {!termindoDos ? (
              <button
                type="button"
                className="btn btn-success m-0 p-0"
                style={{ fontSize: 16 }}
                onClick={() => edit()}>
                Finish
              </button>
            ) : (
              <></>
            )}
            <button
              type="button"
              className="btn btn-danger p-0"
              style={{ width: 50, fontSize: 20, marginLeft: 20 }}
              onClick={() => edit()}>
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TournamentAdmin;
