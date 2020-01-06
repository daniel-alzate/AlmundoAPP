/**
 * @format
 */

import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { getHotelDetail } from '../../../Services'
import Icon from 'react-native-vector-icons/MaterialIcons';


import {
  ScrollView,
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList
} from 'react-native';

import styles from './style'

export default class HotelDetail extends Component<HotelDetailProps, HotelDetailState> {

  constructor(props: HotelDetailProps) {
    super(props)
    this.state = {
      hotelDetail: ""
    }
  }

  componentDidMount() {
    getHotelDetail(this.props.navigation.state.params._id).then(hotelDetail => this.setState({ hotelDetail: hotelDetail }))
  }

  render() {

    console.log(this.state.hotelDetail)

    const { name, stars, price } = this.props.navigation.state.params;

    const { hotelDetail } = this.state;

    return (
      <View >

        {console.log('log', hotelDetail)}

        {hotelDetail === "" ? <ActivityIndicator size='large' color='rgba(255, 143, 41, 1.0)' /> :

          <ScrollView style={styles.container}>

            <FlatList
              data={hotelDetail.images}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item: any, index) => item+index}
              renderItem={({ item }) =>
                <Image
                  style={{ width: 400, height: 200 }}
                  source={{ uri: item }} />
              } />


            <View style={styles.infoContainer} >
              <Text style={styles.title}>{name}</Text>
              <Text>{'Ciudad, Pais'}</Text>
              <Text>{stars}{' estrellas'}</Text>
            </View>

            <View style={styles.locationSection}>

              <Text style={styles.title}>{'Ubicación'} </Text>

              <View style={styles.subLocationSection}>
                <Icon name={'my-location'} size={25} color="#616161" />
                <Text>{hotelDetail.location.address}</Text>
              </View>

              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: hotelDetail.location.coordinate.latitude,
                  longitude: hotelDetail.location.coordinate.longitude,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}>
                <Marker
                  coordinate={hotelDetail.location.coordinate} />
              </MapView>

            </View>

            <View style={styles.descriptionSection}>
              <Text style={styles.title}>{'Descripción'}</Text>
              <Text>{hotelDetail.description}</Text>
            </View>


          </ScrollView>
        }

      </View >


    );
  }
};