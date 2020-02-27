import {screenKeys} from '../constants/screenKeys';
import {loginConnected} from '../screens/login/connect';
import {createStackNavigator} from 'react-navigation-stack';

const loginStack = createStackNavigator(
  {
    [screenKeys.LOGIN]: {
      screen: loginConnected,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {initialRouteName: screenKeys.LOGIN},
);
export default loginStack;
