import React, {Component, useState, useCallback} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    render() {
        const nav = this.props.navigation.state.params;
        return (
            <View style={styles.detailContainer}>
            <View style={{fontSize: 30}}>
                <Text style={{fontSize: 20}}>{nav.first_name}{' '}{nav.last_name}</Text>
            </View>
            <View style={{paddingTop: 20}}>
                <Image
                    source={{uri: `${nav.image}`}}
                    style={{
                        width: 350,
                        height: 350,
                        borderRadius: 20,
                        marginBottom: 15,
                        borderWidth: 1,
                        borderColor: '#fff'}}
                />
            </View>
            <View>
                <Button title='Go back' color={'#7e7e7e'}
                        onPress={() => this.props.navigation.goBack()}
                />
            </View>
        </View>
        );
    }
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
    }
});
