import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export class Catalog extends React.Component
{
    static navOptions = {
        title: "Search GiftRapt"
    }
    render(){
        return(
            <View>
                <Text> Search now to gift someone sourced locally</Text>
            </View>
        );
    }
}
