/* eslint-disable no-underscore-dangle */
import React from 'react';
import Swal from 'sweetalert2';
import { changeRolUserApi, deleteUser } from '../../../service/userAdminApi';

const UserTable = ({ user, setUpdate }) => {
  const MySwal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success py-0 ms-2',
      cancelButton: 'btn btn-danger py-0 ms-2',
    },
    buttonsStyling: false,
  });
  const activeUser = () => {
    const text = user.state
      ? `Eliminar al usuario ${user.name}`
      : `Reactivar al usuario ${user.name}`;
    MySwal.fire({
      title: 'Estas seguro?',
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'yeah, do it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        deleteUser(user._id);
        setUpdate(true);
      }
    });
  };
  const changeRolUser = () => {
    const text = user.state
      ? `Dar permiso administrador a ${user.name}`
      : `Sacar permiso administrador a ${user.name}`;
    MySwal.fire({
      title: 'Estas seguro?',
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'yeah, do it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        changeRolUserApi(user._id);
        setUpdate(true);
      }
    });
  };
  return (
    <tr>
      <td>{user.alias}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.state ? <p>Activo</p> : <p>Desactivado</p>}</td>
      <td className="col-2">
        {user.state ? (
          <button
            type="button"
            className="btn btn-danger me-3 p-0"
            style={{ width: 50, fontSize: 20 }}
            onClick={() => activeUser()}>
            <i className="bi bi-person-fill-slash"></i>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success me-3 p-0"
            style={{ width: 50, fontSize: 20 }}
            onClick={() => activeUser()}>
            <i className="bi bi-person-fill-add"></i>
          </button>
        )}
        {user.role === 'USER_ROLE' ? (
          <button
            type="button"
            className="btn btn-success m-0 p-0"
            onClick={() => changeRolUser()}
            style={{ width: 50, fontSize: 20 }}>
            <i className="bi bi-person-fill-up"></i>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-warning m-0 p-0"
            onClick={() => changeRolUser()}
            style={{ width: 50, fontSize: 20 }}>
            <i className="bi bi-person-fill-down"></i>
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserTable;
