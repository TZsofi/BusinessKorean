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
    default:
      return state;
  }
};
