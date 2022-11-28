export const setAxiosConfig = () => {
  return {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      token: localStorage.getItem('token'),
    },
  };
};
