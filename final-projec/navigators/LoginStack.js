import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainTab from './MainTab'

const Stack = createStackNavigator()

export default class LoginStack extends React.Component {
    render () {
        return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Main Tabs" component={MainTab}/>
        </Stack.Navigator>  
        )
    }
}