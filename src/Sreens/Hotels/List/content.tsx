/**
 * @format
 */

import React, { Component } from 'react';
import HotelCard from '../../../Components/Hotels/Card'
import { getHotels } from '../../../Services'
import styles from './style'
import {
  View,
  FlatList,
  Alert
} from 'react-native';

const DATA = {
  "hotels": [
    {
      "id": "1",
      "name": "Dann Carlton Medellin Hotel",
      "stars": 5,
      "image": "https://images.almundo.com/201/1000000/120000/112600/112569/043d289f_z.jpg",
      "price": 261.561,
      "location": {
        "coordinate": {
          "latitude": 6.2064653,
          "longitude": -75.5735386
        },
        "address": "Cra 43A #7-50, Medellín, Antioquia"
      },
      "description": "Este es el texto de la descripcion del hotel Dann Carlton Medellin Hotel"
    },
    {
      "id": "2",
      "name": "NH Collection Medellín Royal",
      "stars": 5,
      "image": "https://images.almundo.com/201/2000000/1950000/1946400/1946355/9db4c0e5_z.jpg",
      "price": 200000,
      "location": {
        "coordinate": {
          "latitude": 6.197263,
          "longitude": -75.5748167
        },
        "address": "Carrera 42 n° 5 - sur 130, Medellín, Antioquia"
      },
      "description": "Este es el texto de la descripcion del hotel NH Collection Medellín Royal"
    }
  ]
}

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