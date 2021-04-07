import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

import MovieStackScreen from './MovieStackScreen'
import SettingsScreen from '../screens/SettingsScreen'

export default MainTab = (props) => {
    return (
        <Tab.Navigator
            screenOptions={
                ({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let icon
                        if (route.name == 'Movies') icon = focused ? 'ios-tv' : 'md-tv'
                        else if (route.name == 'Settings') icon = focused ? 'ios-settings' : 'md-settings'

                        return <Ionicons name={icon} size={size} color={color}></Ionicons>
                    }
                })
            }
            tabBarOptions={{
                activeTintColor: 'pink',
                inactiveTintColor: 'gray'
            }}>
            <Tab.Screen name="Movies" component={MovieStackScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}