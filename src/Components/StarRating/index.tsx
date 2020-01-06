import React from 'react'
import { View, PanResponder } from 'react-native'
import { IPropsStarRaiting } from './interface'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style'
import { NumberToArray } from '../../Config/constants'

export default ({ styleStar, score }: IPropsStarRaiting) => {

    return (
        score > 0 ?
            <View style={styles.containerStars}>
                {NumberToArray[score].map(() => <Icon name="star" size={25} color={"#ffc400"} />)}
            </View>
            : null
    )
}