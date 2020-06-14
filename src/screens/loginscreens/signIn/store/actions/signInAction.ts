import {NavigationParams} from 'react-navigation';
import {
  ISignInActionTypes,
  IUpdateEmailAction,
  IUpdatePasswordAction,
} from './signInActionInterface';

export const signInActionTypes: ISignInActionTypes = {
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
};

export const updateEmail = (email: string): IUpdateEmailAction => ({
  type: signInActionTypes.UPDATE_EMAIL,
  email,
});

export const updatePassword = (password: string): IUpdatePasswordAction => ({
  type: signInActionTypes.UPDATE_PASSWORD,
  password,
});
