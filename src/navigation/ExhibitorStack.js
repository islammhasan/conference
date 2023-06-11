import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Scanner from '@screens/Scanner';
import Exhibitor from '@screens/Exhibitor';
import Dashboard from '@screens/Dashboard';
import Settings from '@screens/Settings';
import Profile from '@screens/Profile';
import PasswordChange from '@screens/PasswordChange';
import Reports from '@screens/Reports';
import Attendees from '@screens/Attendees';
import UserProfile from '@screens/UserProfile';
import EventResources from '@screens/EventResources';
import EventsList from '@screens/EventsList';
import PDFReader from '@screens/PDFReader';
import ExpressRegisteration from '@screens/ExpressRegisteration';

const Stack = createStackNavigator();

export const ExhibitorStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: true, headerTitle: ''}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Attendees" component={Attendees} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Exhibitor" component={Exhibitor} />
      <Stack.Screen name="EventResources" component={EventResources} />
      <Stack.Screen
        options={{headerTitle: ''}}
        name="PDFReader"
        component={PDFReader}
      />
      <Stack.Screen name="EventsList" component={EventsList} />
      <Stack.Screen
        options={{headerTitle: 'Express Registeration'}}
        name="ExpressRegisteration"
        component={ExpressRegisteration}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PasswordChange" component={PasswordChange} />
      <Stack.Screen name="Reports" component={Reports} />
    </Stack.Navigator>
  );
};
