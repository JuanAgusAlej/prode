import { React, useEffect } from 'react';

const ConfirmRegister = () => {
  useEffect(() => {
    //  axios to the route for validate the user
    console.log('validate user');
  }, []);
  return <div>Your register has been successfully completed</div>;
};

export default ConfirmRegister;
