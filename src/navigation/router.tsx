import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Home from '../screens/Home';
// import SplashScreen from 'react-native-splash-screen';
import {RootStackParamList} from '../constants/globalTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainStack from './MainStack';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';

enableScreens();
export const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

interface CurrentProps {
  current: {
    progress: number;
  };
}

export const options = (): object => ({
  gestureEnabled: false,
  transitionSpec: {
    open: {animation: 'timing', config: {duration: 500}},
    close: {animation: 'timing', config: {duration: 500}},
  },
  cardStyleInterpolator: ({current}: CurrentProps) => {
    return {
      cardStyle: {
        opacity: current.progress,
      },
    };
  },
});

const isLoggedIn = true;

const Router: FC = () => {
  useEffect(() => {
    // SplashScreen.hide();
  }, []);

  return <MainStack />;
};

export default Router;

const styles = StyleSheet.create({
  loadingIndicator: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
