import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { AuthProvider } from '../modules/Auth/AuthContext';

import Header from './Header/Header';
import Posts from './Posts/Posts';
import Post from './Post/Post';
import News from './News/News';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import AllPosts from './Crud/AllPosts';
import EditPost from './Crud/EditPost';
import CreatePost from './Crud/CreatePost';
import ProtectedRoute from './Routes/ProtectedRoute';

const App = () => (
  <AuthProvider>
    <Header />
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/posts/:slug" component={Post} />
      <Route exact path="/news" component={News} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route exact path="/admin" component={AllPosts} />
      <Route exact path="/admin/edit/:slug" component={EditPost} />
      <Route exact path="/admin/post/new" component={CreatePost} />
      <ProtectedRoute exact path="/admin" component={News} />
    </Switch>
  </AuthProvider>
);

export default App;
