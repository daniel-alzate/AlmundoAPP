import { Colors } from '../../../Config/constants'
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 300,
        borderRadius: 5,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,

    },
    infoContainer: {
        height: 160,
        padding: 15
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.grey900,
    },
    priceDescription: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0,
        color: Colors.grey700
    },
    priceContainer: {
        bottom: 8,
        flexDirection: 'row',
        alignItems: "flex-end"
    },
    boldFont: {
        fontSize: 20
    }
})