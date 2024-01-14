import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {useSelector} from 'react-redux';
import {UserStack} from './UserStack';
import {AdminStack} from './AdminStack';
import {ExhibitorStack} from './ExhibitorStack';

export const NavContainer = () => {
  const loggedUser = useSelector(state => state?.user?.userInfo);
  console.log('logged user', loggedUser);
  return (
    <NavigationContainer>
      {!loggedUser ? (
        <AuthStack />
      ) : loggedUser?.role_name === 'gate' ? (
        <UserStack />
      ) : loggedUser?.role_name === 'admin' ? (
        <AdminStack />
      ) : loggedUser?.role_name === 'exhibitors' ? (
        <ExhibitorStack />
      ) : null}
    </NavigationContainer>
  );
};
