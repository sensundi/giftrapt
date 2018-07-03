import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LoginManager } from 'react-native-fbsdk';

import { styles } from '../../styles/styles.js';

//import { FBLoginButton } from '../FbLogin.js';
var FBLoginButton = require('../ThirdParty/SocialIntegration/FbLogin.js');

export class LoginPage extends React.Component<Props> {

    onPressLogin() {
        this.props.navigation.navigate('Catalog');
    }
    onPressLoginFb() {
        //var navigation = this.props.navigation;
        var state = "not logged in";
        LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled')
                } else {
                    console.log('Login success with permissions: ' + result.grantedPermissions.toString())
                    state = "logged in";
                    //navigation.navigate('Catalog');
                }
            },
            function (error) {
                console.log('Login fail with error: ' + error)
            }
        );
    }
    onPressLoginGoogle() {
        Alert.alert("Login with Google")
    }
    onPressCreate() {
        Alert.alert("Create account touched")
    }
    onPressForgotPw() {
        Alert.alert("Forgot Password touched")
    }
  render() {

    return (
      <View style={styles.bannerView}>
        <View style={styles.header}>
            <Text style={styles.headerText}>
                GiftRapt
            </Text>
        </View>
         //View below the banner
        <View style={styles.inputView} >
            <TextInput
                style={styles.userInput}
                placeholder="Username"
                />
            <TextInput
                style={styles.userInput}
                placeholder="Password"
                />

            <TouchableOpacity onPress={this.onPressLogin.bind(this)}>
                <View style={styles.ggButton}>
                    <Text style={styles.buttonText}>Login with GiftGram</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressLoginFb}>
                <View style={styles.fbButton}>
                    <Text style={styles.buttonText}>Login with Facebook</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressLoginGoogle}>
                <View style={styles.gButton}>
                    <Text style={styles.buttonText}>Login with Google+</Text>
                </View>
            </TouchableOpacity>
            <Button
                onPress={this.onPressCreate}
                title="Or Create Account"
                color="rgb(104,104,104)"
                accessibilityLabel="Press this button to create a giftgram account"
            />
            <Button
                onPress={this.onPressForgotPw}
                title="Forgot Password"
                color="rgb(104,104,104)"
                accessibilityLabel="Press this button if you have forgotten your password"
            />
        </View>
      </View>
    );
  }
}
