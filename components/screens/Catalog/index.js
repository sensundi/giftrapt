import React, { Component } from "react";
import Home from "./Home.js";
import JadeChat from "./JadeChat.js";
import NineChat from "./NineChat.js";
import SearchCategories from "./Search.js";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Search: {screen: SearchCategories},
    JadeChat: { screen: JadeChat },
    NineChat: { screen: NineChat }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
              <Icon name="home" />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Search")}>
              <Icon name="search" />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("JadeChat")}>
              <Icon name="cart" />
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("NineChat")}>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));