import {ILoginDispatchedProps, ILoginMappedProps} from './interface';
import {bindActionCreators, Dispatch} from 'redux';
import login from './login';
import {connect} from 'react-redux';
import {IApplicationState} from '../../store';

const mapStateToProps = (state: IApplicationState): ILoginMappedProps => ({
  loginStore: state.app.screens.login,
});

const mapDispatchToProps = (dispatch: Dispatch): ILoginDispatchedProps =>
  bindActionCreators(
    {
      //ide jönnek majd az actionok
    },
    dispatch,
  );

export const loginConnected = connect(undefined, mapDispatchToProps)(login);
