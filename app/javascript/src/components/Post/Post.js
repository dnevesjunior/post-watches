import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Container,
  Typography,
  CircularProgress,
} from '@material-ui/core';

const Post = ({ match }) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { slug } = match.params;
    axios.get(`/api/v1/posts/${slug}`)
      .then((response) => {
        setPost(response.data.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h5">
        { post.attributes.title }
      </Typography>
      <Typography variant="subtitle1" paragraph>
        { post.attributes.description }
      </Typography>
    </Container>
  );
};

Post.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default Post;
