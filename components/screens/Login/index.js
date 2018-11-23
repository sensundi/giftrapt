import React, { Component } from "react";
import LoginPage from "./Login.js";
import MainScreenNavigator from "../Catalog/index.js";
import Profile from "../ProfileScreen/index.js";
import SideBar from "../../navigation/SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Login: { screen: LoginPage },
    Catalog: { screen: MainScreenNavigator },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;