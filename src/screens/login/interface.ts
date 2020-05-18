import {ILoginStore} from './store/store';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';

export interface ILoginMappedProps {
  loginStore: ILoginStore;
}

export interface ILoginDispatchedProps {
  //modifyLoggedInRequest: (loggedIn: boolean, navigation: NavigationScreenProp<any, any>) => void
  navigateToFbGoogleLogin: (navigation: NavigationScreenProp<any, any>) => void;
  navigateToSignIn: (navigation: NavigationScreenProp<any, any>) => void;
  navigateToSignUp: (navigation: NavigationScreenProp<any, any>) => void;
}

export type ILoginProps = ILoginMappedProps & ILoginDispatchedProps;
