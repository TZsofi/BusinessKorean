import {screenKeys} from '../constants/screenKeys';
import {loginConnected} from '../screens/login/connect';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';

const loginStack = createStackNavigator(
  {
    [screenKeys.LOGIN]: loginConnected,
  },
  {initialRouteName: screenKeys.LOGIN},
);
export default loginStack;
