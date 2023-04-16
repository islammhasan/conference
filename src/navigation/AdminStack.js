import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EventsList from '@screens/EventsList';
import Scanner from '@screens/Scanner';
import Attendees from '@screens/Attendees';
import Exhibitor from '@screens/Exhibitor';
import AttendeeDetails from '@screens/AttendeeDetails';
import ExpressRegisteration from '@screens/ExpressRegisteration';
import Dashboard from '@screens/Dashboard';
import EventResources from '@screens/EventResources';
import PDFReader from '@screens/PDFReader';
import Settings from '@screens/Settings';
import Profile from '@screens/Profile';
import PasswordChange from '@screens/PasswordChange';
import Reports from '@screens/Reports';

const Stack = createStackNavigator();

export const AdminStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: true, headerTitle: ''}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="EventsList" component={EventsList} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Attendees" component={Attendees} />
      <Stack.Screen name="Exhibitor" component={Exhibitor} />
      <Stack.Screen name="AttendeeDetails" component={AttendeeDetails} />
      <Stack.Screen
        name="ExpressRegisteration"
        component={ExpressRegisteration}
      />
      <Stack.Screen name="EventResources" component={EventResources} />
      <Stack.Screen name="PDFReader" component={PDFReader} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PasswordChange" component={PasswordChange} />
      <Stack.Screen name="Reports" component={Reports} />
    </Stack.Navigator>
  );
};
