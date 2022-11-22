import { useNavigate } from 'react-router-dom';
import './profileEditorPages.css';
import useInput from '../../../utils/useInput';
import { iconPaths } from './iconPaths';

const ProfileEditorPages = () => {
  const newUsername = useInput();
  const navigate = useNavigate();

  const handleClick = (e, path) => {
    e.preventDefault();
    console.log(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUsername.value);
    navigate('/profile');
  };
  console.log(iconPaths);

  return (
    <div>
      <div>
        <h1 className="title">MODIFICAR USUARIO</h1>
      </div>
      <div className="iconDiv">
        <div className="iconChange">
          <div>Icono actual:</div>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/icono-del-perfil-avatar-defecto-placeholder-gris-de-la-foto-102846161.jpg"
              alt="user icon"
              className="imgProfile"
            />
          </div>
        </div>
        <div className="iconChange">
          <div>Cambiar icono:</div>
          {iconPaths.map((path) => {
            return (
              <div key={path} className="icons">
                <img
                  src={path}
                  alt="icono"
                  onClick={(e) => handleClick(e, path)}
                  className="icons"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="usernameDiv">
        <div className="userActualDiv">
          <p>Username actual: </p>
          <p className="userActual">Usuario</p>
        </div>
        <div className="usernameChange">
          <p>Cambiar username: </p>
          <form onSubmit={handleSubmit}>
            <input {...newUsername} type="text" name="usernameChange" />
          </form>
        </div>
      </div>
      <div className="buttonDiv">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileEditorPages;
