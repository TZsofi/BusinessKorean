import {combineReducers} from 'redux';
import {loginReducer} from './login/store/reducers/loginReducer';
import {ILoginStore} from './login/store/store';

export interface IScreensStore {
  login: ILoginStore;
}

export const screensReducer = combineReducers<IScreensStore>({
  login: loginReducer,
});
