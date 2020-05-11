import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import MainScreen from "../screens/MainScreen";
import DetailScreen from "../screens/DetailScreen";

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

export const AppContainer = createAppContainer(AppNavigator);

