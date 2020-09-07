import {NavigationParams} from 'react-navigation';

export interface IRegisterParams {
  email: string;
  password: string;
  passwordAgain: string;
}

export interface ILoginParams {
  email: string;
  password: string;
}

export interface ILoginActionTypes {
  NAVIGATE_TO_FB_GOOGLE_LOGIN: 'NAVIGATE_TO_FB_GOOGLE_LOGIN';
  SHOW_SIGN_IN_MODAL: 'SHOW_SIGN_IN_MODAL';
  SHOW_SIGN_UP_MODAL: 'SHOW_SIGN_UP_MODAL';
  HIDE_SIGN_IN_MODAL: 'HIDE_SIGN_IN_MODAL';
  HIDE_SIGN_UP_MODAL: 'HIDE_SIGN_UP_MODAL';
  UPDATE_EMAIL: 'UPDATE_EMAIL';
  UPDATE_PASSWORD: 'UPDATE_PASSWORD';
  UPDATE_PASSWORD_AGAIN: 'UPDATE_PASSWORD_AGAIN';
  REGISTER_USER: 'REGISTER_USER';
  LOGIN_USER: 'LOGIN_USER';
}

export interface INavigateToFbGoogleAction {
  type: ILoginActionTypes['NAVIGATE_TO_FB_GOOGLE_LOGIN'];
  navigation: NavigationParams;
}

export interface IShowSignInModalAction {
  type: ILoginActionTypes['SHOW_SIGN_IN_MODAL'];
}

export interface IShowSignUpModalAction {
  type: ILoginActionTypes['SHOW_SIGN_UP_MODAL'];
}

export interface IHideSignInModalAction {
  type: ILoginActionTypes['HIDE_SIGN_IN_MODAL'];
}

export interface IHideSignUpModalAction {
  type: ILoginActionTypes['HIDE_SIGN_UP_MODAL'];
}

export interface IUpdateEmailAction {
  type: ILoginActionTypes['UPDATE_EMAIL'];
  email: string;
}
export interface IUpdatePasswordAction {
  type: ILoginActionTypes['UPDATE_PASSWORD'];
  password: string;
}
export interface IUpdatePasswordAgainAction {
  type: ILoginActionTypes['UPDATE_PASSWORD_AGAIN'];
  password: string;
}
export interface IRegisterUserAction {
  type: ILoginActionTypes['REGISTER_USER'];
  registerParams: IRegisterParams;
}
export interface ILoginUserAction {
  type: ILoginActionTypes['LOGIN_USER'];
  loginParams: ILoginParams;
  navigation: NavigationParams;
}

export type ILoginActions =
  | INavigateToFbGoogleAction
  | IShowSignInModalAction
  | IShowSignUpModalAction
  | IHideSignInModalAction
  | IHideSignUpModalAction
  | IUpdateEmailAction
  | IUpdatePasswordAction
  | IRegisterUserAction
  | IUpdatePasswordAgainAction
  | ILoginUserAction;
