import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ConfirmRegister = () => {
  // useParams()
  useEffect(() => {
    //  axios to the route for validate the user
    // axios
    console.log('validate user');
  }, []);
  return <div>Your register has been successfully completed</div>;
};

export default ConfirmRegister;
