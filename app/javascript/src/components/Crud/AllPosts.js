import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { Container, CircularProgress, Typography } from '@material-ui/core';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    axios.get('/api/v1/posts.json')
      .then((response) => {
        setPosts(response.data.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [posts.length]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'description', headerName: 'Reduced Description', width: 300 },
    { field: 'slug', headerName: 'Route Slug', width: 200 },
    { field: 'createdAt', headerName: 'Created At', width: 300 },
  ];

  const rows = () => posts.map((post) => {
    const {
      id,
      title,
      description,
      slug,
      created_at: createdAt,
    } = post.attributes;

    return {
      id,
      title,
      description: `${description.slice(0, 30)} ...`,
      slug,
      createdAt,
    };
  });

  if (loading) {
    return <Container maxWidth="sm"><CircularProgress /></Container>
  }

  return (
    <Container maxWidth="lg">
      <Typography component="h2" variant="h5">
        All Posts List
      </Typography>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={rows()}
          columns={columns}
          onRowClick={(params) => history.push(`/admin/edit/${params.row.slug}`)}
          pageSize={10}
        />
      </div>
    </Container>
  );
};

export default AllPosts;
