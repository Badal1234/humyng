/* eslint-disable no-console */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import Router from './src/Router/index';
import reduxStore from '@store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import config from './aws-exports';
import Amplify from 'aws-amplify';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-community/async-storage';
export const reduxPersistStore = persistStore(reduxStore);
const App = () => {
  useEffect(() => {
    console.disableYellowBox = true;
  }, []);
  Amplify.configure(config);
  PushNotification.configure({
    onRegister: function(token) {
      console.log('token1', token);
      AsyncStorage.setItem('fcmToken', token?.token).then(data =>
        console.log('successfully saved'),
      );
    },
    // ...
    onNotification: function(notification) {
      console.log('NOTIFICATION:', notification);
    },
    senderID: '831704357588',
    popInitialNotification: true,
    requestPermissions: true,

    // ...
  });

  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={reduxPersistStore}>
        <Router />
      </PersistGate>
    </Provider>
  );
};
export default App;
