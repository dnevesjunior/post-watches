import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  CssBaseline,
  Container,
  CircularProgress,
  TextField,
  Button,
} from '@material-ui/core';

import TokenHelper from '../../utils/TokenHelper';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const EditPost = ({ match }) => {
  const classes = useStyles();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const { slug } = match.params;
    TokenHelper();
    axios.get(`/api/v1/posts/${slug}`, { withCredentials: true })
      .then((response) => {
        setPost(response.data.data.attributes);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <Container maxWidth="sm"><CircularProgress /></Container>;
  }

  const handleChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const submitChange = () => {
    setLoading(true);
    axios.patch(`/api/v1/posts/${post.slug}`, { post: { ...post } })
      .then((response) => {
        setPost(response.data.data.attributes);
        history.push('/admin');
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const deletePost = () => {
    axios.delete(`/api/v1/posts/${post.slug}`)
      .then(() => history.push('/admin'));
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <form className={classes.form} onSubmit={submitChange}>
        <TextField
          onChange={handleChange}
          value={post.title}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoFocus
        />
        <TextField
          onChange={handleChange}
          value={post.description}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
          multiline
          rowsMax={20}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit Changes
        </Button>
      </form>
      <Button
        variant="contained"
        color="secondary"
        onClick={deletePost}
      >
        Delete
      </Button>
    </Container>
  );
};

EditPost.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default EditPost;
