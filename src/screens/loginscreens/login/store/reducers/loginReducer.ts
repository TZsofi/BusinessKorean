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
    case loginActionTypes.UPDATE_SIGN_IN_VISIBLE:
      return {
        ...state,
        signInVisible: action.visible,
      };
    case loginActionTypes.UPDATE_SIGN_UP_VISIBLE:
      return {
        ...state,
        signUpVisible: action.visible,
      };
    default:
      return state;
  }
};
