import React from 'react';

const UserAdmin = () => {
  return (
    <table className="table m-5">
      <thead>
        <tr>
          <th scope="col-4">#</th>
          <th scope="col-4">Nombre</th>
          <th scope="col-4">Correo</th>
          <th scope="col-4">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Activo</td>
          <td className="col-2">
            <button
              type="button"
              className="btn btn-danger m-0 p-0"
              style={{ width: 50, fontSize: 20 }}>
              <i className="bi bi-person-fill-slash"></i>
            </button>
            <button
              type="button"
              className="btn btn-success m-0 p-0"
              style={{ width: 50, fontSize: 20 }}>
              <i className="bi bi-person-fill-add"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary m-0 p-0"
              style={{ width: 50, fontSize: 20 }}>
              <i className="bi bi-person-fill-up"></i>
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Desactivo</td>
          <td className="col-2">
            <button
              type="button"
              className="btn btn-danger m-0 p-0"
              style={{ width: 50, fontSize: 20 }}>
              <i className="bi bi-person-fill-slash"></i>
            </button>
            <button
              type="button"
              className="btn btn-success m-0 p-0"
              style={{ width: 50, fontSize: 20 }}>
              <i className="bi bi-person-fill-add"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary m-0 p-0"
              style={{ width: 50, fontSize: 20 }}>
              <i className="bi bi-person-fill-up"></i>
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

export default UserAdmin;
