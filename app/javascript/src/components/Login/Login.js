import React, { useState } from 'react';
import {
  makeStyles,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
} from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons';

import { AuthConsumer } from '../../modules/Auth/AuthContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState({
    email: '',
    password: '',
    auth: false,
    loading: true,
  });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <AuthConsumer>
      { ({ login }) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={login.bind(this, user, props)}>
              <TextField
                onChange={handleChange}
                value={user.email}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={handleChange}
                value={user.password}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    Do not have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      )}
    </AuthConsumer>
  );
};

export default Login;
