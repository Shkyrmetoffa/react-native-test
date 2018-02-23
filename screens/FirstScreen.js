import React from 'react';
import { Text, View, Button } from 'react-native';
const util = require('util');

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        title: 'First Screen'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is screen one</Text>
                <Button
                    onPress={
                        () => navigate("Second", {name: 'Jane', email: 'shkyrmetoffa@gmail.com'})
                    }
                    title='Go to screen two'
                />
            </View>
        )
    }
}