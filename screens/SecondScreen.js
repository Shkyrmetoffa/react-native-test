import React from 'react';
import { Text, View } from 'react-native';
const util = require('util');

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        title: 'Second Screen'
    };
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>This is screen two</Text>
                <Text>Params from screen 1: {params.name}, email = {params.email}</Text>
            </View>
        )
    }
}