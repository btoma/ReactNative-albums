/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Albums'} style={styles.contentStyle}/>
        <AlbumList/>
      </View>
    );
  }
}

const styles = {
    contentStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2}
    }
};