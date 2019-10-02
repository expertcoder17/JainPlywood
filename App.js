import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'
import axios from 'axios'
import MainNavigator from './src/routers/routes'

import { NativeModules } from 'react-native';

// if (__DEV__) {
//   NativeModules.DevSettings.setIsDebuggingRemotely(true)
// }
const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}

// Any 401 (UnAutherized) access will logout the app.
const { dispatch } = store
axios.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response
    if (status === 401) {
      dispatch(logOut())
    }
    return Promise.reject(error)
  }
)
