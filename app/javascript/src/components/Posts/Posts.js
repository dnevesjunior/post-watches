import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/posts.json')
      .then(response => setPosts(response.data.data) )
      .catch(error => console.log(error) )
  }, [posts.length]);

  const renderPosts = () => posts.map(post => <li key={post.attributes.title}>{post.attributes.title}</li> )

  return (
    <>
      <div>Posts index view</div>
      <ul>{renderPosts()}</ul>
    </>
  );
};

export default Posts;
