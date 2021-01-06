import React, { useState } from 'react';
import axios from 'axios';
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

const CreatePost = () => {
  const classes = useStyles();
  const [post, setPost] = useState({
    title: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Container maxWidth="sm"><CircularProgress /></Container>;
  }

  const handleChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const submitChange = () => {
    setLoading(true);
    TokenHelper();
    axios.post('/api/v1/posts', { post: { ...post } })
      .then((response) => {
        setPost(response.data.data.attributes);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
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
    </Container>
  );
};

export default CreatePost;
