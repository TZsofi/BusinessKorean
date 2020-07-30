import {initialLoginStore, ILoginStore} from '../store';
import {loginActionTypes} from '../actions/loginAction';
import {ILoginActions} from '../actions/loginActionInterface';

export const loginReducer = (
  state = initialLoginStore,
  action: ILoginActions,
): ILoginStore => {
  switch (action.type) {
    case loginActionTypes.NAVIGATE_TO_FB_GOOGLE_LOGIN:
      return {
        ...state,
      };
    case loginActionTypes.SHOW_SIGN_IN_MODAL:
      return {
        ...state,
        signInVisible: true,
      };
    case loginActionTypes.SHOW_SIGN_UP_MODAL:
      return {
        ...state,
        signUpVisible: true,
      };
    case loginActionTypes.HIDE_SIGN_IN_MODAL:
      return {
        ...state,
        signInVisible: false,
        email: '',
        password: '',
      };
    case loginActionTypes.HIDE_SIGN_UP_MODAL:
      return {
        ...state,
        signUpVisible: false,
        email: '',
        password: '',
        passwordAgain: '',
      };
    case loginActionTypes.UPDATE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case loginActionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case loginActionTypes.UPDATE_PASSWORD_AGAIN:
      return {
        ...state,
        passwordAgain: action.password,
      };
    default:
      return state;
  }
};
