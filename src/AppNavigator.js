import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import DonationType from './screens/DonationType';
import Schedule from './screens/Schedule';
import DonationPage from './screens/DonationPage';

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen
          name="DonationType"
          component={DonationType}></Stack.Screen>
        <Stack.Screen name="Schedule" component={Schedule}></Stack.Screen>
        <Stack.Screen
          name="DonationPage"
          component={DonationPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
