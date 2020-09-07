import {ILoginDispatchedProps, ILoginMappedProps} from './interface';
import {bindActionCreators, Dispatch} from 'redux';
import Login from './Login';
import {connect} from 'react-redux';
import {IApplicationState} from '../../../store';
import {
  navigateToFbGoogleLogin,
  updateEmail,
  updatePassword,
  updatePasswordAgain,
  registerUser,
  showSignInModal,
  showSignUpModal,
  hideSignInModal,
  hideSignUpModal,
  loginUser,
} from './store/actions/loginAction';

const mapStateToProps = (state: IApplicationState): ILoginMappedProps => ({
  loginStore: state.app.screens.login,
});

const mapDispatchToProps = (dispatch: Dispatch): ILoginDispatchedProps =>
  bindActionCreators(
    {
      navigateToFbGoogleLogin,
      updateEmail,
      updatePassword,
      updatePasswordAgain,
      registerUser,
      showSignInModal,
      showSignUpModal,
      hideSignInModal,
      hideSignUpModal,
      loginUser,
    },
    dispatch,
  );

export const loginConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
