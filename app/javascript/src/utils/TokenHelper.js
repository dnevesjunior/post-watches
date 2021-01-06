import axios from 'axios';

const TokenHelper = () => {
  const csrfToken = document.querySelector('[name=csrf-token]').content;
  axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
  axios.defaults.headers.common.Accept = 'application/json';
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
};

export default TokenHelper;
