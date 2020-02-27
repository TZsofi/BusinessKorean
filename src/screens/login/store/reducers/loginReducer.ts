import {initialLoginStore, ILoginStore} from '../store';
import {ILoginActions, loginActionTypes} from '../actions/loginAction';

export const loginReducer = (
  state = initialLoginStore,
  action: ILoginActions,
): ILoginStore => {
  switch (action) {
    default:
      return state;
  }
};
