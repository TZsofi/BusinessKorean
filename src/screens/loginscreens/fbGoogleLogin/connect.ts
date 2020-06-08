import {
  IFbGoogleLoginDispatchedProps,
  IFbGoogleLoginMappedProps,
} from './interface';
import {bindActionCreators, Dispatch} from 'redux';
import FBGoogleLogin from './FbGoogleLogin';
import {connect} from 'react-redux';
import {IApplicationState} from '../../../store';

const mapStateToProps = (
  state: IApplicationState,
): IFbGoogleLoginMappedProps => ({
  fbGoogleLoginStore: state.app.screens.fbGoogleLogin,
});

const mapDispatchToProps = (
  dispatch: Dispatch,
): IFbGoogleLoginDispatchedProps =>
  bindActionCreators(
    {
      //ide jönnek majd az actionok
    },
    dispatch,
  );

export const fbGoogleloginConnected = connect(
  undefined,
  mapDispatchToProps,
)(FBGoogleLogin);
