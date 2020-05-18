import {NavigationParams} from 'react-navigation';
import {
  ILoginActionTypes,
  INavigateToFbGoogleAction,
  INavigateToSignUpAction,
  INavigateToSignInAction,
} from './loginActionInterface';

export const loginActionTypes: ILoginActionTypes = {
  NAVIGATE_TO_FB_GOOGLE_LOGIN: 'NAVIGATE_TO_FB_GOOGLE_LOGIN',
  NAVIGATE_TO_SIGN_UP: 'NAVIGATE_TO_SIGN_UP',
  NAVIGATE_TO_SIGN_IN: 'NAVIGATE_TO_SIGN_IN',
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
