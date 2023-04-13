import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Router from './Router';
import { authStateChanged } from '../redux/auth/authOperations';

const Main = () => {
  const { login, stateChange, userId } = useSelector(
    (state) => state.auth
  );

  console.log('test =================----', {
    login,
    stateChange,
    userId,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChanged());
  }, []);

  const isAuth = !!stateChange;

  return (
    <NavigationContainer>
      <Router isAuth={isAuth} />
    </NavigationContainer>
  );
};
export default Main;
