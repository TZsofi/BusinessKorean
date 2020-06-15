import {NavigationParams} from 'react-navigation';

export interface ILoginActionTypes {
  NAVIGATE_TO_FB_GOOGLE_LOGIN: 'NAVIGATE_TO_FB_GOOGLE_LOGIN';
  NAVIGATE_TO_SIGN_UP: 'NAVIGATE_TO_SIGN_UP';
  NAVIGATE_TO_SIGN_IN: 'NAVIGATE_TO_SIGN_IN';
  UPDATE_SIGN_UP_VISIBLE: 'UPDATE_SIGN_UP_VISIBLE';
  UPDATE_SIGN_IN_VISIBLE: 'UPDATE_SIGN_IN_VISIBLE';
}

export interface INavigateToFbGoogleAction {
  type: ILoginActionTypes['NAVIGATE_TO_FB_GOOGLE_LOGIN'];
  navigation: NavigationParams;
}
export interface INavigateToSignUpAction {
  type: ILoginActionTypes['NAVIGATE_TO_SIGN_UP'];
  navigation: NavigationParams;
}
export interface INavigateToSignInAction {
  type: ILoginActionTypes['NAVIGATE_TO_SIGN_IN'];
  navigation: NavigationParams;
}
export interface IUpdateSignUpVisibleAction {
  type: ILoginActionTypes['UPDATE_SIGN_UP_VISIBLE'];
  visible: boolean;
}
export interface IUpdateSignInVisibleAction {
  type: ILoginActionTypes['UPDATE_SIGN_IN_VISIBLE'];
  visible: boolean;
}

export type ILoginActions =
  | INavigateToFbGoogleAction
  | INavigateToSignInAction
  | INavigateToSignUpAction
  | IUpdateSignUpVisibleAction
  | IUpdateSignInVisibleAction;
