import {ILoginStore} from './store/store';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';

export interface ILoginMappedProps {
  loginStore: ILoginStore;
}

export interface ILoginDispatchedProps {
  //modifyLoggedInRequest: (loggedIn: boolean, navigation: NavigationScreenProp<any, any>) => void
}

export type ILoginProps = ILoginMappedProps & ILoginDispatchedProps;
