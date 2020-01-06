/**
 * @format
 */

import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './style'
import { AmenitiesProps } from './interface'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({ amenities, customStyle }: AmenitiesProps) => {

  return (

    <View style={styles.amenitiesSection}>
      <FlatList
        data={amenities}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item+index}
        renderItem={({ item }) =>
          <Icon name={item} size={20} color="#616161" />
        } />
    </View>

  )
}