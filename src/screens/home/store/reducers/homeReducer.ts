import {initialHomeStore, IHomeStore} from '../store';
import {IHomeActions} from '../actions/homeAction';

export const homeReducer = (
  state = initialHomeStore,
  action: IHomeActions,
): IHomeStore => {
  switch (action) {
    default:
      return state;
  }
};
