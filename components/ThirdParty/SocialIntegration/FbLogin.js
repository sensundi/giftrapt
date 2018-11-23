import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, LoginManager,AccessToken } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <LoginButton
          readPermissions={["public_profile email"]}
          title="Login with Facebook"
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => {LoginManager.setLoginBehavior("web");console.log("User logged out");}}
          width="350" />
      </View>
    );
  }
};

module.exports = FBLoginButton;