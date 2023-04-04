import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';

export const NavContainer = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
