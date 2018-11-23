import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Platform,
  StyleSheet,
} from 'react-native';

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

export class Catalog extends React.Component
{
    static navOptions = {
        title: "Search GiftRapt"
    }
    render(){
        return(
            <Container>
                <Text> Search now to gift someone sourced locally</Text>
            </Container>
        );
    }
}
