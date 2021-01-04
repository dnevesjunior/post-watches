import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '100%',
    height: 100,
  },
});

const Article = ({ item }) => {
  const classes = useStyles();
  const {
    title,
    description,
    url,
    urlToImage,
  } = item;

  return (
    <Grid item xs={6} md={3}>
      <Card className={classes.card}>
        <CardActionArea component="a" href={url}>
          <CardMedia
            className={classes.cardMedia}
            image={urlToImage}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { title }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              { description }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

Article.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default Article;
