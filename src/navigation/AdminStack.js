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
import UserProfile from '@screens/UserProfile';
import DevLog from '@screens/DevLog';

const Stack = createStackNavigator();

export const AdminStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Dashboard"
        options={{headerTitle: ''}}
        component={Dashboard}
      />
      <Stack.Screen
        options={{headerTitle: 'Events List'}}
        name="EventsList"
        component={EventsList}
      />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Attendees" component={Attendees} />
      <Stack.Screen name="Exhibitor" component={Exhibitor} />
      <Stack.Screen
        options={{headerTitle: 'Attendee Details'}}
        name="AttendeeDetails"
        component={AttendeeDetails}
      />
      <Stack.Screen
        options={{headerTitle: 'Express Registeration'}}
        name="ExpressRegisteration"
        component={ExpressRegisteration}
      />
      <Stack.Screen
        options={{headerTitle: 'Event Resources'}}
        name="EventResources"
        component={EventResources}
      />
      <Stack.Screen
        options={{headerTitle: ''}}
        name="PDFReader"
        component={PDFReader}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="UserProfile"
        options={{headerTitle: ''}}
        component={UserProfile}
      />
      <Stack.Screen
        options={{headerTitle: 'Password Change'}}
        name="PasswordChange"
        component={PasswordChange}
      />
      <Stack.Screen name="Reports" component={Reports} />
      <Stack.Screen name="DevLog" component={DevLog} />
    </Stack.Navigator>
  );
};
