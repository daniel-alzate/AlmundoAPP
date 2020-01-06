/**
 * @format
 */

import React, { Component } from 'react';
import CityCard from '../../Components/Cities/Card'
import { getCities } from '../../Services'
import styles from './style'
import {
  View,
  Text,
  FlatList
} from 'react-native';

export default class CitiesList extends Component<CitiesListProps, CitiesListState> {

  constructor(props) {
    super(props)
    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    getCities().then(cities => this.setState({ cities: cities }))
  }

  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={this.state.cities}
          renderItem={({ item }) =>
            <CityCard {...item} onSelectCity={() => this.props.navigation.navigate('Home',
              {
                ...item
              })} />
          }
          keyExtractor={item => item._id}
        />

      </View>
    );
  }
};