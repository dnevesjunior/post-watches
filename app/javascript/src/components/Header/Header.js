import React from 'react';
import {
  makeStyles,
  Toolbar,
  Link,
} from '@material-ui/core';

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
  }
}));

const Header = (props) => {
  const classes = useStyles();

  return (
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
        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="/admin"
          className={classes.toolbarLink}
        >
          Admin
        </Link>
      </Toolbar>
    </div>
  );
}

export default Header;
