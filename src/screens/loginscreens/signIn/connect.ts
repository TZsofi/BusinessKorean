import {ISignInDispatchedProps, ISignInMappedProps} from './interface';
import {bindActionCreators, Dispatch} from 'redux';
import SignIn from './SignIn';
import {connect} from 'react-redux';
import {IApplicationState} from '../../../store';

const mapStateToProps = (state: IApplicationState): ISignInMappedProps => ({
  signInStore: state.app.screens.signIn,
});

const mapDispatchToProps = (dispatch: Dispatch): ISignInDispatchedProps =>
  bindActionCreators(
    {
      //ide jönnek majd az actionok
    },
    dispatch,
  );

export const signInConnected = connect(
  undefined,
  mapDispatchToProps,
)(SignIn);
