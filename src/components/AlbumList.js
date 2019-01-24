import React, {Component}from 'react';
import { View , Text, Button } from 'react-native';

class AlbumList extends Component {
    componentWillMount() {
        console.log('hey');
    }

    onPress = () => {
        console.log('hey');
    };

    render() {
        return (
            <View>
                <Button title='Click Me' onPress={this.onPress}/>
                <Text>AlbumList..</Text>
            </View>
        );
    }
}

export default AlbumList;