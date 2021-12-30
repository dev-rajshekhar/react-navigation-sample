import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './source/Login';
import Details from './source/Details';
import NewsFeedScreen from './source/NewsFeed';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#ff0000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeedScreen}
          options={{
            title: 'News',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Details',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
