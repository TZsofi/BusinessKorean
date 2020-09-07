import {NavigationParams} from 'react-navigation';
import {
  ILoginActionTypes,
  INavigateToFbGoogleAction,
  IShowSignInModalAction,
  IShowSignUpModalAction,
  IHideSignInModalAction,
  IHideSignUpModalAction,
  IUpdateEmailAction,
  IUpdatePasswordAction,
  IUpdatePasswordAgainAction,
  IRegisterParams,
  IRegisterUserAction,
  ILoginParams,
  ILoginUserAction,
} from './loginActionInterface';

export const loginActionTypes: ILoginActionTypes = {
  NAVIGATE_TO_FB_GOOGLE_LOGIN: 'NAVIGATE_TO_FB_GOOGLE_LOGIN',

  SHOW_SIGN_IN_MODAL: 'SHOW_SIGN_IN_MODAL',
  SHOW_SIGN_UP_MODAL: 'SHOW_SIGN_UP_MODAL',
  HIDE_SIGN_IN_MODAL: 'HIDE_SIGN_IN_MODAL',
  HIDE_SIGN_UP_MODAL: 'HIDE_SIGN_UP_MODAL',
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
  UPDATE_PASSWORD_AGAIN: 'UPDATE_PASSWORD_AGAIN',
  REGISTER_USER: 'REGISTER_USER',
  LOGIN_USER: 'LOGIN_USER',
};

export const navigateToFbGoogleLogin = (
  navigation: NavigationParams,
): INavigateToFbGoogleAction => ({
  type: loginActionTypes.NAVIGATE_TO_FB_GOOGLE_LOGIN,
  navigation,
});

export const showSignInModal = (): IShowSignInModalAction => ({
  type: loginActionTypes.SHOW_SIGN_IN_MODAL,
});

export const showSignUpModal = (): IShowSignUpModalAction => ({
  type: loginActionTypes.SHOW_SIGN_UP_MODAL,
});

export const hideSignInModal = (): IHideSignInModalAction => ({
  type: loginActionTypes.HIDE_SIGN_IN_MODAL,
});

export const hideSignUpModal = (): IHideSignUpModalAction => ({
  type: loginActionTypes.HIDE_SIGN_UP_MODAL,
});
export const updateEmail = (email: string): IUpdateEmailAction => ({
  type: loginActionTypes.UPDATE_EMAIL,
  email,
});

export const updatePassword = (password: string): IUpdatePasswordAction => ({
  type: loginActionTypes.UPDATE_PASSWORD,
  password,
});

export const updatePasswordAgain = (
  password: string,
): IUpdatePasswordAgainAction => ({
  type: loginActionTypes.UPDATE_PASSWORD_AGAIN,
  password,
});

export const registerUser = (
  registerParams: IRegisterParams,
): IRegisterUserAction => ({
  type: loginActionTypes.REGISTER_USER,
  registerParams,
});

export const loginUser = (
  loginParams: ILoginParams,
  navigation: NavigationParams,
): ILoginUserAction => ({
  type: loginActionTypes.LOGIN_USER,
  loginParams,
  navigation,
});
