import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { CityCardProps } from './interface'

export default ({ name, country, onSelectCity }: CityCardProps) => {

    return (

        <TouchableOpacity style={styles.container} onPress={() => onSelectCity()}
            activeOpacity={0.5}>

            <View style={styles.infoContainer}>
                <Text numberOfLines={1} style={styles.name}>{name}, {country}</Text>
            </View>

        </TouchableOpacity>

    )
}