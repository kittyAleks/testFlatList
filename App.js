import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import DetailScreen from './src/screens/DetailScreen';
import MainScreen from './src/screens/MainScreen';
import {NavBar} from './src/components/NavBar';

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

export default class App extends React.Component {
    render() {
        return <AppContainer/>

    }
}

const AppNavigator = createStackNavigator({
    MainScreen: {
        screen: MainScreen
    },
    DetailScreen: {
        screen: DetailScreen
    }
},{
    initialRouteName: "MainScreen"
});

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },

});
