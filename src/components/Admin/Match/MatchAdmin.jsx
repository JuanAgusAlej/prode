import React from 'react';

const MatchAdmin = () => {
  const resultado = true;
  const resultadoDos = false;
  const edit = () => {
    console.log('edit');
  };
  return (
      <table className="table m-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Local</th>
            <th>Visitante</th>
            <th>Instance</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody className="justify-content-end">
          <tr>
            <th>1</th>
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
            <td className='col-2'>
              {!resultado ? (
                <button
                  type="button"
                  className="btn btn-success m-0 p-0"
                  style={{ fontSize: 16 }}
                  onClick={() => edit()}>
                  Resultado
                </button>
              ) : (
                <p>0-0</p>
              )}
            </td>
            <td>
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
            <td>
              {!resultadoDos ? (
                <button
                  type="button"
                  className="btn btn-success m-0 p-0"
                  style={{ fontSize: 16 }}
                  onClick={() => edit()}>
                  Resultado
                </button>
              ) : (
                <p>0-0</p>
              )}
            </td>
            <td>
              <button
                type="button"
                className="btn btn-danger p-0"
                style={{ width: 50, fontSize: 20, marginLeft: 20 }}
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

export default MatchAdmin;
