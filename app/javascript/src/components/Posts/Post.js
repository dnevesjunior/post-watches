import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const Post = ({ post }) => {
  const classes = useStyles();
  const { title, description, slug } = post.attributes;

  return (
    <Grid item xs={6} md={3}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              { title }
            </Typography>
            <Typography variant="subtitle1" paragraph>
              { `${description.slice(0, 80)}...` }
            </Typography>
            <Typography variant="subtitle1" color="primary">
              <Link to={`/posts/${slug}`}>Continue reading...</Link>
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};

Post.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
};

export default Post;
