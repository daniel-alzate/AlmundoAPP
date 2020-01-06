import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button
} from 'react-native';
import styles from './style'

export default class HomeScreen extends Component<HomeScreenProps> {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.location}>
          {this.props.navigation.getParam('name', '--')}
          {', '}
          {this.props.navigation.getParam('country', '--')}
        </Text>

        <Button
          title={'Seleccionar ciudad'}
          onPress={() => this.props.navigation.navigate('Cities')}
        />

        <Button
          title="Ver todos los Hoteles"
          onPress={() => this.props.navigation.navigate('Hotels')}
        />

      </View>
    );
  }
}