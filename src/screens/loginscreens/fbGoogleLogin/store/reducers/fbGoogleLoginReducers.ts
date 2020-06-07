import {initialFbGoogleLoginStore, IFbGoogleLoginStore} from '../store';
import {
  IFbGoogleLoginActions,
  loginActionTypes,
} from '../actions/fbGoogleLoginActions';

export const loginReducer = (
  state = initialFbGoogleLoginStore,
  action: IFbGoogleLoginActions,
): IFbGoogleLoginStore => {
  switch (action) {
    default:
      return state;
  }
};
