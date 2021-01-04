import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = ({ match }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const { slug } = match.params;
    axios.get(`/api/v1/posts/${ slug }`)
      .then(response => setPost(response.data.data))
      .catch(error => console.log(error));
  }, []);

  const renderPost = () => <div>{post.title}</div>
  console.log(post);
  return (
    <>
      <div>Post view</div>
      {renderPost()}
    </>
  );
};

export default Post;
