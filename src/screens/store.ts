import {combineReducers} from 'redux';
import {loginReducer} from './login/store/reducers/loginReducer';
import {ILoginStore} from './login/store/store';
import {IHomeStore} from './home/store/store';
import {homeReducer} from './home/store/reducers/homeReducer';

export interface IScreensStore {
  login: ILoginStore;
  home: IHomeStore;
}

export const screensReducer = combineReducers<IScreensStore>({
  login: loginReducer,
  home: homeReducer,
});
