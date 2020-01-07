import React from 'react'
import { View, PanResponder } from 'react-native'
import { IPropsStarRaiting } from './interface'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style'
import { NumberToArray } from '../../Config/constants'

export default ({ score = 0 }: IPropsStarRaiting) => {

    return (
        score > 0 ?
            <View style={styles.containerStars}>
                {NumberToArray[score].map((el: any, index: any) => <Icon key={'mykey' + index} name="star" size={25} color={"#ffc400"} />)}
            </View>
            : null
    )
}