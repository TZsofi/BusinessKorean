import {NavigationParams} from 'react-navigation';
import {
  ILoginActionTypes,
  INavigateToFbGoogleAction,
  INavigateToSignUpAction,
  IUpdateSignInVisibleAction,
  IUpdateSignUpVisibleAction,
  INavigateToSignInAction,
} from './loginActionInterface';

export const loginActionTypes: ILoginActionTypes = {
  NAVIGATE_TO_FB_GOOGLE_LOGIN: 'NAVIGATE_TO_FB_GOOGLE_LOGIN',
  NAVIGATE_TO_SIGN_UP: 'NAVIGATE_TO_SIGN_UP',
  NAVIGATE_TO_SIGN_IN: 'NAVIGATE_TO_SIGN_IN',
  UPDATE_SIGN_UP_VISIBLE: 'UPDATE_SIGN_UP_VISIBLE',
  UPDATE_SIGN_IN_VISIBLE: 'UPDATE_SIGN_IN_VISIBLE',
};

export const navigateToFbGoogleLogin = (
  navigation: NavigationParams,
): INavigateToFbGoogleAction => ({
  type: loginActionTypes.NAVIGATE_TO_FB_GOOGLE_LOGIN,
  navigation,
});

export const navigateToSignUp = (
  navigation: NavigationParams,
): INavigateToSignUpAction => ({
  type: loginActionTypes.NAVIGATE_TO_SIGN_UP,
  navigation,
});

export const navigateToSignIn = (
  navigation: NavigationParams,
): INavigateToSignInAction => ({
  type: loginActionTypes.NAVIGATE_TO_SIGN_IN,
  navigation,
});

export const updateSignUpVisible = (
  visible: boolean,
): IUpdateSignUpVisibleAction => ({
  type: loginActionTypes.UPDATE_SIGN_UP_VISIBLE,
  visible,
});

export const updateSignInVisible = (
  visible: boolean,
): IUpdateSignInVisibleAction => ({
  type: loginActionTypes.UPDATE_SIGN_IN_VISIBLE,
  visible,
});
