import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@screens/Login';
import EventsList from '@screens/EventsList';
import Scanner from '@screens/Scanner';
import Attendees from '@screens/Attendees';
import Exhibitor from '@screens/Exhibitor';
import AttendeeDetails from '@screens/AttendeeDetails';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true, headerTitle: ''}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="EventsList" component={EventsList} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Attendees" component={Attendees} />
      <Stack.Screen name="Exhibitor" component={Exhibitor} />
      <Stack.Screen name="AttendeeDetails" component={AttendeeDetails} />
    </Stack.Navigator>
  );
};
