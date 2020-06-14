import {ISignInDispatchedProps, ISignInMappedProps} from './interface';
import {bindActionCreators, Dispatch} from 'redux';
import SignIn from './SignIn';
import {connect} from 'react-redux';
import {IApplicationState} from '../../../store';
import {updateEmail, updatePassword} from './store/actions/signInAction';

const mapStateToProps = (state: IApplicationState): ISignInMappedProps => ({
  signInStore: state.app.screens.signIn,
  modalVisible: true,
});

const mapDispatchToProps = (dispatch: Dispatch): ISignInDispatchedProps =>
  bindActionCreators(
    {
      updateEmail,
      updatePassword,
    },
    dispatch,
  );

export const signInConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
