/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getUsersAll } from '../../../service/userAdminApi';
import UserTable from './UserTable.jsx';

const UserAdmin = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState({
    loading: true,
    data: [],
  });
  const [update, setUpdate] = useState('');
  const usuarioGet = async () => {
    const user = await getUsersAll();
    setUsers({
      loading: false,
      data: user,
    });
  };

  useEffect(() => {
    usuarioGet();
  }, [update]);

  return (
    <table className="table m-5">
      <thead>
        <tr>
          <th scope="col-4">Alias</th>
          <th scope="col-4">{t('name')}</th>
          <th scope="col-4">{t('email')}</th>
          <th scope="col-4">{t('state')}</th>
        </tr>
      </thead>
      <tbody>
        {!users.loading ? (
          users?.data.map((user) => (
            <UserTable key={user.uid} user={user} setUpdate={setUpdate} />
          ))
        ) : (
          <tr>
            <td>{t('loading')}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserAdmin;
