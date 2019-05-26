/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {Provider} from 'react-redux';
import initStore from './store';

const store = initStore();

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);
