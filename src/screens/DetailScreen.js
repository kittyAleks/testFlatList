import React, {Component, useState, useCallback} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

export const DetailScreen = ({navigation}) => {
    const item = navigation.getParam('item');

    return (
        <View style={styles.detailContainer}>
            <View style={{fontSize: 30}}>
                <Text style={{fontSize: 20}}>{item.user.first_name}{' '}{item.user.last_name}</Text>
            </View>
            <View style={{paddingTop: 20}}>
                <Image
                    source={{uri: `${item.user.profile_image.large}`}}
                    style={styles.imageStyle}
                />
            </View>
            <Button title='Go back' color={'#7e7e7e'}
                    onPress={() => navigation.navigate('MainScreen')}
            />
        </View>
    );
}

DetailScreen.navigationOptions = {
    headerTitle: 'User detail list'
};

const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40
    },
    imageStyle: {
        width: 350,
        height: 350,
        borderRadius: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#fff'
    }
});
