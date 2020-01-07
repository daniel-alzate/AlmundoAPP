import { StyleSheet } from 'react-native';
import { Colors } from '../../Config/constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: 'center',
    },
    location: {
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: Colors.purple500,
        padding: 10,
        borderRadius: 20,
        marginVertical: 20

    },
    buttonText: {
        fontSize: 17,
        color: Colors.white


    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
})