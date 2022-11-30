import React from 'react';
import prueba from '../../../assets/Flag_of_Argentina.svg.webp';
import pruebaDos from '../../../assets/homePages.jpg';

const TeamAdmin = () => {
  const edit = () => {
    console.log('edit');
  };
  return (
    <table className="table m-5">
      <thead>
        <tr>
          <th scope="col-4">#</th>
          <th scope="col-4">Name</th>
          <th scope="col-4">Country</th>
          <th scope="col-4">Logo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
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
          <td>
            <img src={prueba} style={{ maxWidth: 50 }}></img>
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}
              onClick={() => edit()}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td className="col-2">
            <button
              type="button"
              className="btn btn-danger m-0 p-0"
              style={{ width: 50, fontSize: 20 }}
              onClick={() => edit()}>
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>
            <img src={pruebaDos} style={{ maxWidth: 50 }}></img>
            <button
              type="button"
              className="btn btn-link p-0"
              style={{
                width: 25,
                height: 25,
                fontSize: 16,
                color: 'black',
                marginLeft: 5,
              }}
              onClick={() => edit()}>
              <i className="bi bi-pencil-square"></i>
            </button>
          </td>
          <td className="col-2">
            <button
              type="button"
              className="btn btn-danger m-0 p-0"
              style={{ width: 50, fontSize: 20 }}
              onClick={() => edit()}>
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
        {/* <tr>
          <th scope="row">3</th>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default TeamAdmin;
