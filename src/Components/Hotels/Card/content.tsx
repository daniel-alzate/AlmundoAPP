/**
 * @format
 */

import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import styles from './style'
import { HotelCardProps } from './interface'
import StarRating from '../../../Components/StarRating'
import Amenities from '../Amenities'

export default ({ id, name = "", stars = 0, image = "", price = 0, amenities = [], city = {}, onSelectHotel }: HotelCardProps) => {

  return (

    <TouchableOpacity style={styles.container} onPress={() => onSelectHotel()}
      activeOpacity={0.5}>

      <Image style={styles.image} source={{ uri: image }} />

      <View style={styles.infoContainer}>

        <Text numberOfLines={1} style={styles.name}>{name}</Text>

        <Text numberOfLines={1} style={styles.location}>{city.name}, {city.country}</Text>

        <StarRating score={stars} />

        <Amenities amenities={amenities}></Amenities>

        <View style={styles.priceContainer}>
          <Text style={styles.priceDescription}>{'Precio por noche:  '}</Text>
          <Text style={styles.boldFont}>
            {'$'} {price}
          </Text>
        </View>

      </View>
    </TouchableOpacity>

  )
}