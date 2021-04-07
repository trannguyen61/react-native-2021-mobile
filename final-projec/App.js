import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store'

import LoginStack from './navigators/LoginStack'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <LoginStack></LoginStack>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}