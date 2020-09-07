import React from 'react';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation'; // Version can be specified in package.json
import rootSwitch from './navigation/Router';
import {Provider} from 'react-redux';
import {configureStore} from './config/configureStore';
import 'react-native-gesture-handler';
import firebase from '@react-native-firebase/app';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './navigation/MainStack';

//const AppContainer = createAppContainer(rootSwitch);

const {store} = configureStore();

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </Provider>
    );
  }
}
