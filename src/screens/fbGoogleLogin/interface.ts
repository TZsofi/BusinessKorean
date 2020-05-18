import {IFbGoogleLoginStore} from './store/store';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';

export interface IFbGoogleLoginMappedProps {
  loginStore: IFbGoogleLoginStore;
}

export interface IFbGoogleLoginDispatchedProps {
  //modifyLoggedInRequest: (loggedIn: boolean, navigation: NavigationScreenProp<any, any>) => void
}

export type IFbGoogleLoginProps = IFbGoogleLoginMappedProps &
  IFbGoogleLoginDispatchedProps;
