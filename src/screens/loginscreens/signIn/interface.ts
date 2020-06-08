import {ISignInStore} from './store/store';

export interface ISignInMappedProps {
  signInStore: ISignInStore;
}

export interface ISignInDispatchedProps {
  //modifyLoggedInRequest: (loggedIn: boolean, navigation: NavigationScreenProp<any, any>) => void
}

export type ISignInProps = ISignInMappedProps & ISignInDispatchedProps;
