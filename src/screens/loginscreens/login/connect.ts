import {ILoginDispatchedProps, ILoginMappedProps} from './interface';
import {bindActionCreators, Dispatch} from 'redux';
import login from './login';
import {connect} from 'react-redux';
import {IApplicationState} from '../../../store';
import {
  navigateToFbGoogleLogin,
  navigateToSignUp,
  navigateToSignIn,
} from './store/actions/loginAction';

const mapStateToProps = (state: IApplicationState): ILoginMappedProps => ({
  loginStore: state.app.screens.login,
});

const mapDispatchToProps = (dispatch: Dispatch): ILoginDispatchedProps =>
  bindActionCreators(
    {
      navigateToFbGoogleLogin,
      navigateToSignUp,
      navigateToSignIn,
    },
    dispatch,
  );

export const loginConnected = connect(
  undefined,
  mapDispatchToProps,
)(login);
