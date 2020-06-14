import {NavigationParams} from 'react-navigation';

export interface ISignInActionTypes {
  UPDATE_EMAIL: 'UPDATE_EMAIL';
  UPDATE_PASSWORD: 'UPDATE_PASSWORD';
}

export interface IUpdateEmailAction {
  type: ISignInActionTypes['UPDATE_EMAIL'];
  email: string;
}
export interface IUpdatePasswordAction {
  type: ISignInActionTypes['UPDATE_PASSWORD'];
  password: string;
}

export type ISignInActions = IUpdateEmailAction | IUpdatePasswordAction;
