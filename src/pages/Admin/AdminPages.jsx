/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Siderbars from '../../commons/Siderbars/Siderbars.jsx';
import Root from './root/Root.jsx';

const AdminPages = () => {
  const location = useLocation();
  const [path, setPath] = useState();
  useEffect(() => {
    setPath(location.pathname);
    console.log(screen.width);
  }, [location]);

  console.log(path);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1 p-0">
          <Siderbars />
        </div>
        <div className="admin col-10">
          <Root pathname={path} />
        </div>
      </div>
    </div>
  );
};

export default AdminPages;
