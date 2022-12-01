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
  }, [location]);

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-1 p-0">
          <Siderbars adm={true} />
        </div>
        <div className="admin col-10">
          <Root pathname={path} />
        </div>
      </div>
    </div>
  );
};

export default AdminPages;
