import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  CssBaseline,
  Grid,
  Container,
  CircularProgress,
} from '@material-ui/core';

import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/v1/posts.json')
      .then((response) => {
        setPosts(response.data.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [posts.length]);

  const renderPosts = () => posts.map((post) => <Post key={post.attributes.title} post={post} />);

  if (loading) {
    return <Container maxWidth="sm"><CircularProgress /></Container>;
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {renderPosts()}
        </Grid>
      </Container>
    </>
  );
};

export default Posts;
