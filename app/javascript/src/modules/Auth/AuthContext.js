import React, { Component, createContext } from 'react';
import axios from 'axios';

import AuthCheck from '../../utils/AuthCheck';
import TokenHelper from '../../utils/TokenHelper';

const AuthContext = createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      email: '',
    };
  }

  async componentDidMount() {
    AuthCheck()
      .then((response) => this.setState({ ...response }))
      .catch((error) => console.log(error));
  }

  login = (user, props, e) => {
    e.preventDefault();

    TokenHelper();
    axios.post('/api/v1/auth', { user: { ...user } }, { withCredentials: true })
      .then(() => {
        this.setState({ authenticated: true });
        props.history.push("/");
      })
      .catch((error) => console.log(error));
  }

  signup = (user, props, e) => {
    e.preventDefault();

    TokenHelper();
    axios.post('/api/v1/registrations', { user: { ...user } }, { withCredentials: true })
      .then(() => {
        this.setState({ authenticated: true });
        props.history.push("/");
      })
      .catch((error) => console.log(error));
  }

  logout = (e) => {
    e.preventDefault();

    TokenHelper();
    axios.delete('/api/v1/auth/logout')
      .then(() => {
        this.setState({ authenticated: false })
        window.location.href = '/'
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { authenticated, email } = this.state;
    const { children } = this.props;

    return (
      <AuthContext.Provider
        value={{
          authenticated,
          email,
          login: this.login,
          signup: this.signup,
          logout: this.logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
