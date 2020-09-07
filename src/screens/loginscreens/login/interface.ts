import {ILoginStore} from './store/store';
import {NavigationScreenProp, NavigationParams} from 'react-navigation';
import {
  IRegisterParams,
  ILoginParams,
} from './store/actions/loginActionInterface';

export interface ILoginMappedProps {
  loginStore: ILoginStore;
}

export interface ILoginDispatchedProps {
  //modifyLoggedInRequest: (loggedIn: boolean, navigation: NavigationScreenProp<any, any>) => void
  navigateToFbGoogleLogin: (navigation: NavigationScreenProp<any, any>) => void;
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
  updatePasswordAgain: (password: string) => void;
  registerUser: (registerParams: IRegisterParams) => void;
  loginUser: (loginParams: ILoginParams, navigation: NavigationParams) => void;
  showSignInModal: () => void;
  showSignUpModal: () => void;
  hideSignInModal: () => void;
  hideSignUpModal: () => void;
}

export type ILoginProps = ILoginMappedProps & ILoginDispatchedProps;
