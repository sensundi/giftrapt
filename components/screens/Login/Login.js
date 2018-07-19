import React from "react";
import { StatusBar,Image } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Item,
  Label,
  Input
} from "native-base";
import { styles } from '../../../styles/styles.js';
import { LoginManager } from 'react-native-fbsdk';

//import { FBLoginButton } from '../FbLogin.js';
var FBLoginButton = require('../../ThirdParty/SocialIntegration/FbLogin.js');

export default class LoginPage extends React.Component {

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
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>GiftRapt</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
            <Image
                source={{
                    uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/master/assets/drawer-cover.png"
                }}
                style={{
                    height: 120,
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center"
                }}
              />
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button
            full
            style={styles.ggButton}
            onPress={this.onPressLogin.bind(this)}
           >
            <Text style={styles.buttonText}>Login to GiftGram</Text>
          </Button>
          <Button
            full
            primary
            style={styles.fbButton}
            onPress={this.onPressLoginFb}
          >
            <Text style={styles.buttonText}>Login with Facebook</Text>
          </Button>
           <Button
            full
            style={styles.gButton}
            onPress={this.onPressLoginGoogle}
          >
            <Text style={styles.buttonText}>Login with Google+</Text>
          </Button>
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
        </Content>
      </Container>
    );
  }
}