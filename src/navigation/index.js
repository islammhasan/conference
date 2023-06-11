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
      ) : loggedUser?.roles_id === 1 ? (
        <UserStack />
      ) : loggedUser?.roles_id === 2 ? (
        <AdminStack />
      ) : loggedUser?.roles_id === 4 ? (
        <ExhibitorStack />
      ) : null}
    </NavigationContainer>
  );
};
