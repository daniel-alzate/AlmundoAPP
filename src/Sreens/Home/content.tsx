import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import styles from './style'

export default class HomeScreen extends Component<HomeScreenProps> {
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Cities')}>
          <Text> {'Hoteles Por ciudad'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Hotels')}>
          <Text>{'Ver todos los Hoteles'}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}