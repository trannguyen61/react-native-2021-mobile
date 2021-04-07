import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

export default MoviesStackScreen = (props) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Details"
      component={DetailScreen}
      options={({ route }) => ({
        title: `${route.params.movie.Title}`,
        headerStyle: { backgroundColor: 'pink' },
      })}
    />
  </Stack.Navigator>
)