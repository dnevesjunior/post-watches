import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header/Header';
import Posts from './Posts/Posts';
import Post from './Post/Post';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/posts/:slug" component={Post} />
    </Switch>
  </>
);

export default App;
