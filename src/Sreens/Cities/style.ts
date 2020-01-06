import { StyleSheet } from 'react-native';
import { Colors } from '../../Config/constants'


export default StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: Colors.grey200
    },
    styBoxHome: {
        flex: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
        width: 360
    },
    styBoxDestination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    styIconDestination: {
        fontSize: 25,
        justifyContent: 'center',
        color: 'rgba(100, 100, 100, 1.0)',
        margin: 5
    },
    styTextOpt: {
        color: 'rgba(100, 100, 100, 1.0)',
        fontSize: 13,
        lineHeight: 13,
        fontWeight: '200'
    }
})