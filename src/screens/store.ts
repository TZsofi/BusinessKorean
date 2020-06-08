import {combineReducers} from 'redux';
import {loginReducer} from './loginscreens/login/store/reducers/loginReducer';
import {ILoginStore} from './loginscreens/login/store/store';
import {fbGoogleLoginReducer} from './loginscreens/fbGoogleLogin/store/reducers/fbGoogleLoginReducers';
import {
  IFbGoogleLoginStore,
  initialFbGoogleLoginStore,
} from './loginscreens/fbGoogleLogin/store/store';
import {signInReducer} from './loginscreens/signIn/store/reducers/signInReducer';
import {ISignInStore} from './loginscreens/signIn/store/store';
import {IHomeStore} from './home/store/store';
import {homeReducer} from './home/store/reducers/homeReducer';

export interface IScreensStore {
  login: ILoginStore;
  home: IHomeStore;
  fbGoogleLogin: IFbGoogleLoginStore;
  signIn: ISignInStore;
}

export const screensReducer = combineReducers<IScreensStore>({
  login: loginReducer,
  home: homeReducer,
  fbGoogleLogin: fbGoogleLoginReducer,
  signIn: signInReducer,
});
