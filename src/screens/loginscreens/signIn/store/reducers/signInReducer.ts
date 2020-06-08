import {initialSignInStore, ISignInStore} from '../store';
import {ISignInActions, signInActionTypes} from '../actions/signInAction';

export const signInReducer = (
  state = initialSignInStore,
  action: ISignInActions,
): ISignInStore => {
  switch (action) {
    default:
      return state;
  }
};
