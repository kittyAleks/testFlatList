import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import MainScreen from "../screens/MainScreen"
import {DetailScreen} from "../screens/DetailScreen"
import {THEME} from '../theme'

const AppNavigator = createStackNavigator({
    MainScreen: {
        screen: MainScreen
    },
    DetailScreen: {
        screen: DetailScreen
    }
},{
    initialRouteName: "MainScreen",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR
    }
});

export const AppContainer = createAppContainer(AppNavigator);

