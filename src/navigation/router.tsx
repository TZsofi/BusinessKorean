import {createSwitchNavigator} from 'react-navigation';
import loginStack from './loginStack';
import {screenKeys} from '../constants/screenKeys';

//Ezt hívom meg rögtön az App.tsx-ből
//Be van állítva a Login képernyő, mint kezdés

const rootSwitch = createSwitchNavigator(
  {
    loginStack,
  },
  {
    initialRouteName: screenKeys.LOGINSTACK,
  },
);

export default rootSwitch;
