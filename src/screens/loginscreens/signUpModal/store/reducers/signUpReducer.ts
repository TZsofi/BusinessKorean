import {initialSignUpStore, ISignUpStore} from '../store';
import {signUpActionTypes} from '../actions/signUpAction';
import {ISignUpActions} from '../actions/signUpActionInterface';

export const signUpReducer = (
  state = initialSignUpStore,
  action: ISignUpActions,
): ISignUpStore => {
  switch (action.type) {
    case signUpActionTypes.UPDATE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case signUpActionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case signUpActionTypes.UPDATE_PASSWORD_AGAIN:
      return {
        ...state,
        passwordAgain: action.password,
      };
    default:
      return state;
  }
};
