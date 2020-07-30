import {all, takeEvery} from 'redux-saga/effects';
import {loginActionTypes} from './actions/loginAction';
import {
  IRegisterUserAction,
  ILoginUserAction,
} from './actions/loginActionInterface';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export function* loginSaga() {
  yield all([watchPost()]);
}

function* watchPost() {
  yield takeEvery(loginActionTypes.REGISTER_USER, registerUserWatcher);
  yield takeEvery(loginActionTypes.LOGIN_USER, loginUserWatcher);
}
function* registerUserWatcher(action: IRegisterUserAction) {
  console.log('saga');

  //checking if fields aren't empty
  if (
    action.registerParams.email === '' ||
    action.registerParams.password === ''
  ) {
    Alert.alert('Please enter your email, and password into the fields');
  }
  //checking if passwords are the same
  else if (
    action.registerParams.password !== action.registerParams.passwordAgain
  ) {
    Alert.alert("Passwords don't match");
  } else {
    console.log('saga else');
    console.log(action.registerParams.email);
    console.log(action.registerParams.password);
    try {
      yield auth().createUserWithEmailAndPassword(
        action.registerParams.email,
        action.registerParams.password,
      );
      console.log('Sikerült regisztralni');
    } catch (error) {
      console.log(error);
      console.log('Hiba');
    }
  }
  console.log('vege a saganak');
}

function* loginUserWatcher(action: ILoginUserAction) {
  console.log('saga');
  //checking if fields aren't empty
  if (action.loginParams.email === '' || action.loginParams.password === '') {
    Alert.alert('Please enter your email, and password into the fields');
  } else {
    console.log('saga else');
    console.log(action.loginParams.email);
    console.log(action.loginParams.password);
    try {
      auth().signInWithEmailAndPassword(
        action.loginParams.email,
        action.loginParams.password,
      );
      console.log('Sikerült bejelentkezni');
    } catch (error) {
      Alert.alert(error);
    }
  }
  console.log('vege a saganak');
}
