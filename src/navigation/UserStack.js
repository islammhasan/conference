import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Scanner from '@screens/Scanner';

const Stack = createStackNavigator();

export const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true, headerTitle: ''}}>
      <Stack.Screen name="Scanner" component={Scanner} />
    </Stack.Navigator>
  );
};
