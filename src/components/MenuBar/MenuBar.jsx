import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './menuBar.css';

const MenuBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { user } = useSelector((state) => state);
  if (pathname === '/' || pathname === '/validation') {
    return;
  }

  return (
    <nav className="navbar fixed-bottom navbar-dark bg-dark">
      <div className="container-fluid my-1 align-items-center mx-2 icon ">
        <Link to={`/profile/${user.userData?.id}`}>
          <i
            className={
              pathname === `/profile/${user.userData?.id}`
                ? 'bi bi-person active'
                : 'bi bi-person'
            }></i>
        </Link>

        <Link to={'/home'}>
          <i
            className={
              pathname === '/home' ? 'bi bi-house active' : 'bi bi-house'
            }></i>
        </Link>
        <Link to={'/leaderboard'}>
          <i
            className={
              pathname === '/leaderboard'
                ? 'bi bi-controller active'
                : 'bi bi-controller '
            }></i>
        </Link>
      </div>
    </nav>
  );
};

export default MenuBar;
