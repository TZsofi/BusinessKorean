import {createSwitchNavigator} from 'react-navigation';
import LoginStack from './LoginStack';
//import MainStack from './MainStack';
import {screenKeys} from '../constants/screenKeys';

//Ezt hívom meg rögtön az App.tsx-ből
//Be van állítva a Login képernyő, mint kezdés

const rootSwitch = createSwitchNavigator(
  {
    LoginStack,
    // MainStack,
  },
  {
    initialRouteName: screenKeys.MAINSTACK,
  },
);

export default rootSwitch;
