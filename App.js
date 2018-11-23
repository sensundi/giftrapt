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