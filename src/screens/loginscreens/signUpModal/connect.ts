import {ISignUpDispatchedProps, ISignUpMappedProps} from './interface';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {IApplicationState} from '../../../store';
import {
  updateEmail,
  updatePassword,
  updatePasswordAgain,
  registerUser,
} from './store/actions/signUpAction';
import SignUp from './SignUp';

const mapStateToProps = (state: IApplicationState): ISignUpMappedProps => ({
  signUpStore: state.app.screens.signUp,
  modalVisible: true,
});

const mapDispatchToProps = (dispatch: Dispatch): ISignUpDispatchedProps =>
  bindActionCreators(
    {
      updateEmail,
      updatePassword,
      updatePasswordAgain,
      registerUser,
    },
    dispatch,
  );

export const signUpConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
