/**
 * @format
 */

import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import styles from './style'
import { HotelCardProps } from './interface'
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../../../Components/StarRating'

export default ({ id, name, stars, image, price, amenities, onSelectHotel }: HotelCardProps) => {

  return (

    <TouchableOpacity style={styles.container} onPress={() => onSelectHotel()}
      activeOpacity={0.5}>

      <Image style={styles.image} source={{ uri: image }} />

      <View style={styles.infoContainer}>

        <Text numberOfLines={1} style={styles.name}>{name}</Text>

        <StarRating score={stars}></StarRating>

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