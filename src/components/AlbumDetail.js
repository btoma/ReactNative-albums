import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image} = album;
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image source={{uri: thumbnail_image}} style={styles.thumbnailStyle}/>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
                <View></View>
            </CardSection>
        </Card>
    );
};


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};
export default AlbumDetail;