/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Text,
  View,
} from 'react-native';
//import { StackNavigator } from 'react-navigation';
//import {LoginStack, AppStack} from './components/navigation/navigators.js';

//const App = StackNavigator({
//    LoginStack: {screen: LoginStack},
//    AppStack: {screen: AppStack},
//},{
//    headerMode: 'screen',
//    mode: 'modal',
//})

//export default App;
//AppRegistry.registerComponent('App', () => App);

import LoginPage from "./components/screens/Login/index.js";

export default class GiftRapt extends Component{
    constructor() {
        super();
        this.state = {
          isReady: false
        };
    }
    render() {
        return <LoginPage {...this.props}/>;
    }
}