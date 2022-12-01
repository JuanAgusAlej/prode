/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { getUsersAll } from '../../../service/userAdminApi';
import UserTable from './UserTable.jsx';

const UserAdmin = () => {
  const [users, setUsers] = useState({
    loading: true,
    data: [],
  });
  const [update, setUpdate] = useState(false);
  const usuarioGet = async () => {
    const user = await getUsersAll();
    setUsers({
      loading: false,
      data: user,
    });
  };

  useEffect(() => {
    usuarioGet();
    setUpdate(false);
  }, [update]);

  return (
    <table className="table m-5">
      <thead>
        <tr>
          <th scope="col-4">Alias</th>
          <th scope="col-4">Name</th>
          <th scope="col-4">Email</th>
          <th scope="col-4">State</th>
        </tr>
      </thead>
      <tbody>
        {!users.loading ? (
          users?.data.map((user) => (
            <UserTable key={user.uid} user={user} setUpdate={setUpdate} />
          ))
        ) : (
          <p>Loading</p>
        )}
      </tbody>
    </table>
  );
};

export default UserAdmin;
