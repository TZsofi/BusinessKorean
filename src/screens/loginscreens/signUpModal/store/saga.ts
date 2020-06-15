import {all, takeEvery} from 'redux-saga/effects';
import {signUpActionTypes} from './actions/signUpAction';
import {IRegisterUserAction} from './actions/signUpActionInterface';
import firebase from 'firebase';
import {Alert} from 'react-native';

export function* signUpSaga() {
  yield all([watchPost()]);
}

function* watchPost() {
  yield takeEvery(signUpActionTypes.REGISTER_USER, registerUserWatcher);
}
function* registerUserWatcher(action: IRegisterUserAction) {
  console.log('saga');
  //checking if fields aren't empty
  if (
    action.registerParams.email === '' &&
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
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          action.registerParams.email,
          action.registerParams.password,
        )
        .then(res => Alert.alert('Sikerült regisztralni'))

        .catch(error => Alert.alert('Hiba'));
    } finally {
      console.log('vege');
    }
  }
}
