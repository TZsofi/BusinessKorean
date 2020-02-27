import {AnyAction, combineReducers, Reducer} from 'redux';
import {IScreensStore, screensReducer} from './screens/store';

export interface IAppStore {
  screens: IScreensStore;
}

export interface IApplicationState {
  app: IAppStore;
}

export interface ResetAction {
  type: 'RESET_EVERYTHING';
}

export const resetEverything = (): ResetAction => ({
  type: 'RESET_EVERYTHING',
});

export const appReducer = combineReducers<IAppStore>({
  screens: screensReducer,
});

export const appRootReducer: Reducer<IAppStore> = (
  state: IAppStore | undefined,
  action: AnyAction,
): IAppStore => {
  if (action.type === 'RESET_EVERYTHING') {
    state = undefined;
  }
  return appReducer(state, action);
};
