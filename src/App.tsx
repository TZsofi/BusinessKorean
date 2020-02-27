import React from 'react';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation'; // Version can be specified in package.json
import rootSwitch from './navigation/router';
import {Provider} from 'react-redux';
import {configureStore} from './config/configureStore';
import 'react-native-gesture-handler';

const AppContainer = createAppContainer(rootSwitch);

const {store} = configureStore();

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
