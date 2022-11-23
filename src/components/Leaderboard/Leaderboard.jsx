import React from 'react';

const Leaderboard = ({ users }) => {
  return (
    <div className='container tableSettings'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>User</th>
            <th scope='col'>Total Points</th>
          </tr>
          {users.map((user, i) => (
            <tr className='rowColor' key={user.id}>
              <th scope='row'>{i + 1}</th>
              <td>{user.alias}</td>
              <td>{user.points}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default Leaderboard;
