/* eslint-disable operator-linebreak */
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
      ? `Block user ${user.name}`
      : `Unblock user ${user.name}`;
    MySwal.fire({
      title: 'Are you sure?',
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'Yes',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteUser(user._id);
        setUpdate(`${user.id}-${Math.random()}`);
      }
    });
  };
  const changeRolUser = () => {
    const text =
      user.role === 'USER_ROLE'
        ? `Grant administrartor permissions to ${user.name}`
        : `Remove administrartor permissions to ${user.name}`;
    MySwal.fire({
      title: 'Are you sure?',
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF3270',
      cancelButtonColor: '#12a696',
      confirmButtonText: 'Yes',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await changeRolUserApi(user._id);
        setUpdate(`${user.id}-${Math.random()}`);
      }
    });
  };
  return (
    <tr>
      <td>{user.alias}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.state ? 'Active' : 'Blocked'}</td>
      <td className="col-2">
        {user.state ? (
          <button
            type="button"
            className="btn btn-danger me-3 p-0"
            style={{ width: 50, fontSize: 20 }}
            onClick={() => activeUser()}
          >
            <i className="bi bi-person-fill-slash"></i>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success me-3 p-0"
            style={{ width: 50, fontSize: 20 }}
            onClick={() => activeUser()}
          >
            <i className="bi bi-person-fill-add"></i>
          </button>
        )}
        {user.role === 'USER_ROLE' ? (
          <button
            type="button"
            className="btn btn-success m-0 p-0"
            onClick={() => changeRolUser()}
            style={{ width: 50, fontSize: 20 }}
          >
            <i className="bi bi-person-fill-up"></i>
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-warning m-0 p-0"
            onClick={() => changeRolUser()}
            style={{ width: 50, fontSize: 20 }}
          >
            <i className="bi bi-person-fill-down"></i>
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserTable;
