import axios from 'axios';

const AuthCheck = async () => {
  let auth = { authenticated: false, email: '' };
  await axios.get('/api/v1/auth/me', { withCredentials: true })
    .then((response) => {
      auth = { authenticated: response.data.logged_in, email: response.data.email };
      return auth;
    })
    .catch((error) => console.log(error));

  return auth;
};

export default AuthCheck;
