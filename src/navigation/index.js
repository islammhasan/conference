import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {useSelector} from 'react-redux';
import {UserStack} from './UserStack';
import {AdminStack} from './AdminStack';
import {ExhibitorStack} from './ExhibitorStack';

export const NavContainer = () => {
  const loggedUser = useSelector(state => state.user.userInfo);
  console.log('logged user', loggedUser);
  return (
    <NavigationContainer>
      {!loggedUser ? (
        <AuthStack />
      ) : loggedUser?.type === 'general' ? (
        <UserStack />
      ) : loggedUser?.type === 'admin' ? (
        <AdminStack />
      ) : loggedUser?.type === 'exhibitor' ? (
        <ExhibitorStack />
      ) : null}
    </NavigationContainer>
  );
};
