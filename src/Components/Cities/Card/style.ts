import { Colors } from '../../../Config/constants'
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 60,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems:"center"
    },
    icon: {
        marginHorizontal: 16
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.grey900
    }
})