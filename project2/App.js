import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons";

import MovieListScreen from './screens/MovieListScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'
import SearchScreen from './screens/SearchScreen'

import Styles from './StyleSheet'

const Stack = createStackNavigator()

function MovieShownStack () {
  return (
    <Stack.Navigator initialRouteName="Movie List">
      <Stack.Screen name="Movie List" component={MovieListScreen}></Stack.Screen>
      <Stack.Screen name="Movie Detail" component={MovieDetailScreen} options={({route}) => ({headerTitle: route.params.item['Title']})}></Stack.Screen>
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

function AppTab () {
  return (
    <Tab.Navigator initialRouteName="MovieShown">
      <Tab.Screen 
        name="MovieShown" 
        component={MovieShownStack} 
        options={
          {title: "Movie", 
          tabBarIcon: ({ focused }) => (
            <Ionicons name="md-checkmark" size={25}/>
          )}
        }
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen}
        options={
          {title: "Search", 
          tabBarIcon: ({ focused }) => (
            <Ionicons name="md-checkmark" size={25}/>
          )}
        }
      />
    </Tab.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer styles="{Styles.container}">
        <AppTab></AppTab>
      </NavigationContainer>
    )
  }
}
