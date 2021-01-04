import React, { useState, useEffect } from 'react';
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

  const renderPost = () => <div>{post.title}</div>;

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

export default Post;
