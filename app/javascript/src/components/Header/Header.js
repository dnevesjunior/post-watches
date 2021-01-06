import React from 'react';
import {
  makeStyles,
  Toolbar,
  Link,
  Button,
} from '@material-ui/core';

import { AuthConsumer } from '../../modules/Auth/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AuthConsumer>
      { ({ authenticated, logout }) => (
        <div className={classes.root}>
          <Toolbar component="nav" variant="dense" className="classes.toolbar">
            <Link
              color="inherit"
              noWrap
              variant="body2"
              href="/"
              className={classes.toolbarLink}
            >
              Posts
            </Link>
            <Link
              color="inherit"
              noWrap
              variant="body2"
              href="/news"
              className={classes.toolbarLink}
            >
              External News
            </Link>
            {
              authenticated
                ? (
                  <>
                    <Link
                      color="inherit"
                      noWrap
                      variant="body2"
                      href="/admin"
                      className={classes.toolbarLink}
                    >
                      Admin
                    </Link>
                    <Button
                      className={classes.toolbarLink}
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      color="inherit"
                      noWrap
                      variant="body2"
                      href="/login"
                      className={classes.toolbarLink}
                    >
                      Login
                    </Link>
                    <Link
                      color="inherit"
                      noWrap
                      variant="body2"
                      href="/signup"
                      className={classes.toolbarLink}
                    >
                      Signup
                    </Link>
                  </>
                )
            }
          </Toolbar>
        </div>
      )}
    </AuthConsumer>
  );
};

export default Header;
