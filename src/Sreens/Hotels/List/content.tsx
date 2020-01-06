/**
 * @format
 */

import React, { Component } from 'react';
import HotelCard from '../../../Components/Hotels/Card'
import { getHotels } from '../../../Services'
import styles from './style'
import {
  View,
  FlatList
} from 'react-native';

export default class HotelList extends Component<HotelListProps, HotelListState> {

  constructor(props: HotelListProps) {
    super(props)
    this.state = {
      hotels: []
    }
  }

  componentDidMount() {
    getHotels().then(hotels => this.setState({ hotels: hotels }))
  }

  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={this.state.hotels}
          renderItem={({ item }) =>
            <HotelCard {...item} onSelectHotel={() => this.props.navigation.navigate('Detail',
              {
                ...item
              })} />
          }
        />

      </View>
    );
  }
};