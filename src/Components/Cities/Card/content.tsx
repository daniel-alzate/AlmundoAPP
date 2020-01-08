import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './style'
import { CityCardProps } from './interface'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({ name = "", country = "", onSelectCity }: CityCardProps) => {

    return (

        <TouchableOpacity style={styles.container} onPress={() => onSelectCity()}
            activeOpacity={0.5}>

            <Icon style={styles.icon} name={'my-location'} size={25} color="#616161" />
            <Text numberOfLines={1} style={styles.name}>{name}, {country}</Text>

        </TouchableOpacity>

    )
}