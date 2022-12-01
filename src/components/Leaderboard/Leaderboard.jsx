/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useTranslation } from 'react-i18next';

const Leaderboard = ({ users }) => {
  const { t } = useTranslation();

  return (
    <div className="container tableSettings bodyPaging">
      <table className="table leaderboard">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{t('user')}</th>
            <th scope="col">{t('totalPoints')}</th>
          </tr>
          {users.map((user, i) => (
            <tr className="rowColor" key={user._id}>
              <td className='position' scope="row">{i + 1}</td>
              <td>{user.data[0].alias}</td>
              <td>{user.points}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default Leaderboard;
