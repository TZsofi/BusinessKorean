import {IApplicationState} from '../../store';
import {IHomeMappedProps, IHomeDispatchedProps} from './interface';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {home} from './home';

const mapStateToProps = (state: IApplicationState): IHomeMappedProps => ({
  homeStore: state.app.screens.home,
});

const mapDispatchToProps = (dispatch: Dispatch): IHomeDispatchedProps =>
  bindActionCreators(
    {
      //majd actionok ide
    },
    dispatch,
  );

export const NewsSearchConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);
