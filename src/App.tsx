import React from 'react';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation'; // Version can be specified in package.json
import rootSwitch from './navigation/router';
import {Provider} from 'react-redux';
import {configureStore} from './config/configureStore';
import 'react-native-gesture-handler';
import firebase from 'firebase';

const AppContainer = createAppContainer(rootSwitch);

const {store} = configureStore();

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    firebase.initializeApp({
      apiKey: 'AIzaSyDhr5bpz1DMQOiFuYv2hvXjDOvTA5rJzjE',
      authDomain: 'business-korean-fe1d8.firebaseapp.com',
      databaseURL: 'https://business-korean-fe1d8.firebaseio.com',
      projectId: 'business-korean-fe1d8',
      storageBucket: 'business-korean-fe1d8.appspot.com',
      messagingSenderId: '747624942993',
      appId: '1:747624942993:web:2473e8a2998f69dfaa1e30',
      measurementId: 'G-SK94EMSD06',
    });
  }

  public render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
