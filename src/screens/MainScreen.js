
import React, {useEffect, useState} from 'react'
import {View, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Button, FlatList} from 'react-native';
import { Container, InputGroup, Input, Text, Button as NBButton } from 'native-base';
import { NavBar } from '../components/NavBar';
import {PostRow} from '../components/PostRow';

const url = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';

export default function MainScreen({navigation}) {

    const fetchTodos = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log('data', data)

        return data
    };

    const [dataSource, setDataSource] = useState();

    useEffect(() => {
        fetchTodos(url).then((data) => setDataSource(data));
    }, []);

    const openDetailPost = item => {
        navigation.navigate('DetailScreen', {item: item})
    };
    // onSearchNameTextChange = (value) => {
    //     this.setState({searchText: value});
    //
    //     const newData = this.state.data.filter(item => {
    //         const itemData = item.user.first_name ? item.user.first_name.toUpperCase() : ''.toUpperCase();
    //         const textData = value.toUpperCase();
    //         return itemData.indexOf(textData) > -1;
    //     });
    //     this.setState({data: newData, value: value})
    //     if(value === '') {
    //         this.setState({data: [...this.state.temp]}
    //         )}
    // };

        return (
            <Container style={{
                backgroundColor: 'white',
                fontFamily:'Campton',
                marginBottom: 50,
                flex:1,
            }}>
                <View style={{
                    paddingHorizontal: 10,
                    marginRight: 5,
                }}>
                    <InputGroup style={{marginTop: 6, marginBottom: 10}} borderType='regular'>
                        <Input
                            style={styles.inputStyle}
                            borderType='regular'
                            // value={searchText}
                            autoCapitalize="none"
                            autoCorrect={false}
                            // onChangeText={onSearchNameTextChange}
                            placeholder='Search by name'/>
                    </InputGroup>
                </View>

                <View style={{flex: 1}}>
                    <FlatList
                        data={dataSource}
                        keyExtractor={(item, index) => item.id}
                        renderItem={ ({item}) => <PostRow item={item} onOpen={openDetailPost}/>}
                    />
                </View>

                <View style={{paddingHorizontal: 20}}>
                    <NBButton block style={{
                        backgroundColor: '#00b7ad',
                        alignItems: 'center',
                        marginTop: 30
                    }}
                        onPress={() => {alert('Hi')}}>
                        <Text allowFontScaling={false}
                              style={{
                                  lineHeight: 23,
                                  fontSize: 23,
                                  color: 'white'
                              }}>Next
                        </Text>
                    </NBButton>
                </View>
            </Container>
        )
}
MainScreen.navigationOptions = {
    headerTitle: 'Users List',
};
const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        paddingLeft: 10,
        paddingBottom: 5,
        borderRadius: 5,
        borderColor: '#c9c9c9',
        height: 40,
    }

});


