import {
  IFbGoogleLoginDispatchedProps,
  IFbGoogleLoginMappedProps,
} from './interface';
import {bindActionCreators, Dispatch} from 'redux';
import login from './FbGoogleLogin';
import {connect} from 'react-redux';
import {IApplicationState} from '../../../store';

const mapStateToProps = (
  state: IApplicationState,
): IFbGoogleLoginMappedProps => ({
  loginStore: state.app.screens.login,
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
)(login);
