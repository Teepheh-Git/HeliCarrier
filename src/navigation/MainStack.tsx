import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import {Navigator, options, Screen} from './router';

const MainStack = () => {
  return (
    <Navigator
      detachInactiveScreens
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <Screen options={options} name="Home" component={Home} />
    </Navigator>
  );
};

export default MainStack;
