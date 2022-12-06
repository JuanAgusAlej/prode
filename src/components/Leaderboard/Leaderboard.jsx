/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Leaderboard = ({ users }) => {
  const actualUser = useSelector(state => state.user.userData);
  const { t } = useTranslation();
  console.log('asdasdasdasdasdasdasdasdasdasdasdasdasd');
  console.log(users);

  return (
    <div className="container tableSettings bodyPaging">
      <table className="table leaderboard">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{t('user')}</th>
            <th scope="col">{t('totalPoints')}</th>
          </tr>
          {
            users?.map((user, i) => (
              user.data[0].alias === actualUser?.alias ? (
              <tr className="rowColor" key={user._id}>
                <td className='position actualUser' scope="row">{i + 1}</td>
                <td className='actualUser'>{user.data[0].alias}</td>
                <td className='actualUser'>{user.points}</td>
              </tr>
              ) : (
              <tr className="rowColor" key={user._id}>
                <td className='position' scope="row">{i + 1}</td>
                <td>{user.data[0].alias}</td>
                <td>{user.points}</td>
              </tr>
              )))
          }
        </thead>
      </table>
    </div>
  );
};

export default Leaderboard;
