import {screenKeys} from '../constants/screenKeys';
import {loginConnected} from '../screens/loginscreens/login/connect';
import {createStackNavigator} from 'react-navigation-stack';
import {fbGoogleloginConnected} from '../screens/loginscreens/fbGoogleLogin/connect';
import {signInConnected} from '../screens/loginscreens/signIn/connect';
import {signUpConnected} from '../screens/loginscreens/signUpModal/connect';

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
    [screenKeys.SIGNIN]: {
      screen: signInConnected,
      navigationOptions: {
        headerShown: false,
      },
    },
    [screenKeys.SIGNUP]: {
      screen: signUpConnected,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {initialRouteName: screenKeys.LOGIN},
);
export default loginStack;
