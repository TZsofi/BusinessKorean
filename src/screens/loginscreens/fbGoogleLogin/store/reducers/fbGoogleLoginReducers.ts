import {initialFbGoogleLoginStore, IFbGoogleLoginStore} from '../store';
import {
  IFbGoogleLoginActions,
  fbGoogleLoginActionTypes,
} from '../actions/fbGoogleLoginActions';

export const fbGoogleLoginReducer = (
  state = initialFbGoogleLoginStore,
  action: IFbGoogleLoginActions,
): IFbGoogleLoginStore => {
  switch (action) {
    default:
      return state;
  }
};
