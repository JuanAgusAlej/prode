import { useLocation } from 'react-router-dom';
import './menuBar.css';

const MenuBar = () => {
  const location = useLocation();
  if (location.pathname === '/' || location.pathname === '/validation') {
    return;
  }

  return (
    <nav className="navbar fixed-bottom navbar-dark bg-dark">
      <div className="container-fluid my-1 align-items-center mx-2 icon ">
        <i className="bi bi-person "></i>
        <i className="bi bi-house "></i>
        <i className="bi bi-controller "></i>
      </div>
    </nav>
  );
};

export default MenuBar;
