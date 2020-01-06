import { Colors } from '../../../Config/constants'

import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        // flex: 1,
        // position: 'relative',
        // flexDirection: 'column',
        backgroundColor: Colors.grey300
    },
    map: {
        height: 200,
        width: 350
    },
    infoContainer: {
        padding: 15,
        backgroundColor: Colors.white
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    locationSection: {
        height: 300,
        marginTop: 2,
        padding: 15,
        backgroundColor: Colors.white
    },

    descriptionSection: {
        marginTop: 2,

        backgroundColor: Colors.white,
        padding: 15,

        flexDirection: 'column',
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