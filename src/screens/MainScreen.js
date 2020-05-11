
import React, {useEffect, useState} from 'react'
import {View, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Button, FlatList} from 'react-native';
import { Container, InputGroup, Input, Text, Button as NBButton } from 'native-base';
import { NavBar } from '../components/NavBar';

const url = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';

export default function MainScreen({navigation}) {

    const fetchTodos = async (url) => {
        const response = await fetch(url);
        const data = await response.json();

        return data
    };
    const [dataSource, setDataSource] = useState();

    useEffect(() => {
        fetchTodos(url).then((data) => setDataSource(data));
        console.log('dataSource', dataSource)
    }, []);

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

    const renderItem = (item, sectionID, rowID) => {
        // const {navigate} = this.props.navigation;
        return (
            <View style={{paddingHorizontal: 20,}}>
                <TouchableOpacity style={{
                    paddingTop: 10,
                    borderBottomWidth: 1, borderColor: '#868b9b',
                }}
                                  key={rowID}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <TouchableOpacity>
                                <Image
                                    source={{uri: `${item.user.profile_image.large}`}}
                                    style={styles.imageStyle}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: 'column', flex: 43, marginLeft: 30, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <Text style={{
                                    lineHeight: 25,
                                    color: '#212529',
                                    fontSize: 18
                                }}>{item.user.first_name}</Text>
                                <Text style={{
                                    color: '#7f7f7f',
                                    fontSize: 17,
                                    fontFamily: 'Georgia',
                                }}>{item.user.last_name}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flex: 25,
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }}>
                            <Button
                                title='Click' color='#b5b5b5'
                                onPress={() => {
                                    navigation.navigate('DetailScreen', {
                                        first_name: item.user.first_name,
                                        last_name: item.user.last_name,
                                        image: item.user.profile_image.large,
                                    });
                                }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };
        return (
            <Container style={{
                backgroundColor: 'white',
                fontFamily:'Campton',
                marginBottom: 50,
                flex:1,
            }}>
                <NavBar/>
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
                        renderItem={ (row, sectionID, rowID) => renderItem(row.item, sectionID, rowID) }
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
    headerTitle: false

};
const styles = StyleSheet.create({
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 80/ 2,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    inputStyle: {
        borderWidth: 1,
        paddingLeft: 10,
        paddingBottom: 5,
        borderRadius: 5,
        borderColor: '#c9c9c9',
        height: 40,
    }
});


