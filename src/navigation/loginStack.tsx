import {screenKeys} from '../constants/screenKeys';
import {loginConnected} from '../screens/loginscreens/login/connect';
import {createStackNavigator} from 'react-navigation-stack';
import {fbGoogleloginConnected} from '../screens/loginscreens/fbGoogleLogin/connect';

const loginStack = createStackNavigator(
  {
    [screenKeys.LOGIN]: {
      screen: loginConnected,
      navigationOptions: {
        headerShown: false,
      },
    },
    [screenKeys.FBGOOGLELOGIN]: {
      screen: fbGoogleloginConnected,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {initialRouteName: screenKeys.LOGIN},
);
export default loginStack;
