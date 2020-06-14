import {initialSignInStore, ISignInStore} from '../store';
import {signInActionTypes} from '../actions/signInAction';
import {ISignInActions} from '../actions/signInActionInterface';

export const signInReducer = (
  state = initialSignInStore,
  action: ISignInActions,
): ISignInStore => {
  switch (action.type) {
    case signInActionTypes.UPDATE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case signInActionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};
