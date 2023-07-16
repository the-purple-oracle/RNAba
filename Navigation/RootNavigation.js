import React from 'react';
import {useSelector} from 'react-redux';
import {Authenticated, NonAuthenticated} from './MainNavigation';

const RootNavigation = () => {
  //get user
  const user = useSelector(state => state.user);
  //if user found , pass Authenticated navigator if not NonAuthenticated Nav
  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
