import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  CssBaseline,
  Grid,
  Container,
  CircularProgress,
} from '@material-ui/core';

import Article from './Article';

const News = () => {
  const perPage = 20;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // move this apiKey to env var using dotenv later on
  const apiKey = 'cbd83f17a9e44c17a58e430fa76f6510';

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?apiKey=${apiKey}&q=watches&page=${page}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    })
      .then((response) => {
        console.log(response);
        setNews(...news, response.data.articles);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderNews = () => news.map((item) => <Article key={item.url} item={item} />);

  if (loading) {
    return <Container maxWidth="sm"><CircularProgress /></Container>;
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {renderNews()}
        </Grid>
      </Container>
    </>
  );
};

export default News;
